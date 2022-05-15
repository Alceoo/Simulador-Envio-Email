//Crear Arrays en javascript o arreglos

/*Los arreglos o arrays nos sirven para agrupar elementos del mismo tipo.
Mientras que un objeto va a ser una variable que va a agrupar la informacion de un elemento de 
un objeto, un arreglo puede tener multiples elementos que sean iguales.

Ejemplo: La forma en la que facebook muestra un listado de amigos o las personas que le dieron
me gusta o me encanta a una foto tuya, pues seguramente esa informacion está almacenada en un 
arreglo.
*/

/*Pensemos en esto cómo si un arreglo fuera una variable que va a contener multiples elementos.

En lugar de ir creando una variable para diferentes cosas podemos crear un arreglo que contenga
todos los me gusta de una publicación, todos los amigos en común, todas las vistas de la misma o
compartidas que pueda tener, pueden ir dentro de un arreglo.

Nota: un arreglo puede estar dentro de otro arreglo tambien

cómo tal sólo falta el [] y los datos dentro que lo hagan ser un arreglo para que sea un arreglo.
*/

const numeros = [10,20,30];
console.log(numeros);
/*Esta es la sintaxis que usan los arreglos */
/*Nos va a aparecer en automático cuántos elementos tenemos.
Los arreglos utilizan algo que se usa cómo índices, es decir, cuál es la posición
que tiene ese elemento en el arreglo.

Los arreglos inician en (0), por lo que en éste caso 'Gabriel' estará en la posición 0
mientras que 38 ocupará la posicion de (1) y así consecutivamente hacia la derecha.
*/
/*Se puede crear un arreglo de un sólo elemento, ya que si por ejemplo queremos agregar
algo a amazon, no nos obliga a comprar mucho, se puede comprar uno sólamente y no hay máximo 
para esto.
*/

//Segunda forma de crear un arreglo
const meses = new Array('Enero','febrero','Marzo');
console.log(meses);
/*Lo mismo, tenemos a la izquiera la posicion que tienen en el arreglo y al final vamos a tener
el valor, similar al objeto, tenemos la llave(propiedad) y el valor
*/



/*Pero también podemos crear arreglos con todo tipo de datos, por ejemplo */

const deTodo = ['Este es un string', 30, false, 'si', null, {nombre: 'Gabriel'}];
console.log(deTodo);
/*Aquí vemos que éste arreglo tiene strings, un numero, un booleano, un null, e incluso un objeto
dentro del mismo arreglo.


*/

