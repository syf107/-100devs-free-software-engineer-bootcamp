// adding sticky header follow with background.
const sectionHeroEl = document.querySelector(".hero-header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// adding button to make food picture appear based on its category

const allCategory = document.querySelector(".all-category");
const breakfastCategory = document.querySelector(".breakfast-category");
const lunchCategory = document.querySelector(".lunch-category");
const dinnerCategory = document.querySelector(".dinner-category");
const dessertCategory = document.querySelector(".desserts-category");
const shakeCategory = document.querySelector(".shake-category");
const foodPicAll = document.querySelectorAll(".food-pic");

allCategory.addEventListener("click", showAll);
breakfastCategory.addEventListener("click", () => onlyCategory("breakfast"));
lunchCategory.addEventListener("click", () => onlyCategory("lunch"));
dinnerCategory.addEventListener("click", () => onlyCategory("dinner"));
dessertCategory.addEventListener("click", () => onlyCategory("desserts"));
shakeCategory.addEventListener("click", () => onlyCategory("shake"));

function onlyCategory(category) {
  foodPicAll.forEach((foodPic) => {
    if (!foodPic.classList.contains(category)) {
      foodPic.style.display = "none";
    } else {
      foodPic.style.display = "block";
    }
  });
}

function showAll() {
  foodPicAll.forEach((foodPic) => {
    foodPic.style.display = "block";
  });
}
