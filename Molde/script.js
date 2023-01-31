const circle = document.querySelectorAll(".image");
const info = document.querySelector(".profile-info");

circle.forEach(function(imagem) {
  imagem.addEventListener("click", function() {
    info.classList.add("ativa")
  })
})

const close = document.querySelector(".close-button");


close.addEventListener("click", function() {
   info.classList.remove("ativa")
})