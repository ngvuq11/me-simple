var header = document.querySelector(".js-header");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 40) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
})