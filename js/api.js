const API_URL ="https://fakestoreapi.com";

export const fetchProducts = async (param) => {
    // console.log("Jõudis p2rale")
    try {
        const response = await fetch(`${API_URL}/products`);
        console.log("Response", response.json)
        return await response.json();
    } catch (error) {
        console.error("Error", error);
    }
};

export const fetchProductByCategory = async (param) => {
    try {
        const response = await fetch(`${API_URL}/products/category/${param}`);
        return response.json();
    } catch (error) {
     console.error("Error: ", error);
     }
};

export const fetchProduct = async (id)=> {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/products/categories`);
        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
};