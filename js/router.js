import { displayProducts } from "./categoryView.js";
import { loadProductView } from './productView.js';
import { displayCartView } from './cartView.js';

// Funktsioon, mis vastutab vaadete vahel liikumise eest

export const navigate = (view, parem) => {
    const views = {
        category: () => displayProducts(parem || "all"), // Kasuta vaikeväärtust "all" kategooriana
        // product: () => loadProductView(parem), // üks toode
        cart: () => displayCartView(), // Näita ostukorvi vaadet
    };

    //Vali ja käivita sobiv vaade
    if (views[view]) {
        views[view]();

        //Muuda URL-i ilma lehte uuesti laadimata
        const newUrl = view === "category" ? "/" : `/${view}/${parem || ""}`;
        window.history.pushState({}, "", newUrl);
    }
};

// Sündmuse listener, kui kasutaja vajutab "tagasi" või "edasi" nuppu brauseris
window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    const [_, view, param] = path.split('/');
    navigate(view || "category", param);
});