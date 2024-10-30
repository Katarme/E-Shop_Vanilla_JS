import { displayProducts } from "./categoryView.js";
// import { fetchProduct } from "./api.js";

const initApp = async () => {
    console.log("Olen siin");
    displayProducts();
};

// Lingin kategooriad onclick

// initializeInventory();

// const initApp = async () => {
//     const categories = await fetchCategories();
//     console.log(categories);
//     const categoryMenu = document.getElementById("category-menu");

//     categories.forEach((category) => {
//         const categoryElement = document.createAttribute.createElement("li");
//         categoryElement.textContent = category;
//         categoryElement. onclick = () => loadCategoryView(category);
//         categoryMenu.appendChild(categoryElement);
//     }),

//     loadCategoryView(categories[0]);
// }

document.addEventListener("DOMContentLoaded", initApp);

// JavaScript ostukorvi nägemiseks ostukorvi ikoonil vajutades paremal nav nurgas.
document.getElementById("myBtn").addEventListener("click", function() {         
    const element = document.getElementById("cart-container");         
    if (element.style.display === "none" || element.style.display === "") {             
        element.style.display = "block"; // Show the element        
        } else {             
        element.style.display = "none"; // Hide the element 
} });