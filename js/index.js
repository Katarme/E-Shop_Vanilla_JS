import { displayProducts } from "./categoryView.js";

const initApp = async  () => {
    // Lae algne vaade
    console.log("Olen siin")
    displayProducts()

}

document.addEventListener("DOMContentLoaded", initApp);