/*document.addEventListener("keydown",ingresandoMinusculas);

function ingresandoMinusculas(event) {
    const teclapresionada = event.key.toLowerCase();
    console.log(teclapresionada);
}*/

/*$(document).ready(function () {
  $("#texto-inicial").on("keyup", function () {
    $(this).val(validarTexto($("#texto-inicial").val()));
  });

  function validarTexto(texto) {
    return texto.replace(/[^a-z]+/g, "");
    //return texto.replace(/[^A-Za-z\#\&]+/g, "");
  }
});*/
// onkeyup="validarTexto(this)
document.getElementById('texto-inicial').addEventListener('keyup', function(){
    //this.value = this.value.toLowerCase()
    this.value = this.value.replace(/[^a-z\s]+/g, "");
});
function mostrarElementos() {
  var textoinicial = document.getElementById("texto-inicial").value;
  var imgText = document.getElementById("resultInicial");
  var textResultado = document.getElementById("resultFinal");

  if (textoinicial === "") {
    imgText.style.display = "block";
    textResultado.style.display = "none";
    console.log("hola1");
  }

  if (textoinicial !== "") {
    imgText.style.display = "none";
    textResultado.style.display = "block";
    console.log("hola2");
  }
}

function encriptar() {
  mostrarElementos();
  var frase = document.getElementById("texto-inicial").value.toLowerCase();
  /**
   * i = letras mayusculas y minusculas
   * g = toma e cuenta toda la linea de la oracion
   * m = toma en cuenta multiples lineas
   */
  var textoEncriptado = frase.replace(/e/gim, "enter");
  var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");

  document.getElementById("textareaResult").innerHTML = textoEncriptado;
  document.getElementById("btnCopy").style.display = "show";
  document.getElementById("btnCopy").style.display = "inherit";
}

function desencriptar() {
  mostrarElementos();
  var frase = document.getElementById("texto-inicial").value.toLowerCase();
  /**
   * i = letras mayusculas y minusculas
   * g = toma e cuenta toda la linea de la oracion
   * m = toma en cuenta multiples lineas
   */
  var textoEncriptado = frase.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

  document.getElementById("textareaResult").innerHTML = textoEncriptado;
  document.getElementById("texto-inicial").value = "";
}

function copiar() {
  var contenido = document.querySelector("#textareaResult");
  contenido.select();
  document.execCommand("copy");
}

mostrarElementos();

var btn = document.querySelector("#btn-encriptar");
btn.onclick = encriptar;
var btn2 = document.querySelector("#btn-desencriptar");
btn2.onclick = desencriptar;
var btn3 = document.querySelector("#btnCopy");
btn3.onclick = copiar;
