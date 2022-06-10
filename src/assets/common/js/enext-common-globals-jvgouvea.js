$(function () {
  $(".vitrine ul").slick({
    infinite: false,
    slidesToShow: 4,
    SlidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const btnMobile = document.getElementById("btn-mobile");
const headerButtons = document.querySelector(".header-buttons");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  headerButtons.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const roupas = document.querySelector(".roupas");
const roupasMenu = document.querySelector(".roupas > a");

const acessorios = document.querySelector(".acessorios");
const acessoriosMenu = document.querySelector(".acessorios > a");

const calcados = document.querySelector(".calcados");
const calcadosMenu = document.querySelector(".calcados > a");

function toggleSubmenuRoupas(event) {
  event.preventDefault();
  calcados.classList.remove("active");
  acessorios.classList.remove("active");

  roupas.classList.toggle("active");
}
function toggleSubmenuAcessorios(event) {
  event.preventDefault();
  calcados.classList.remove("active");
  roupas.classList.remove("active");

  acessorios.classList.toggle("active");
}
function toggleSubmenuCalcados(event) {
  event.preventDefault();
  acessorios.classList.remove("active");
  roupas.classList.remove("active");

  calcados.classList.toggle("active");
}

roupasMenu.addEventListener("touchstart", toggleSubmenuRoupas);
acessoriosMenu.addEventListener("touchstart", toggleSubmenuAcessorios);
calcadosMenu.addEventListener("touchstart", toggleSubmenuCalcados);
