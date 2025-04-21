// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }


  function myFunction() {
      var element = document.body;
    element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
  }