/*Strings, los strings o cadenas de texto representan un texto, 
que se puede asignar a una variable, cosas cómo el nombre de un cliente
el nombre de un producto, la categoría*/

//Existen varias maneras de poner un string

//1 esta es la mejor
const producto = 'monitor de 20 "pulgadas"';
console.log(producto);

/*Cosa importante que cabe añadir es que si la sintaxis 
de repente pide que tengamos comillas dentro del string
pues tenemos que poner unas dentro de otras y listo */

//2

const precio = String('monitor de 50 pulgadas');
console.log(precio);

//3 
const categoría = new String('Monitor de 100 pulgadas');
console.log(categoría);


/*Conclusión:
Los strings son básicamente representaciones de texto, ejemplo:
cuando alguien te envía una invitación de facebook su nombre
es un string.
Cuantos amigos tienen en común, también un string
todo lo que sea texto, termina siendo un string.
*/