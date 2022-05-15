/*Diferencias entre funciones declarativas y funciones expresivas

FUNCIONES DECLARATIVAS: son asignadas a la memoria, así que podemos mandarlas llamar antes sin problemas
FUNCIONES EXPRESIVAS: No son asignadas a la memoria, por lo que no pueden ser llamadas antes.
*/






//Declaracion de funcion (function declaration)
sumar();
function sumar(){
    console.log(2+2);
}//si es posible mandarla llamar antes

//Expresión de función(function expresion)
sumar2();
const sumar2 = function() {
    console.log(3+3);
}
//No es posible mandarla llamar antes, nos tira un error si hacemos eso
