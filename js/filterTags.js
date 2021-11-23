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
  //researchFilterTag(check);
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
  //listenTagBar(arrayTag, results);
}

// On construit le DOM
/*function triTagRecipes(search, recettes) {
  arrayTagSort.length = 0;
  recettes.forEach((recette) => {
    const { ustensils, ingredients, appliance } = recette;
    let triUst = false;
    for (let u = 0; u < ustensils.length; u++) {
      if (ustensils[u].includes(search)) {
        triUst = true;
      }
    }
    let triIngredients = false;
    for (let y = 0; y < ingredients.length; y++) {
      if (ingredients[y].ingredient.includes(search)) {
        triIngredients = true;
      }
    }
    const triApp = appliance.includes(search);
    if (triUst || triApp || triIngredients) {
      arrayTagSort.push(recette);
    }
    if (arrayTagSort.length) {
      dom.innerHTML = "";
      renderRecipes(arrayTagSort);
      noResult.textContent = "";
    } else {
      dom.innerHTML = "";
      noResult.textContent =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
    }
  });
  results.length = 0;
  Array.prototype.push.apply(results, arrayTagSort); //On fusionne les tableaux
}*/

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

/*//Listener pour enlever le tag
function listenTagBar(filters, recettes) {
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      removeTag(filter, filters, recettes);
    });
  });
}

function removeTag(selectedTag, arrayTag, recettes) {
  const index = arrayTag.indexOf(selectedTag);
  //if (index > -1) {
  arrayTag.splice(index, 1);
  selectedTag.remove();
  //arrayTag.slice(index, 0);
  //selectedTag.remove();
  //results.splice(0, results.length);
  //}

  if (!arrayTag.length) {
    dom.innerHTML = "";
    results.length = 0;
    arrayTag.length = 0;
    selectedFiltersUst.length = 0;
    selectedFiltersApp.length = 0;
    selectedFiltersIng.length = 0;
    renderRecipes(recipes);
    noResult.textContent =
      "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
  } else {
    researchFilterTag(recipes);
  }
}*/
