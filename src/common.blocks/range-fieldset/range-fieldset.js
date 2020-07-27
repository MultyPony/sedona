let minVal = document.querySelector(".range-fieldset__min-val");
let maxVal = document.querySelector(".range-fieldset__max-val");
let rangeV = document.querySelector(".range-fieldset__input");

maxVal.innerHTML = rangeV.value;

rangeV.addEventListener("input", function(evt){
    // evt.preventDefault();
    maxVal.innerHTML = rangeV.value;
    // alert("SISKI");
    // input.value;
});