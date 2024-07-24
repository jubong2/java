window.onload = function () {
  const button = document.querySelectorAll(".menu-item");
  button.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      this.classList.toggle("active")
    });
  });
};
