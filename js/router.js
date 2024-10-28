import { loadCategoryView } from "./loadCategoryView.js";
// import { loadProductView } from './productView.js';
// import { loadCartView } from './cartView.js';

// Funktsioon, mis vastutab vaadete vahel liikumise eest

export const navigate = (view, parem) => {
    const views = {
        category: () => loadCategoryView(parem || "all"), // Kasuta vaikeväärtust "all" kategooriana
        // 'product': () => loadProductView(parem), // üks toode
        // 'cart': () => loadCartView(), // Näita ostukorvi vaadet
    };

    //Vali ja käivita sobiv vaade
    if (views[view]) {
        views[view]();

        //Muuda URL-i ilma lehte uuesti laadimata
        const newUrl = view === "category" ? "/" : `/${view}/${parem || ""}`;
        window.history.pushState({}, "", newUrl);
    }
};

// Sündmuse kuulaja, kui kasutaja vajutab "tagasi" või "edasi" nuppu brauseris
window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    const [_, view, param] = path.split('/');
    navigate(view || "category", param);
});