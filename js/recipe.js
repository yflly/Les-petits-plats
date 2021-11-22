class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }
  recipeNodeFactory() {
    const article = document.createElement("article");
    article.className = "articleRecipe";

    //creer un lien "a"
    const a = document.createElement("a");
    a.setAttribute("href", "");
    a.setAttribute("title", this.name);

    //Image pour la recette
    const image = document.createElement("div");
    image.className = "recipeImg";

    const recipeData = document.createElement("div");
    recipeData.className = "recipeData";

    //Titre et temps de cuisson
    const recipeTitle = document.createElement("div");
    recipeTitle.className = "recipeTitle";

    //Nom de la recette
    const titleH2 = document.createElement("h2");

    //Temps de cuisson
    const recipeTime = document.createElement("div");
    recipeTime.className = "recipeTime";
    const iconTimeSpan = document.createElement("span");
    const iconTime = document.createElement("i");
    iconTime.className = "";

    //Ingrédients
    const recipeIngredients = document.createElement("div");
    recipeIngredients.className = "recipeIngredients";

    const ulIngredients = document.createElement("ul");

    this.ingredients.forEach((ingredient) =>
      this.createIngredientsList(ulIngredients, ingredient)
    );

    //Description
    const recipeDescription = document.createElement("p");
    recipeDescription.className = "recipeDescription";

    //
    titleH2.innerHTML = this.name;
    recipeTime.innerHTML = `<span class="far fa-clock"></span> ${this.time} min`;
    recipeDescription.innerHTML = this.description;

    article.appendChild(a);
    a.appendChild(image);
    a.appendChild(recipeData);
    recipeData.appendChild(recipeTitle);
    recipeTitle.appendChild(titleH2);
    recipeTitle.appendChild(recipeTime);
    recipeTime.appendChild(iconTimeSpan);
    iconTimeSpan.appendChild(iconTime);
    recipeData.appendChild(recipeIngredients);
    recipeData.appendChild(recipeDescription);
    recipeIngredients.appendChild(ulIngredients);
    return article;
  }
  createIngredientsList(Ul, ingredient) {
    const liIngredients = document.createElement("li");
    liIngredients.innerHTML = `<strong>${ingredient.ingredient}`;
    liIngredients.innerHTML += ingredient.quantity
      ? ` : </strong><span>${ingredient.quantity}`
      : `</strong>`;
    liIngredients.innerHTML += ingredient.unit
      ? ` ${ingredient.unit}</span>`
      : `</span>`;

    Ul.appendChild(liIngredients);
  }
}
