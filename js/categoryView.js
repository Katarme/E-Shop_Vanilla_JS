import { fetchProducts } from "./api.js";
// import { fetchCategories } from "./api.js";

export async function displayProducts(category = null) {
    console.log("Fetchin tooted")
    const products = await fetchProducts();
    console.log(products);
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        if (!category || product.category === category) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `<div class="${product.category}">
                <image src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <h4>${product.category}</h4>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="buy-now" onclick="addToCart(${product.id})">Buy Now</button></div>
            `;
            productsContainer.appendChild(card);
        }
    });
    //     productsContainer.onclick = () => navigate("product", product.id)

//     button.addEventListener("click", (event) => {
//         // arrow function
// }
}