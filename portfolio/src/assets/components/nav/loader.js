// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
  // Add a transition effect
  element.style.transition = "background-color 0.5s ease";
}
