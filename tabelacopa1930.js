var ultimoBotaoClicado = null;

function alternarDados(dado) {
  var conteudo = document.getElementById(dado);
  
  if (ultimoBotaoClicado && ultimoBotaoClicado !== dado) {
    var ultimoConteudo = document.getElementById(ultimoBotaoClicado);
    ultimoConteudo.style.display = "none";
  }

  if (conteudo.style.display === "none") {
    conteudo.style.display = "block";
    ultimoBotaoClicado = dado;
  } else {
    conteudo.style.display = "none";
    ultimoBotaoClicado = null;
  }
}