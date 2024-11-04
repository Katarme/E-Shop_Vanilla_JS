import { displayProducts } from "./categoryView.js";
import { fetchCategories, fetchProducts } from "./api.js";
import { navigate } from "./router.js";
import { Product } from "./product.js";
import { Inventory } from "./inventory.js";

// import { navigate } from "./router.js"

// const initApp = async () => {
//     displayProducts();
// };

// Tooted lattu

const inventoryInstance = new Inventory();

async function initializeInventory() {
    const products = await fetchProducts();
    products.forEach((productData) => {
      const product = new Product(
        productData.id,
        productData.title,
        productData.price,
        productData.description,
        productData.image
      );
  
      const randomStock = Math.floor(Math.random() * (20 - 5) + 5);
      // Näiteks määrame igale tootele laokoguseks 10 ühikut
      inventoryInstance.addProduct(product, randomStock);
    });
    console.log("Inventuuri sisu", inventoryInstance.getAllProducts());
  }
  
  initializeInventory();

// Lingin kategooriad onclick

const initApp = async () => {
    const categories = await fetchCategories();
    const categoryMenu = document.getElementById("category-menu");

    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        categoryElement.textContent = category;
        categoryElement.onclick = () => displayProducts(category);
        categoryMenu.appendChild(categoryElement);
    }),

    displayProducts(categories[0]); // Tuleb esimene vaade

    const cartBtn = document.getElementById("cartBtn");
    cartBtn.onclick = () => navigate("cart");

    // document.getElementById("cartBtn").addEventListener("click", function() {         
    //     const element = document.getElementById("cart-container");         
    //     // if (element.style.display === "none" || element.style.display === "") {             
    //     //     element.style.display = "block"; // Näitab elementi      
    //     //     } else {             
    //     //     element.style.display = "none"; // Peidab elemendi
    //     navigate("cart");
    // });
}

document.addEventListener("DOMContentLoaded", initApp);