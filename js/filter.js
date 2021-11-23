//VARIABLES
let ustensils = [];
let appareils = [];
let ingredients = [];
const selectedFilters = [];
const selectedFiltersUst = [];
const selectedFiltersApp = [];
const selectedFiltersIng = [];

//Filters
let ingredientsFilter = document.getElementById("ingredients");
let appareilsFilter = document.getElementById("appareils");
let ustensilesFilter = document.getElementById("ustensiles");
//Chevron down flèche du bas
let ingredientsChevron = document.getElementById("ing-chevron");
let appareilsChevron = document.getElementById("app-chevron");
let ustensilesChevron = document.getElementById("ust-chevron");
//Input
let ingredientsInput = document.getElementById("ingredients__input");
let appareilsInput = document.getElementById("appareils__input");
let ustensilesInput = document.getElementById("ustensiles__input");
//UL Id
let ulIngredients = document.getElementById("filterList_ingredients");
let ulAppareils = document.getElementById("filterList_appareils");
let ulUstensiles = document.getElementById("filterList_ustensiles");
//UL Class
const ingredientsLiBox = document.querySelector(".filterList_ing");
const appareilsLiBox = document.querySelector(".filterList_app");
const ustensilesLiBox = document.querySelector(".filterList_ust");
// Bouton div qui inclut le chevron
const filterIng = document.querySelector(".filter_ing");
const filterApp = document.querySelector(".filter_app");
const filterUst = document.querySelector(".filter_ust");

//FILTERS
ustensilesFilter.addEventListener("click", () => {
  let check = Check();
  if (ustensilesLiBox.classList.contains("filterList_ust_closed")) {
    filterBox("ust");
    filterUstensils(arrayTagSort);
    ustensils.forEach((ust) => createLiUst(ulUstensiles, ust));
  } else {
    ustensilesChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    ustensilesLiBox.innerHTML = "";
    filterUst.classList.replace("filter_ust_opened", "filter_ust_close");
    ustensilesLiBox.classList.replace(
      "filterList_ust_opened",
      "filterList_ust_closed"
    );
  }
  listenerUstensils();
});

appareilsFilter.addEventListener("click", () => {
  let check = Check();
  if (appareilsLiBox.classList.contains("filterList_app_closed")) {
    filterBox("app");
    filterAppareils(arrayTagSort);
    appareils.forEach((app) => createLiApp(ulAppareils, app));
  } else {
    appareilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    appareilsLiBox.innerHTML = "";
    filterApp.classList.replace("filter_app_opened", "filter_app_close");
    appareilsLiBox.classList.replace(
      "filterList_app_opened",
      "filterList_app_closed"
    );
  }
  listenerAppareils();
});

ingredientsFilter.addEventListener("click", () => {
  let check = Check();
  if (ingredientsLiBox.classList.contains("filterList_ing_closed")) {
    filterBox("ing");
    filterIngredients(arrayTagSort);
    ingredients.forEach((ing) => createLiIng(ulIngredients, ing));
  } else {
    ingredientsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    ingredientsLiBox.innerHTML = "";
    filterIng.classList.replace("filter_ing_opened", "filter_ing_close");
    ingredientsLiBox.classList.replace(
      "filterList_ing_opened",
      "filterList_ing_closed"
    );
  }
  listenerIngredients();
});

//INPUT
ustensilesInput.addEventListener("keyup", (e) => {
  ustensilesLiBox.innerHTML = "";

  if (e.target.value.length > 2) {
    const ustSearch = e.target.value.toLowerCase();
    const ustResults = ustensils.filter((ustensil) => {
      return ustensil.toLowerCase().includes(ustSearch);
    });
    ustResults.forEach((ustResult) => createLiUst(ulUstensiles, ustResult));
  }
  listenerUstensils();
});

appareilsInput.addEventListener("keyup", (e) => {
  appareilsLiBox.innerHTML = "";
  if (e.target.value.length > 2) {
    const appSearch = e.target.value.toLowerCase();
    const appResults = appareils.filter((appareil) => {
      return appareil.toLowerCase().includes(appSearch);
    });
    appResults.forEach((appResult) => createLiApp(ulAppareils, appResult));
  }
  listenerAppareils();
});

ingredientsInput.addEventListener("keyup", (e) => {
  ingredientsLiBox.innerHTML = "";
  if (e.target.value.length > 2) {
    const ingSearch = e.target.value.toLowerCase();
    const ingResults = ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(ingSearch);
    });
    ingResults.forEach((ingResult) => createLiIng(ulIngredients, ingResult));
  }
  listenerIngredients();
});

//FUNCTIONS
//Fonction pour filtrer les Appareils dans un tableau
function filterAppareils(recipes) {
  recipes.forEach((recipe) => {
    appareils = [...new Set([...appareils, ...[recipe.appliance]])].sort();
  });
}
// On crée la LI de Appareil
function createLiApp(Ul, app) {
  const appLi = document.createElement("li");
  appLi.className = "app_liste";
  appLi.textContent = app;
  ulAppareils.appendChild(appLi);
}
//Listener sur chaque appareil dans un tableau
function listenerAppareils() {
  const appListe = document.querySelectorAll(".app_liste");
  appListe.forEach((item) => {
    item.addEventListener("click", () => {
      selectedFiltersApp.push(item.textContent);
      createAllTags();
    });
  });
}

//Fonction pour filtrer les Ustensiles dans un tableau
function filterUstensils(recipes) {
  recipes.forEach((recipe) => {
    ustensils = [
      ...new Set([...ustensils, ...recipe.ustensils.map((y) => y)]),
    ].sort();
  });
}
// On crée la Li de ustensiles
function createLiUst(Ul, ust) {
  const ustLi = document.createElement("li");
  ustLi.className = "ust_liste";
  ustLi.textContent = ust;
  ulUstensiles.appendChild(ustLi);
}
//Listener sur chaque ustensile
function listenerUstensils() {
  const ustListe = document.querySelectorAll(".ust_liste");
  ustListe.forEach((item) => {
    item.addEventListener("click", () => {
      selectedFiltersUst.push(item.textContent);
      createAllTags();
    });
  });
}

//Fonction pour filtrer les Ingrédients
function filterIngredients(recipes) {
  recipes.forEach((recipe) => {
    ingredients = [
      ...new Set([
        ...ingredients,
        ...recipe.ingredients.map((i) => i.ingredient),
      ]),
    ].sort();
  });
}
// On crée la li des ingrédients
function createLiIng(Ul, ing) {
  const ingLi = document.createElement("li");
  ingLi.className = "ing_liste";
  ingLi.textContent = ing;
  ulIngredients.appendChild(ingLi);
}
//Listener sur chaque ingrédient
function listenerIngredients() {
  const ingListe = document.querySelectorAll(".ing_liste");
  ingListe.forEach((item) => {
    item.addEventListener("click", () => {
      selectedFiltersIng.push(item.textContent);
      createAllTags();
    });
  });
}

function Check() {
  check = "";
  razLiBox();
  if (results.length == 0) {
    check = recipes;
  } else {
    check = results;
  }
  return check;
}

/*// On contrôle quel array utiliser
function CheckTag() {
  check = "";
  razLiBox();
  CheckarrayTag();
  if (arrayTagSort.length == 0) {
    if (results.length == 0) {
      check = recipes;
    } else {
      check = results;
    }
  } else {
    check = arrayTagSort;
  }
  return check;
}

// On vérifie si il y a des tags ou non
function CheckarrayTag() {
  if (arrayTag.length == 0) {
    arrayTagSort.length = 0;
  }
}*/
