var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");

var conteudoAtual = null;

botao1.addEventListener("click", function() {
  var htmlEspecifico = "<p><h1>Tudo</h1></p>";
  exibirConteudoHTML(htmlEspecifico);
});

botao2.addEventListener("click", function() {
  var htmlEspecifico = "";
  exibirConteudoHTML(htmlEspecifico);
});

botao3.addEventListener("click", function() {
  var htmlEspecifico = "<p>Código HTML extenso para o Botão 3...</p>";
  exibirConteudoHTML(htmlEspecifico);
});

function exibirConteudoHTML(conteudoHTML) {
  if (conteudoAtual !== null) {
    // Remove o conteúdo HTML anterior
    conteudoAtual.parentNode.removeChild(conteudoAtual);
  }

  var iframe = document.createElement("iframe");
  iframe.setAttribute("srcdoc", conteudoHTML);
  iframe.style.width = "100%";
  iframe.style.height = "500px";

  var resultado = document.getElementById("resultado");
  resultado.innerHTML = '';
  resultado.appendChild(iframe);

  // Define o novo conteúdo HTML como atual
  conteudoAtual = iframe;
}