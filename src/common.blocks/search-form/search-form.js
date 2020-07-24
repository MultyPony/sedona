let sedona_btn = document.querySelector(".sedona-button");
let search_form = document.querySelector(".search-form");

let adultsMinBtn = document.getElementById("adults-min-btn");
let adultsPlusBtn = document.getElementById("adults-plus-btn");

let childrenMinBtn = document.getElementById("children-min-btn");
let childrenPlusBtn = document.getElementById("children-plus-btn");

let displayAdults = document.getElementById("adults");
let displayChildren = document.getElementById("children");
let display = '';
let curVal = '';

function subtract(evt) {
  evt.preventDefault();
  if (evt.target === adultsMinBtn)
    display = displayAdults;
  else if (evt.target === childrenMinBtn)
    display = displayChildren;
  curVal = display.value;
  if (curVal > 0)
    display.value = --curVal;
}

function add(evt) {
  evt.preventDefault();
  if (evt.target === adultsPlusBtn)
    display = displayAdults;
  else if (evt.target === childrenPlusBtn)
    display = displayChildren;
  curVal = display.value;
  if (curVal < 0)
    curVal = -1;
  display.value = ++curVal;
}

adultsMinBtn.addEventListener("click", subtract);
adultsPlusBtn.addEventListener("click", add);

childrenMinBtn.addEventListener("click", subtract);
childrenPlusBtn.addEventListener("click", add);

sedona_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  search_form.classList.toggle("visually-hidden");
});
