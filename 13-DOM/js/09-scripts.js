//Eliminar elementos en el DOM

/*JS es un lenguaje que nos permite agregar interacciones a nuestro sitios y aplicaciones
web, eso incluye traversing de DOM.

Aqui veremos cómo eliminar elementos del DOM, por ejemplo.

Cuando queremos eliminar una foto de facebook por ejemplo, o cuándo queremos eliminar un 
tweet, estos se eliminan automáticamente.
O cuando le quitamos el like a algo se quita automáticamente, así que sin duda es algo
muy común.

Para esto existen 2 formas de hacerlo.*/

//1RA foma de hacerlo. Es eliminar el elemento por si mismo
/*Voy a seleccionar el primer enlace que encontremos en nuestro sitio web, no hace falta 
ser específicos pork en automático nos selecciona el primer enlace que encuentre en 
la página.*/
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

console.log(primerEnlace);//Aqui solo lo mandamos llamar para verlo en consola, no es necesario 


//2DA forma de hacerlo. Es eliminarlo desde el padre
/*Esta forma es básicamente decirle al padre que se encargue de eliminar al hijo */

const navegacion = document.querySelector('.navegacion');
/*El siguiente paso es identificar qué elemento queremos eliminar para ello
se recomienda usar console.log, esto para que por consola nos diga las posiciones*/

console.log(navegacion.children);//Con .children vamos a tener los diferentes elementos hijos

navegacion.removeChild(navegacion.children[2]);
/*También, children nos pasa los nodos(las posiciones que tenemos), gracias a esto podemos
ver que posición tiene el elemento que queremos eliminar.*/

/*Al método removeChild le tenemos que pasar las referencias que queremos eliminar, junto con
la posición que queremos eliminar, esto pss el método en el nombre nos dice qué hacer
"removeChild == removerHijo" dos.*/




