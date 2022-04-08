'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1];
  var divisor= 2;
  while(num !== 1){
    if(num % divisor === 0){
      arr.push(divisor);
      num = num / divisor;
    }else{
      divisor++
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var swap = true;//hay cosas por ordenar
  while(swap){
    swap = false;//ya no hay cosas por ordenar
    for(let i=0; i<array.length-1; i++){
      if(array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        swap = true;//todavia hay cosas por ordenar
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1; i<array.length; i++){
    let j= i-1;
    let aux = array[i];
    while(i >= 0 && array[j] > aux){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j=0; j<array.length; j++){
    let min = j;
    for(let i=j+1; i<array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j !== min){
      let aux = array[j];
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
