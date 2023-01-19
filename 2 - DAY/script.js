const center = document.querySelector(".center");
const sticks = document.querySelectorAll(".stick");

function adicionarClasse() {
  sticks.forEach((stick) => {
    stick.classList.toggle("ativo");
    stick.classList.remove("no-animate");
  });
}

center.addEventListener("click", adicionarClasse);
