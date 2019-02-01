const hamgurguer = document.querySelector(".menu-hamburguer");
const navUlList = document.querySelector(".header__menu-list");

hamgurguer.addEventListener("click", function() { //função callback é uma função de retorno que é chamada depois que alguma coisa é executada 
  //console.log(this); o this aqui é a própria div com a classe menu-hamburguer
  if(navUlList.classList.contains("open-menu")) {
    navUlList.classList.remove("open-menu");
  } else {
    navUlList.classList.add("open-menu");
  }
  //this.classList.toggle("open-menu"); 
});