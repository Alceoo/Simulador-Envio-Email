/*Métodos para los strings o cadenas de texto */

/*Para entender esto vamos a poner un ejemplo perron.

Cuándo nosotros hacemos un comentario en xnxx, o cualquier página porno
tenemos un número de letras máximo para lo que queramos decir.

La pregunta es, ¿cómo saber cuántas letras tiene ese comentario?
Pues para eso nos sirven los métodos, hay varios tipos de
métodos, veamos algunos.*/

const producto = 'Mía khalifa es mejor que lana rhoades';
console.log(producto);

console.log(producto.length);
/*Con el método lenght lo que hacemos es pedirle cuántas 
pinches letras tiene ese comentario y de esta forma nos
aseguramos de que nadie escriba un comentario
más largo que 100 carácteres por ejemplo. */



/*Cuando buscamos en amazon por ejemplo un libro, un celular etc
le ponemos en la barra de búsqueda el nombre
libro, celular etc.
Eso lo podemos hacer con algo que se llama indexOf, ejemplo */

console.log(producto.indexOf('khalifa'));

/*esto nos va a decir en qué letra comienza la palabra que
nosotros estamos buscando*/


//Existe uno un poco mejor que indexOf y se llama includes
console.log(producto.includes('lana'));

/*Aquí lo que está pasando es que si los carácteres que 
encuentre dentro de los paréntesis son iguales que los
de la variable, entonces nos va arrojar verdadero, si no pues nos arroja falso(booleanos) */

/*Conclusión: 
los métodos son por así decirlo superpoderes y cada superpoder nos va a permitir
hacer algo distinto

lenght: este nos sirve para que nos arroje cuántos carácteres hay en una frase
indexOf: este nos sirve para que nos diga en qué posición se encuentra la palabra que pusimos
includes: este método nos va a arrojar un booleano(tru or false), dependiendo
si la palabra que estamos buscando se encuentra dentro del string.

Existen funciones ya definidas en el lenguaje que nos permiten 
hacer cosas, eso serían los métodos.

*/
