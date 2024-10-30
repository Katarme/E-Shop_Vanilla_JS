export class Product {
    constructor (id, title, price, description, image, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        this.image = image;
        this.quantity = 1;
    }
}