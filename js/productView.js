import { fetchProduct } from './api.js';

export const displayProduct = async (id) => {
    const product = await fetchProduct(id);
    const productDetailContainer = document.getElementById('product-detail');

    if (product) {
        productDetailContainer.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="hinnakujundus">Price: $${product.price.toFixed(2)}</p>
            <button class="buy-now" onclick="addToCart(${product.id})">Buy Now</button>
        `;
    } else {
        productDetailContainer.innerHTML = '<p>Toodet ei leitud.</p>';
    }
};