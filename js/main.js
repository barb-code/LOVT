console.log('JS externo funcionou bb!');
console.log(window);

//alert('Levanta a cabeça senão a coroa cai')

//let adulto = confirm('Você é maior que tem maior que 18 anos?');

// let nomeUsuario = prompt('Qual o seu nome?');
// console.log(nomeUsuario);

// let elementHeader = document.querySelector('.olaUsuario');
// console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}` ;

//elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";

//let header = document.getElementById('header');

const nightMode = document.getElementById('night-mode')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode')
})