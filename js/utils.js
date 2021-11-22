//RAZ de la Liste BOX
function razLiBox() {
  ingredientsLiBox.innerHTML = "";
  ustensilesLiBox.innerHTML = "";
  appareilsLiBox.innerHTML = "";
  ustensils.length = 0;
  appareils.length = 0;
  ingredients.length = 0;
}

function razInputValue() {
  ingredientsInput.value = "";
  appareilsInput.value = "";
  ustensilesInput.value = "";
}

//Fonction pour ouvrir une filterBox et fermer les 2 autres et replacer les chevron.
function filterBox(El) {
  razInputValue();
  if (El == "ing") {
    ingredientsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    ustensilesChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    appareilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    filterIng.classList.replace("filter_ing_close", "filter_ing_opened");
    filterUst.classList.replace("filter_ust_opened", "filter_ust_close");
    filterApp.classList.replace("filter_app_opened", "filter_app_close");
    ingredientsLiBox.classList.replace(
      "filterList_ing_closed",
      "filterList_ing_opened"
    );
    appareilsLiBox.classList.replace(
      "filterList_app_opened",
      "filterList_app_closed"
    );
    ustensilesLiBox.classList.replace(
      "filterList_ust_opened",
      "filterList_ust_closed"
    );
  } else if (El == "ust") {
    ustensilesChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    ingredientsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    appareilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    filterUst.classList.replace("filter_ust_close", "filter_ust_opened");
    filterIng.classList.replace("filter_ing_opened", "filter_ing_close");
    filterApp.classList.replace("filter_app_opened", "filter_app_close");
    ustensilesLiBox.classList.replace(
      "filterList_ust_closed",
      "filterList_ust_opened"
    );
    appareilsLiBox.classList.replace(
      "filterList_app_opened",
      "filterList_app_closed"
    );
    ingredientsLiBox.classList.replace(
      "filterList_ing_opened",
      "filterList_ing_closed"
    );
  } else if (El == "app") {
    appareilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    ustensilesChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    ingredientsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    filterApp.classList.replace("filter_app_close", "filter_app_opened");
    filterUst.classList.replace("filter_ust_opened", "filter_ust_close");
    filterIng.classList.replace("filter_ing_opened", "filter_ing_close");
    appareilsLiBox.classList.replace(
      "filterList_app_closed",
      "filterList_app_opened"
    );
    ustensilesLiBox.classList.replace(
      "filterList_ust_opened",
      "filterList_ust_closed"
    );
    ingredientsLiBox.classList.replace(
      "filterList_ing_opened",
      "filterList_ing_closed"
    );
  }
}
