document.addEventListener('DOMContentLoaded',function (){

  /*const form = document.querySelectorAll(" .form")[0];*/
  const botonComprar = document.querySelectorAll(" .boton-comprar")[0];
  /*form.addEventListener("submit", function () {*/
  botonComprar.addEventListener("click", function () {
  /*const cantidad = document.querySelectorAll(".cantidad")[0].value;*/
    const producto = document.querySelectorAll(".producto")[0];
    const cantidad = document.querySelectorAll(".cantidad")[0].value;
    const notas = document.querySelectorAll(".notas")[0].value;
  /*alert(`Gracias por su compra de ${cantidad} ...`); */
    alert(`Gracias por su compra  ${cantidad} de ${producto.options[producto.selectedIndex].text} con las siguientes notas ${notas}` );
  });
});
