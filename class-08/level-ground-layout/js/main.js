const headerEl = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allNavLink = document.querySelectorAll(".nav-link");

allNavLink.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});
