document.getElementById('btnEncriptar').addEventListener('click',function(){
  var inputText = document.getElementById('inputText').value;
  var result = encriptarTexto(inputText);
  document.getElementById('outputText').innerText = result;
});

document.getElementById('btnDesencriptar').addEventListener('click',function(){
  var inputText = document.getElementById('inputText').value;
  var result = desencriptarTexto(inputText);
  document.getElementById('outputText').innerText = result;
});

function encriptarTexto(texto){
  return texto.replace(/e/g,'enter')
  .replace(/i/g,'imes')
  .replace(/a/g,'ai')
  .replace(/o/g,'ober')
  .replace(/u/g,'ufat');
}

function desencriptarTexto(texto){
  return texto
  .replace(/enter/g,'e')
  .replace(/imes/g,'i')
  .replace(/ai/g,'a')
  .replace(/ober/g,'o')
  .replace(/ufat/g,'u');
}
