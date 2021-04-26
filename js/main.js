console.log('JS externo funcionou bb!');
console.log(window);

//alert('Levanta a cabeça senão a coroa cai')

//let adulto = confirm('Você é maior que tem maior que 18 anos?');

//let nomeUsuario = prompt('Qual o seu nome?');
// console.log(nomeUsuario);

//let elementHeader = document.querySelector('.olaUsuario');
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
  document.body.classList.toggle('night-mode')
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function timeFunction() {
  setTimeout(showModal = () => { modal.style.display = "block"; }, 5000);
}

timeFunction()
