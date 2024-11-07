import { fetchProduct } from './api.js';
import { addToCart } from './cartView.js';

export const displayProductView = async (id) => {
    const product = await fetchProduct(id);
    const productDetailContainer = document.getElementById('products-container');
    productDetailContainer.innerHTML = "";

    if (product) {
        productDetailContainer.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="hinnakujundus">$${product.price.toFixed(2)}</p>
        `;

        const button = document.createElement('button');
        button.className = 'buy-now';
        button.setAttribute('id', product.id);
        button.innerText = 'Buy Now';
        button.onclick = (e) => {e.stopPropagation(); addToCart(product);}
    
        productDetailContainer.appendChild(button);
    } else {
        productDetailContainer.innerHTML = '<p>Toodet ei leitud.</p>';
    }
};