x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);// 10
  console.log(a);// 8
  var f = function(a, b, c) {
    b = a;
    console.log(b);// 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);// 9
}
c(8,9,10);
console.log(b);// 10
console.log(x);// 1
//.....................
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;//var baz = 2;
//....................
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// Franco
//.....................
var instructor = "Tony";
console.log(instructor);// Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// Franco
   }
})();
console.log(instructor);//Tony
//......................
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);// "The Flash"
    console.log(pm);// "Reverse Flash"
}
console.log(instructor);// "The Flash"
console.log(pm);// "Franco"
//........................
6 / "3"// 2
"2" * "3"// 6
4 + 5 + "px"// 9px
"$" + 4 + 5// $45
"4" - 2// 2
"4px" - 2// no da numero
7 / 0// no se puede dividir 0
{}[0]// undefined
parseInt("09")// 9 (lo trnsforma en numero)
5 && 2// lo considera true && true y devuelve el ultimo valor en este caso = 5
2 && 5// 5
5 || 0// devuelve el primero que sea true = 5
0 || 5// 5
[3]+[3]-[10]// los tranforma en string y queda "33" - "10", luego los transforma en numeros para poder hacer la resta = 23
3>2>1// false
[] == ![]// true
//transforma ![] en false y luego lo transforma en 0 / [] lo considera como un string vacio y lo transforma a 0/ 0==0 =da como resultado true 
//.........................
function test() {
  console.log(a);// undefined porque a esta declarado mas abajo
  console.log(foo());// 2 porque foo retorna 2

  var a = 1;
  function foo() {
     return 2;
  }
}

test();
//........................
var snack = 'Meow Mix';

function getFood(food) {
  // acá guarda el lugar de snack, como la función es false no entra al if por lo que
  // queda snack sin definir = undefined
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);// da undefined
//.........................
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());// Aurelio De Rosa

var test = obj.prop.getFullname;// acá como no se ejecuta la función toma el valor del global = 'Juan Perez'

console.log(test());
//.........................
function printing() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printing();
//1
//4
//undefined
//3
//2