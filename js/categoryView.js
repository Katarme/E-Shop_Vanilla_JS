import { fetchProducts } from "./api.js";

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
                <h3 class="toote-nimi">${product.title}</h3>
                <h4 class="kategooria">${product.category}</h4>
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



// const cartButton = document.getElementById("go-to-cart"); 
// cartButton.onclick = () => navigate("cart");

// function navigate(page) {
//     if (page === "cart") {
//         window.location.href = "cart.html"; // Change to your cart page
//     }
// }





// ______________________________________________________________


export const loadCategoryView = async (category) => {
    const products = await fetchProductsByCategory(category);
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Tühjenda tooteala
  
    // // Filtreeri tooted, kui valitud on kategooria
    // const filteredProducts =
    //   category === "all"
    //     ? products
    //     : products.filter((product) => product.category === category);
  
    products.forEach((productData) => {
      const product = new Product(
        productData.id,
        productData.title,
        productData.price,
        productData.description,
        productData.image
      );
  
      const productElement = document.createElement("div");
      productElement.classList.add("product-item");
      productElement.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>${product.price}€</p>
              <button id="add-to-cart-${product.id}">Lisa ostukorvi</button>
          `;
  
      // Klikk tootekaardil viib toote detailvaatesse
      productElement.onclick = () => navigate("product", product.id);
  
      productList.appendChild(productElement);
  
      document.getElementById(`add-to-cart-${product.id}`).onclick = (e) => {
        e.stopPropagation(); // Vältida, et tootekaardile klikkimine navigeeriks tootevaatesse, kui vajutatakse "Lisa ostukorvi" nuppu
        addToCart(productId);
        console.log("click");
      };
    });
  };