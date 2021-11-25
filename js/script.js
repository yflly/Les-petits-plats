const dom = document.getElementById("homepage-main");
const noResult = document.getElementById("noResult");
let results = [];
const arrayTagSort = [];
renderRecipes(recipes);

// ON AFFICHE TOUTES LES RECETTES AU CHARGEMENT DE LA PAGE
function renderRecipes(recipes) {
  recipes.forEach((recipe) => {
    document
      .getElementById("homepage-main")
      .appendChild(new Recipe(recipe).recipeNodeFactory());
  });
}

//BARRE DE RECHERCHE
const searchBar = document.getElementById("searchContent");

searchBar.addEventListener("keyup", (e) => {
  if (e.target.value.length >= 3) {
    let recipeTri = triRecipes(e.target.value);
  } else if (e.target.value.length < 3) {
    dom.innerHTML = "";
    results.length = 0;
    renderRecipes(recipes);
  }
});

searchBar.addEventListener("click", () => {
  filterUst.classList.replace("filter_ust_opened", "filter_ust_close");
  filterIng.classList.replace("filter_ing_opened", "filter_ing_close");
  filterApp.classList.replace("filter_app_opened", "filter_app_close");
  ustensilesLiBox.classList.replace(
    "filterList_ust_opened",
    "filterList_ust_closed"
  );
  appareilsLiBox.classList.replace(
    "filterList_app_opened",
    "filterList_app_closed"
  );
  ingredientsLiBox.classList.replace(
    "filterList_ing_opened",
    "filterList_ing_closed"
  );
  ingredientsInput.value = "";
  appareilsInput.value = "";
  ustensilesInput.value = "";
});

//On crée un tableau results
//On parcours chaque rubrique name, ingredients, description
//On alimente results dès qu'on trouve les premieres lettres de la barre de recherche(search)
//Filter
function triRecipes(search) {
  dom.innerHTML = "";
  const resultats = recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().startsWith(search) ||
      recipe.description.toLowerCase().includes(search) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(search)
      )
    );
  });
  if (resultats.length) {
    renderRecipes(resultats);
    noResult.textContent = "";
    results = resultats.slice(0);
  } else {
    dom.innerHTML = "";
    results.length = 0;
    noResult.textContent =
      "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
  }
}
