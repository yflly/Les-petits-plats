const tagLine = document.getElementById("tags");
let arrayTag = [];
let arrayTagRemove = [];

//On crée le Tag
function createFilterTag(Selectfilter, type) {
  Selectfilter.forEach((filter) => {
    const tagDiv = document.createElement("div");
    const tagI = document.createElement("i");
    tagDiv.className = "filter_tag tag_" + type;
    tagDiv.textContent = filter;
    tagI.className = "far fa-times-circle";
    tagDiv.addEventListener("click", removeFilter(type, Selectfilter)); //Ajouter un listener sur le tag
    tagLine.appendChild(tagDiv);
    tagDiv.appendChild(tagI);
  });
}

//Remove filter
const removeFilter = (type, SelectTag) => {
  return function (evt) {
    if (type == "ing") selectedFiltersIng.splice(SelectTag, 1);
    if (type == "app") selectedFiltersApp.splice(SelectTag, 1);
    if (type == "ust") selectedFiltersUst.splice(SelectTag, 1);

    createAllTags();
    triTagRecipes(check);
  };
};

// On crée les tags par Ustensils, Appareils, Ingredients
function createAllTags() {
  tagLine.innerHTML = "";
  const monSetUst = [...new Set(selectedFiltersUst)];
  const monSetApp = [...new Set(selectedFiltersApp)];
  const monSetIng = [...new Set(selectedFiltersIng)];
  createFilterTag(monSetIng, "ing");
  createFilterTag(monSetApp, "app");
  createFilterTag(monSetUst, "ust");
  triTagRecipes(check);
}

//On parcours les tags par item et on lance la construction
function researchFilterTag(results) {
  const filterTag = document.querySelectorAll(".filter_tag");
  arrayTag.length = 0;
  arrayTag = Array.from(filterTag);
  arrayTag.forEach((item) => {
    triTagRecipes(item.textContent, results);
  });
}

function triTagRecipes(recipes) {
  const filterTag = document.querySelectorAll(".filter_tag");
  arrayTag = Array.from(filterTag);
  const result = recipes.filter((recipe) => {
    return arrayTag.every((item) => {
      const formatedItem = item.textContent.toLowerCase();
      return (
        recipe.ingredients.some((i) => {
          return i.ingredient.toLowerCase().includes(formatedItem);
        }) ||
        recipe.appliance.toLowerCase().includes(formatedItem) ||
        recipe.ustensils.some((ustensil) => {
          return ustensil.toLowerCase() === formatedItem;
        })
      );
    });
  });
  if (result.length) {
    dom.innerHTML = "";
    renderRecipes(result);
    noResult.textContent = "";
  } else {
    dom.innerHTML = "";
    noResult.textContent =
      "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
  }
  //On utilise le arrayTagSort pour l'ajout de nouveau tag
  arrayTagSort.length = 0;
  Array.prototype.push.apply(arrayTagSort, result);
}
