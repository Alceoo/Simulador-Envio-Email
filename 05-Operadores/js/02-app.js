const numero1 = 20 ;
const numero2 = '20';
const numero3 =  30;

//Operadores para revisar si dos números son iguales

console.log(numero1 == numero3);
//Aqui nos va a arrojar un falso, ya que 20 y 30 no son iguales
console.log(numero1 == numero2);
/*Aquí vemos que pasa algo un poco raro, ya que nos arroja un true
Pero aquí la cosa no tendría que salir así, ya que uno es un string y el 
otro es un numero, esto pasa porque el operador de igual no es muy estricto
con lo que se le mete.
*/



//Comparador estricto
console.log(numero1 === numero2);
/*Este es un comparador estricto, que no sólo se fija en el valor,
sino que también se fija en el tipo de dato.*/

console.log(typeof numero1);
console.log(typeof numero2);
/*Éste otro operador nos sirve para que nos de qué tipo de dato
hay en ese valor, en este caso el primero es un numero
y el segundo es un string */
console.log(numero1 === parseInt(numero2));

/*En este caso este chavon está poniendo éste ejemplo con numeros
enteros, pero si en el string no hay un numero entero, la mejor 
solución sería cambiar el parseInt por un parsefloat, para que
pueda dar más exactitud a los números no enteros
*/

//Diferente a...
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);



/*Ahora, en el de password es un tanto sencillo saber si es diferente
o no, ya que los dos son textos, peros si fueran numeros la cosa cambia.

Pasa lo mismo que con el operador de igual, no identifica por así decirlo la diferencia
entre un número y un numero dentro de un string, para que lo identifique también se tiene 
que usar un comparador estricto, para que de esta manera no se confunda con un string y un
numero.*/
console.log(numero1 !== numero2);



/* ejercicio
let usuario = '';


if(password1 != password2){
    console.log('tus contraseñas son diferentes, intentelo de nuez');
}else(password1 === password2){
    console.log('Tus contraseñas son correctas, bienvenido' + usuario);
}


Llegan a ser muy útiles este tipo de operadores de comparación
*/
