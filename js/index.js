import { displayProducts } from "./categoryView.js";
import { fetchCategories } from "./api.js";

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

    displayProducts(categories[0]);
}

document.addEventListener("DOMContentLoaded", initApp);

// JavaScript ostukorvi kihi nägemiseks ostukorvi ikoonil vajutades paremal nav nurgas

document.getElementById("myBtn").addEventListener("click", function() {         
    const element = document.getElementById("cart-container");         
    if (element.style.display === "none" || element.style.display === "") {             
        element.style.display = "block"; // Näitab elementi      
        } else {             
        element.style.display = "none"; // Peidab elemendi
} });