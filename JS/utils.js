// console.log("%c utils.js", "color: green; font-weight:bold;");

// MELANGER LES ELEMENTS D'UN TABLEAU
export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// SUPPRIMER LES DOUBLONS D'UN TABLEAU
export const deleteDuplicates = (array) => {
  let cleanDuplicate = [];
  array.forEach((item) => {
    cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
    return cleanDuplicate;
  });
};

// METTRE LA PREMIERE LETTRE EN LETTRE CAPITALE
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// RELOAD window.location.reload
export const windowLocationReload = () => {
  window.location.reload();
};

// CLOSE TAGS
export const tagIsNoneSuccess = () => {
  document.getElementsByClassName("tags__item--success").style.display = "none";
};
export const tagIsNoneDanger = () => {
  document.getElementsByClassName("tags__item--danger").style.display = "none";
};
export const tagIsNonePrimary = () => {
  document.getElementsByClassName("tags__item--primary").style.display = "none";
};

// AUCUNE RECETTE NE CORRESPOND A LA RECHERCHE.
export const ifNoRecipes = () => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";

  if (recipes == 0 && !document.querySelector(".cards__no-recipes")) {
    return cards.insertAdjacentHTML(
      "beforebegin",
      `
  <div class="cards__no-recipes">
      <div class="cards__no-recipes-image">
          <img class="cards__no-recipes-logo" src="./public/images/no_recipes.svg" alt="">
          <img class="cards__no-recipes-circle" src="./public/images/forbidden.svg" alt="">
      </div>
      <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… vous pouvez
      chercher « limonade de Coco », « thon », etc.</p>
  </div>
  `
    );
  } else {
    // to remove the message
    if (document.querySelector(".cards__no-recipes") && recipes != 0) {
      document.querySelector(".cards__no-recipes").remove();
    }
  }
};
