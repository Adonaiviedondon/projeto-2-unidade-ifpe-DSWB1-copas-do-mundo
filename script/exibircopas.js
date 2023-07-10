var ultimoBotaoClicado = null;

function alternarConteudo(id) {
  var conteudos = document.getElementsByClassName('conteudo');

  if (ultimoBotaoClicado === id) {
    ocultarConteudo(id);
    ultimoBotaoClicado = null;
  } else {
    for (var i = 0; i < conteudos.length; i++) {
      if (conteudos[i].id === id) {
        conteudos[i].style.display = 'block';
      } else {
        conteudos[i].style.display = 'none';
      }
    }

    if (id !== 'botao1') {
      ocultarConteudosBotao1();
      
    }

    ultimoBotaoClicado = id;
  }
}

function exibirConteudo(id) {
  var conteudo = document.getElementById(id);

  if (conteudo.style.display === 'block') {
    conteudo.style.display = 'none';
    ultimoBotaoClicado = null;
  } else {
    conteudo.style.display = 'block';
    ocultarOutrosConteudos(id);
    ultimoBotaoClicado = id;
  }
}

function ocultarConteudo(id) {
  var conteudo = document.getElementById(id);
  conteudo.style.display = 'none';
}

function ocultarConteudosBotao1() {
  var conteudosBotao1 = document.querySelectorAll("#botao1 .conteudo-oculto");
  for (var i = 0; i < conteudosBotao1.length; i++) {
    conteudosBotao1[i].style.display = "none";
  }
}

function ocultarOutrosConteudos(id) {
  var conteudosOcultos = document.getElementsByClassName('conteudo-oculto');

  for (var i = 0; i < conteudosOcultos.length; i++) {
    if (conteudosOcultos[i].id !== id) {
      conteudosOcultos[i].style.display = 'none';
    }
  }
}
