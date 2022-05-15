/*  Cambiando el CSS con JS*/
/*Ya vimos lo que significa el DOM, también ya vimos lo que es el querySelector
para seleccionar, de igual manera hemos visto lo que es la medio especificidad
por así decirlo para acceder a ese elemento, y por último hasta este punto 
hemos visto cómo modificar el html en textos e imágenes, pues ahora veremos
cómo modificar el CSS*/

/*En JS también es podible cambiar el css de un elemento, también podemos
agregar o quitar clases. ejemplo:
Cuando llenamos un formulario y dejamos campos vacíos aveces JS nos muestra el 
formulario y ese campo se muestra en color rojo y están agregando una clase en
base a una interacción que nosotros estamos haciendo.

Veámos cómo cambiar el color de un encabezado*/

const encabezado = document.querySelector('.contenido-hero h1');

//console.log(encabezado.style);
/*Si lo vemos en el navegador y nos vamos a style nos arroja por así decirlo
un objeto de estilos que pss se llama style y si queremos acceder a el ya 
sabemos cómo hacerlo*/

/*Haciendo esto nos aparecen todos los estilos que le podemos poner.
Una característica de los styles en JS es que a diferencia de el cómo se
declaran las propiedades en css que amm por ejemplo.

justify-content: esta propiedad se declara así en css

Pero en JS...

justifyContent
O sea que las que tienen dos palabras, se elimina el guión y se empieza con 
mayúscula
*/

encabezado.style.backgroundColor = 'red';
/*Así quedaría básicamente, las mismas propiedades que tenemos en css
También las tenemos en Javascript*/
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase'


/*Ahora, para cosas sencillas esta sintaxis está bien, 
la única desventaja es que va a hacer nuestro código más
grande, y CSS se encarga de la apariencia.

Lo que se recomienda usualmente es agregar o quitar 
clases*/

/*Si lo abrimos en un navegador cómo developer 
edition vemos las propiedades que tenemos para usar
uno de ellos es el classlist.
Cómo vimos anteriormente existen dos formas, classlist 
que nos va a traer todas las clases cómo si fuera un
arreglo y classname que nos las va a traer cómo si 
fuera un string*/
/*Y ahora, cómo podemos agregar clases?
Para ello tenemos un método que se llama .add
veámos*/

const card = document.querySelector('.card');
card.classList.add('Nueva-clase', 'new-class-2');
//Aquí le estamos diciendo que nos agregue una clase, podemos agregarle más
card.classList.remove('new-class-2');
//De esta forma borramos clases
console.log(card.classList);


/*Si nos vamos poquito más lejos podemos pensar en que si le ponemos una condicion
de si el formulario no es correcto que agregue una clase en color rojo podría
ser para que indique que el fomulario o un campo del formulario no se ha 
llenado o es incorrecto*/







