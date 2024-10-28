import { displayProducts } from "./categoryView.js";
// import { fetchProduct } from "./api.js";

const initApp = async () => {
    console.log("Olen siin");
    displayProducts();
};

// const displayProductDetails = async (id) => {
//     const product = await fetchProduct(id);
//     const productDetailContainer = document.getElementById('product-detail');
    
//     if (product) {
//         productDetailContainer.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Price: $${product.price.toFixed(2)}</p>
//             <button class="buy-now" onclick="addToCart(${product.id})">Buy Now</button>
//         `;
//         productDetailContainer.style.display = 'block'; // Kuvab tootekaardi
//     } else {
//         productDetailContainer.innerHTML = '<p>Toodet ei leitud.</p>';
//         productDetailContainer.style.display = 'block'; // Kuvab tootekaardi
//     }
// };

// // Muuda existing product cards to call displayProductDetails
// const displayProducts = async (category = null) => {
//     const products = await fetchProducts();
//     const productsContainer = document.getElementById('products-container');
//     productsContainer.innerHTML = '';

//     products.forEach(product => {
//         if (!category || product.category === category) {
//             const card = document.createElement('div');
//             card.className = 'product-card';
//             card.innerHTML = `
//                 <img src="${product.image}" alt="${product.title}">
//                 <h3>${product.title}</h3>
//                 <p>Price: $${product.price.toFixed(2)}</p>
//                 <button class="buy-now" onclick="displayProductDetails(${product.id})">View Details</button>
//             `;
//             productsContainer.appendChild(card);
//         }
//     });
// };

document.addEventListener("DOMContentLoaded", initApp);