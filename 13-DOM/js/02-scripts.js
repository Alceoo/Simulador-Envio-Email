//Otra forma de seleccionar los elementos es con el getElementsByClassName.

/*éste básicamente es seleccionar a los elementos por su clase, cada vez es menos 
popular esta sintaxis, pero es importante conocerla.*/

/*Supongámos que queremos seleccionar amm el header, el elemento header tiene una clase
de header*/

const header = document.getElementsByClassName('header');

/*En primera, siempre siempre pero siempre tenemos que hacer referencia al document
y después tenemos un método que se llama getElementsByClassName, este nos va a permitir
seleccionar elementos que tengan un nombre de una clase, cómo string le ponemos
el nombre de la clase que queremos seleccionar 
*/ 

console.log(header);

/*Si guardamos cambios y abrimos la consola podemos ver que eso nos selecciona a 
nuestro header, de esta manera podemos seleccionar un elemento y comenzar a hacer 
operaciones sobre esa section, podemos seleccionar un formulario y validarlo*/

/*Muy importante es que cuando seleccionamos un elemento lo escribamos tal cuál 
cómo está, por eso no es recomendable ponerle mayúsculas a las clases ni a los id*/


const hero = document.getElementsByClassName('hero');
console.log(hero);

//En los metodos las mayúsculas y minúsculas son importantes por el sensitive

/*Algo importante que cabe añadir es que las clases se pueden repetir
Si las clases existen más de una vez
*/
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor); 

/*Aqui lo que pasa es bastante sencillo, si tenemos varios elementos con 
la clase contenedor lo que va a pasar por obviedad es que nos va a 
seleccionar a todos los elementos que compartan los contenedores, 
que son bastantes, y nos los arroja como su se tratara de un arreglo 

O sea que nos puede traer varios elementos a la vez, por lo mismo de 
que las clases son reutilizables*/


//Si una clase no existe.

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

/*Nos va a retornar simplemente un arreglo vacío*/
