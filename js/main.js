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
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function timeFunction() {
  setTimeout(showModal = () => { modal.style.display = "block"; }, 5000);
}

timeFunction()

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//   evento.preventDefault(); // cancelando o envio

//   let nomeValue = document.querySelector("#input_nome").value;
//   let emailValue = document.querySelector("#input_email").value;

//     //validação dos campos
//     //exibição de mensagens de erro
//     //envio formulário
//   console.log(nomeValue);
//   console.log(emailValue);

// })


let formContact = document.querySelector("#form_contact");



formContact.addEventListener("submit", (evento) => {
  // interrompo envio formulário
  evento.preventDefault();
  let nome = document.querySelector("#input_nome").value;

  let email = document.querySelector("#input_email").value;

  let telefone = document.querySelector("#input_telefone").value;

  let texto = document.querySelector("#mensagem").value;
  // validar de todos os campos estão preenchidos
  if (!nome || !email || !telefone || !texto) {
    alert("Prencha todos os campos!")
    
  }
  // validar se nome tem dois ou mais caracteres
  if (nome.length < 3) {
    alert("Seu nome deve ter dois ou mais caracteres")
    
  }
  // validar se telefone tem no mínimo 8 caracteres
  if (telefone.length < 8) {
    alert("Seu telefone deve ter no minimo 8 digitos")
    
  }
  // validar se o campo email tem @ (Google - validação email com regex)
  if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
    alert("Campo de email invalido!")
    
  }
})