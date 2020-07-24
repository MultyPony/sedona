let sedona_btn = document.querySelector(".sedona-button");
let search_form = document.querySelector(".search-form");

let min_btn = document.querySelector(".btn-minus");
let plus_btn = document.querySelector(".btn-plus");
let display = document.querySelector(".input-num__display");
let curVal = "";

min_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  curVal = display.value;
  display.value = --curVal;
});

plus_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  curVal = display.value;
  display.value = ++curVal;
});

sedona_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  search_form.classList.toggle("visually-hidden");
});
