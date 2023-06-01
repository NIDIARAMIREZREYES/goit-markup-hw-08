document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".navbar__mobile-toggle");
  const navbarList = document.querySelector(".navbar__list");

  mobileToggle.addEventListener("click", function () {
    navbarList.classList.toggle("mobile-visible");
  });
});