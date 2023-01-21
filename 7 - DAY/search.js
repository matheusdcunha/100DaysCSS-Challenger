const botaoBusca = document.querySelector(".search-icon");

botaoBusca.addEventListener("click", function () {
  const campoBusca = document.querySelector(".campo-busca");
  campoBusca.classList.toggle("anima-busca");
});

const menuIcon = document.querySelector(".menu-icon");
const center = document.querySelector(".center");

menuIcon.addEventListener("click", () => {
  center.classList.toggle("ativo");
});

console.log(center);
