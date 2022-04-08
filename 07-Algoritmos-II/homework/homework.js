'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let pivote = Math.floor(Math.random() * array.length)
  let raight= [];
  let left= [];
  for(let i=0; i<array.length; i++){
    if(i !== pivote){
      if(array[i] > array[pivote]){
        raight.push(array[i])
      }else{
        left.push(array[i])
      }
    }
  }
  return [].concat(quickSort(left), array[pivote], quickSort(raight))
  
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array;
  let half =Math.floor(array.length/2);
  let left =array.slice(0, half);
  let raight =array.slice(half);
  return merge(mergeSort(left), mergeSort(raight));

 }
function merge(left, raight){
  let result = [];
  let indexLeft = 0;
  let indexRaight = 0;
  while(indexLeft<left.length && indexRaight<raight.length){
    if(left[indexLeft] < raight[indexRaight]){
      result.push(left[indexLeft]);
      indexLeft++;
    
  }else{
    result.push(raight[indexRaight]);
      indexRaight++;
  }
  }
  return result.concat(left.slice(indexLeft), raight.slice(indexRaight));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
