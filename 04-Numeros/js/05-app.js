/*Incrementos y Decrementos */
/*Existen varias formas de incrementar los números
/Incrementar los números en determinada cantidad, de uno en uno, bajandolo en uno
en uno o en determinada cantidad/
en específico son 3 formas de hacer esto, veámoslo.
*/


let puntaje = 5;

++puntaje; 
/*Aquí lo que pasa es que se tiene que mandar llamar la variable para que 
arroje el resultado.
esto en automático nos va a retornar el valor de la variable, más uno.

A diferencia de que si lo hacemos de la otra manera.
puntaje++; 
y a la siguiente vez que se ejecute, nos va a retornar 6, ya que este si manda a 
llamar a la variable primero y después ejecuta

*/

let puntaje2 = 5;
--puntaje2; 
/*Aqui es lo mismo, es más rápido si se hace con el menos menos al inicio que al final
se resta uno.

puntaje--; 
cuál sería el resultado?
= 5, no es 6 ya que primero manda a llamar la variable y después la ejecuta
a diferencia del --puntaje que hace las dos cosas al mismo tiempo

*/

console.log(puntaje);

console.log(puntaje2);


/*Ahora, según el buen profe juan esto muchas veces es pregunta de trabajo 
si tenemos el siguiente código, qué se va a ejecutar?
let putas = 5;
putas--;
R= se va a ejecutar el mismo 5
console.log(putas);

Para que el resultado sea 6 tenemos que poner el -- al inicio

--putas;
-------------------------------
let morrasChidas = 3;
morrasChidas++;
R= se va a ejecutar 3

Para que el resultado salga cómo 4, tenemos qué poner el ++ al inicio

++morrasChidas; */

//Incrementar más de uno

let putas = 5;
putas += 3;

putas += 3;
putas += 3;
putas += 3;
/*Si lo asignamos varias veces se le va a ir sumando más tres más tres y así */


console.log(putas);

//decrementos a mas de uno
let morrasChidas = 10;
morrasChidas -= 2;

morrasChidas -= 2;
morrasChidas -= 2;
morrasChidas -= 2;


console.log(morrasChidas);

//Videojuegos