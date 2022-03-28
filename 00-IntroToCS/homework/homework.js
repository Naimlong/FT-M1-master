'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*
  convertir el string en array
  dar vuelta el array
  recorrer el array
  elevar la base
  multiplicar el resultado y el valor del elemento array
  sumar resultados
  */
 var dato = num.split("").reverse();
 
 var resultado = 0;
 for(var i=0; i<dato.length; i++){
   resultado += 2 ** i * dato[i];
  
 }
 return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  /* dividir num entre 2 hasta que sea 0
    tener en cuenta el valor entero y el resto
    revertir los restos y pasarlos a string
  */
 var resultado = "";
 
 while(num > 0){
   resultado = (num % 2) + resultado;
   num = Math.floor(num / 2);
 }
 
 return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}