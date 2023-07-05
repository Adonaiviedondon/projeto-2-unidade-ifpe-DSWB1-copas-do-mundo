var btn1 = document.querySelector('#show-or-ride');
var container1 = document.querySelector('container1');
var btn2 = document.querySelector('#mostrar-ou-esconder');
var container2 = document.querySelector('.container2');
var btn3 = document.querySelector('#expor-ou-ocultar');
var container3 = document.querySelector('.container3');
var btn4 = document.querySelector('#apresentar-ou-camuflar');
var container4 = document.querySelector('.container4');
container1.style.display = none;
container2.style.display = none;
container3.style.display = none;
container4.style.display = none;

btn1.addEventListener('click', function () {
  if (container1.style.display === 'none' ) {
    container1.style.display='block';
    container2.style.display='none';
    container3.style.display='none';
    container4.style.display='none';
  }
  else{
    container1.style.display='none';
  }
});
btn2.addEventListener('click', function () {
  if (container2.style.display === 'none' ) {
    container1.style.display='none';
    container2.style.display='block';
    container3.style.display='none';
    container4.style.display='none';
  }
  else{
    container2.style.display='none';
  }
});
btn3.addEventListener('click', function () {
  if (container3.style.display === 'none' ) {
    container1.style.display='none';
    container2.style.display='none';
    container3.style.display='block';
    container4.style.display='none';
  }
  else{
    container3.style.display='none';
  }
});
btn4.addEventListener('click', function () {
  if (container4.style.display === 'none' ) {
    container1.style.display='none';
    container2.style.display='none';
    container3.style.display='none';
    container4.style.display='block';
  }
  else{
    container4.style.display='none';
  }
});

