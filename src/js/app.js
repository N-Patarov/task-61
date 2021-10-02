import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let price =  document.querySelectorAll(".price");
  let hot =  document.querySelector(".hot");
  for (let i = 0; i < price.length; i++) {
    console.log(price[i]);
    if (price[i]==hot) {
      console.log("da");
      price[i].innerHTML += " 🔥"
    }else {
      console.log("ne");
    }
  }

});
