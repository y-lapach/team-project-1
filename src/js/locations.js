(() => {
  const refs = {
    openLocationBtn: document.querySelector("[data-location-open]"),
    closeLocationBtn: document.querySelector("[data-location-close]"),
    location: document.querySelector("[data-location]"),
  };

  refs.openLocationBtn.addEventListener("click", toggleLocation);
  refs.closeLocationBtn.addEventListener("click", toggleLocation);

  function toggleLocation() {
    refs.location.classList.toggle("is-hidden");
  }
})();