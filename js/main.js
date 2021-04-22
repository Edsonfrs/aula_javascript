/*
function clicou() {
  alert("Obrigado por clicar");
}
*/

function clicou() {
  document.getElementById("agradecimento").innerHTML = "<em>Obrigado por clicar!!!</em>";
}

function redirecionar() {
  window.open("https://www.fullstackvox.com");
  window.location.href ="https://aurelio.net/shell/";
}

function trocar() {
  alert("Trocar texto.");
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}


