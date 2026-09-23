"use strict";

const filterButtons = document.querySelectorAll(".filter-button");
const postCards = document.querySelectorAll(".post-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) =>
      filterButton.classList.remove("is-active"),
    );
    button.classList.add("is-active");

    postCards.forEach((postCard) => {
      postCard.hidden =
        selectedCategory !== "all" &&
        postCard.dataset.category !== selectedCategory;
    });
  });
});
