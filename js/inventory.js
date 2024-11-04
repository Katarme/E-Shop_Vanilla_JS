import { Product } from "./product.js";

export class Inventory {
    constructor() {
        this.products = {};
    }

    // Lisa toode laoseisu
    addProduct(product, quantity) {
      if (!(product instanceof Product)) {
          throw new Error("Toode peab olema Product klassi instants.");
        } else {
            this.products[product.id] = {product, quantity};
        }
    }

    getAllProducts() {
        return this.products;
}

    getAvailableProducts() {
        return this.products.filter(product => product.quantity > 0);
    }

    findProductByName(name) {
        return this.products.find(product => product.name === name);
    }
}


// addProduct (product, quantity) {
//     this.stock[product.name] = quantity;
// }

// checkStock(productName) {
//     return this.stock[productName] || 0;
// }

// reduceStock(productName, quantity) {
//     if (this.stock[productName] >= quantity) {
//         this.stock[productName] -= quantity;
//         return true;
//         }
//         return false;
// }

//     increaseStock(productName, quantity) {
//         this.stock[productName] += quantity;
//     }

// // Add product to the shopping cart
// window.addToCart = function (product) {
//     const stock = inventory
// }