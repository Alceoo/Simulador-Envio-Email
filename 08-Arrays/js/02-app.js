//Acceder a los elementos de un array o arreglo

const numeros = [10,20,30,40,50];

console.log(numeros);

/*Hay otra forma de verlo en la consola y esta es la siguiente.
De esta forma nos va a decir cuál es el index y cuál es el valor.
*/
console.table(numeros);

//Acceder al arreglo
console.log(numeros[2]);
/*Es por eso que queremos saber el indice, porque aquí si queremos acceder a un valor, lo que 
tenemos que hacer es obviamente pasarle el nombre del arreglo y después colocar la posición en 
la que se encuentra el valor.*/

/*Si queremos acceder a un valor que no existe nos va a poner undefined, ya que 
se está creándo la variable, pero el valor no existe así que te lo marca cómo indefinido
*/

//Acceder a un arreglo dentro de otro arreglo.

/*Cabe recordar que dentro de los arreglos puede ir cualquier tipo de dato, incluyendo otro 
arreglo, veámos cómo acceder a un arreglo dentro de otro arreglo*/
const numeros2 = [12,23,34,45,56,67, [1,2,3]];

console.log(numeros2[4][2]);

console.table(numeros2);


