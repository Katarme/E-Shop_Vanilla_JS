import { fetchProducts } from "./api.js";
import { addToCart } from "./cartView.js";

let products = [];

// Kuvan API-ga fetchitud tooted toodete konteineris koos nime, kategooria, hinna ja pildiga
export async function displayProducts(category = null) {
    const products = await fetchProducts();
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        if (!category || product.category === category) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `<div class="${product.category}">
                <image src="${product.image}" alt="${product.title}">
                <h3 class="toote-nimi">${product.title}</h3>
                <h4 class="kategooria">${product.category}</h4>
                <p class="hinnakujundus">$${product.price.toFixed(2)}</p>
            `;

          const button = document.createElement('button');
          button.className = 'buy-now';
          button.setAttribute('id', product.id);
          button.innerText = 'Buy Now';
          button.onclick = (e) => {e.stopPropagation(); addToCart(product);}
          card.appendChild(button);

          productsContainer.appendChild(card);
        }
    });
}

// export const loadCategoryView = async (category) => {
//     const products = await fetchProductsByCategory(category);
//     const productList = document.getElementById("product-list");
//     productList.innerHTML = ""; // Tühjenda toodete ala
  
//     products.forEach((productData) => {
//       const product = new Product(
//         productData.id,
//         productData.title,
//         productData.price,
//         productData.description,
//         productData.image
//       );
  
//       const productElement = document.createElement("div");
//       productElement.classList.add("product-item");
//       productElement.innerHTML = `
//               <img src="${product.image}" alt="${product.title}">
//               <h3>${product.title}</h3>
//               <p>${product.price}€</p>
//               <button id="add-to-cart-${product.id}">Lisa ostukorvi</button>
//           `;
  
//       // Klikk tootekaardil viib toote detailvaatesse
//       productElement.onclick = () => navigate("product", product.id);
  
//       productList.appendChild(productElement);
  
//       document.getElementById(`add-to-cart-${product.id}`).onclick = (e) => {
//         e.stopPropagation(); // Väldib, et tootekaardile klikk navigeeriks tootevaatesse, kui vajutatakse "Lisa ostukorvi" nuppu
//         addToCart(productId);
//       };
//     });
//   };