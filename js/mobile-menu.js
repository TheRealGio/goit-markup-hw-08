(() => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const openMenuBtn = document.querySelector(
    ".header__navbar-contacts-items--burger-menu"
  );
  const closeMenuBtn = document.querySelector(".close-menu");
  const header = document.querySelector(".header");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("mobile-menu--hidden");
    header.classList.toggle("header--hidden");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.add("mobile-menu--hidden");
    header.classList.toggle("header--hidden");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
