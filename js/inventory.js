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