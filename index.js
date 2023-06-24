let text = document.querySelector(".text");
let numberInput = document.getElementById("num");
let links = document.querySelectorAll(".link");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  if (numberInput.value <= 3) {
    const index = numberInput.value - 1;
    if (index >= 0 && index < links.length) {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }
      links[index].classList.add("active");
      text.textContent = `${links[index].textContent} content`;
      numberInput.value = "";
    }
  }
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    for (j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    links[i].classList.add("active");
    text.textContent = `${links[i].textContent} content`;
  });
}
