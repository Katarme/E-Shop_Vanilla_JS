import { displayProducts } from "./categoryView.js";
import { fetchCategories } from "./api.js";
import { navigate } from "./router.js";
// import { navigate } from "./"

// const initApp = async () => {
//     console.log("Olen siin");
//     displayProducts();
// };

// Lingin kategooriad onclick

const initApp = async () => {
    const categories = await fetchCategories();
    console.log(categories);
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