/*Traversing the DOM*/
/*En JavaScript todo está conectado al document, pero la forma en la que nos vamos
a mover por los diferentes elementos se le conoce cómo traversing de DOM, cómo
si fuera un mapa, es cómo si fueramos unos turistas en una ciudad desconocida y 
la vamos a ir recorriendo sobre los lugares de nuestro interés.*/

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
/*Al abrir la consola podemos ver los enlaces, pues en JS a los enlaces se les conoce
cómo nodos y vamos a acceder a ellos de la siguiente forma*/
console.log(navegacion.childNodes);
/*Aqui notamos que aparece text(pss porque es texto), a(por ser un enlace).
Esto pasa porque childNodes nos va a traer los elementos, los espacios en blanco 
se convierten en elementos.

Con espacios en blanco nos referimos a los saltos de línea jajaja

Si, los saltos de línea se consideran cómo elementos por más raro que suene esto,
por lo tanto si le eliminamos los espacios en blanco que son los que se pintan
en la consola cómo texto ya sólo se verán los "a" de las etiquetas.

Para evitar que esto pase lo que hacemos es colocar otro elemento en lugar del child
nodes*/
console.log(navegacion.children);//Children le quita esos espacios en blanco

/*Para acceder a estos nodos o elementos lo podemos hacer de la misma manera en la que
accedemos a un arreglo, o sea con su posición*/

console.log(navegacion.children[0]);//A esto me refiero jeje

/*Firefox developer edition nos ayuda muchísimo, porque nos da mucha más información 
de la que nos podría dar uno normal

como de esas es nodeType y nodeName

console.log(navegacion.children[0].nodeName);
nodeName nos dice que es de tipo a, ese a es la etiqueta

console.log(navegacion.children[0].nodeType);
nodeType nos dice que es un 1, pero, qué significa ese 1?


Revisando en la documentación de firefox(para JS es la mejor) sobre nodeType, nos arroja
una tabla donde nos dice el valor de cada uno, checando esto vemos que nos dice que
element node(nodo de tipo elemento) tiene un valor de 1.

Los elementos son digamos que las etiquetas html, es decir la que tiene apertura y cierre
o una imagen , el doctype sería un 10, , el comentario es el 8 y así.

Ésto nos va a permitir identificar los diferentes tipod de nodos que tenemos.*/


const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);
//.children nos va a listar los elementos que sean hijos de card, pero sin el salto de línea

/*Aquí vemos que nos arroja un elemento de imagen y un div con la clase de info,
supongámos que queremos acceder al info, anteriormente vimos que lo podemos hacer
por la posición, pero este también tiene hijos, así que podemos ponerle de new .children
*/

/*Lo que estoy haciendo es escribir un selector que comienza en card y estamos
navegando sobre sus diferentes elementos, eso es lo que se conoce cómo traversing de 
DOM y con esto y las posiciones nos permiten hacerlo*/

/*Aqui igual vemos que había un párrafo de música electrónica al que queríamos acceder
navegando sobre el DOM, pues lo hicimos, al ser un hijo de card del segundo hijo
le pusimos children alado del hijo de card para que eso nos llevara a su hijo, para 
después decirle que queremos acceder a la posición 2, que es la que tiene el párrafo
de música electrónica, y ahora queremos acceder al texto, por eso le pusimos
textContent*/

//Si lo queremos modificar lo pegamos y le ponemos igual a y pss ya
card.children[1].children[1].textContent = 'Nuevo heading, desde traversing de DOM';
//en esta de arriba accedimos al texto de música electrónica y modificamos el texto
card.children[0].src = 'img/hacer2.jpg';
//Aquí accedimos a la imagen dentro de card que es la 1ra position y le cambiamos la imagen


/*Ahora, aquí hemos visto cómo usar el traversing con el children(O sea que vamos del
padre al hijo), pero, cómo podríamos hacerlo al revés?
Sisi, o sea irnos del hijo al padre*/

//Traversign del hijo al padre 

console.log(card.parentNode);//pero este deja espacios en blanco por el salto de línea

console.log(card.parentElement);//éste no nos deja espacios en blanco
/*Tanto cómo al de children para ir al hijo desde el padre, también aquí(del hijo al padre)
podemos ponerle los que necesitemos, no es cómo que sólo se pueda poner 1*/




/*Ahora, así cómo hay elementos hijos también hay elementos hermanos, por ejemplo
tenemos un padre que se llama contenedor cards, dentro de éste padre tenemos
varios hijos que están al mismo nivel, entre ellos se llaman hermanos.

En mi caso los hermanos comparten una clase(porque así debería de ser casi todas
las veces cuándo son contenedores).

*/

//Supongámos que tenemos el card1 y queremos recorrernos al card2
console.log(card.nextElementSibling);
/*Si abrimos la consola podemos ver que esto nos va a seleccionar al 2do elemento y
podremos acceder a el para hacer los cambios que queramos, poner el siguiente y el siguiente
también se puede hacer mientras sigan habiendo hermanos, con otro nextElemntSibling*/


/*Pero también hay una forma de irnos al anterior, si estamos en el último card y nos 
queremos ir al primero pss es fácil*/

const utlimoCard = document.querySelector('.card:nth-child(4)');
//Aqui estamos eligiendo el útlimo elemento que hay con la clase .card
console.log(utlimoCard.previousElementSibling);
//Aqui lo estamos imprimiendo para que se vea en consola, lo podemos mandar llamar

//Y así es uno a uno hacia atrás


//Ahora, si queremos seleccionar el primero hay un método, si queremos el último también

console.log(navegacion.firstElementChild);//el primero

console.log(navegacion.lastElementChild);//el último


