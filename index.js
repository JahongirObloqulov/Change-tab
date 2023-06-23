let text = document.querySelector('.text');
let numberInput = document.getElementById('num');
let formGroup = document.querySelector('.form-group');
let links = document.querySelectorAll('a');
formGroup.addEventListener("submit", function (e) {
    e.preventDefault();
    if (numberInput.value === "1") {
        text.textContent = 'Positive content';
    } else if (numberInput.value === "2") {
        text.textContent = 'Negative content';
    } else if (numberInput.value === "3") {
        text.textContent = 'Neutral content';
    } else {
        alert("Index is invalid");
    }
    numberInput.value = "";

});






