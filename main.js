// acessando o botão menu e o menu
const elementoBtnMenu = document.querySelector('.cabecalho__menu');
const elementoMenu = document.querySelector('.menu-lateral');
console.log(elementoMenu);

// function arrow que muda a classe de menu-lateral para menu-lateral--ativo
elementoBtnMenu.addEventListener('click', () => {
  elementoMenu.classList.toggle('menu-lateral--ativo');
});

