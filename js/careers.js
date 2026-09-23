"use strict";

const filterButtons = document.querySelectorAll(".filter-button");
const jobCards = document.querySelectorAll(".job-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((filterButton) =>
      filterButton.classList.remove("is-active"),
    );
    button.classList.add("is-active");

    jobCards.forEach((jobCard) => {
      const matchesCategory =
        selectedCategory === "all" ||
        jobCard.dataset.category === selectedCategory;

      jobCard.hidden = !matchesCategory;
    });
  });
});
