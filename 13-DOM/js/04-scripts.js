/*query selector*/

/*Query selector actúa de una manera muy parecida a getElementById, ya que 
nos va a retornar máximo un elemento, pero tiene la característica de que 
nos permite seleccionar incluso clases, es una sintaxis muy similar que cuando
estamos escribiendo una hoja de estilos
*/

const card = document.querySelector('.card');

console.log(card);

/*Aqui lo que estamos viendo es que sólo nos regresa un elemento, que obviamente 
será el primero que encuentra, a pesar que hay diferentes card(elementos con
esa misma clase o id) sólo nos va a retornar uno y este es el primero que
encuentre
*/



/*Podemos tener selectores específicos como en css*/

const info = querySelector('.premium . info');
console.log(info);

/*Aqui estamos seleccionando amm premium, que es el elemento padre de info, pero 
seleccionamos info y si mandamos llamar info vemos que nos regresa el elemento.
Ahora en css esto se le llama especificidad*/


/*Ahora, cómo podemos seleccionar un segundo elemento de un padre con una misma
clase entre los elementos del padre. en css eso lo podemos hacer con un
:nth=child o algo así, pues aquí también podemos agregarle ese nivel de 
especificidad*/


const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')

/*El primer espacio es de un elemento, el segundo es de una clase, 
el tercero es del hijo de ese elemento y cómo son varios elementos que comparten la 
misma clase, pues le ponemos nth child 2, cómo en css*/



//Query selector también nos permite seleccionar id, con la misma sintaxis de css

//Seleccionar el formulario

const formulario = document.querySelector('#formulario');
console.log(formulario);
/*En css para darle estilos a un formulario  le ponemos la clase con el # y ya, igual aqui*/

/*Si hay 2 ids iguales nos va a seleccionar solo el primero, no los demás*/



//También podemos seleccionar elementos html

const navegacion = document.querySelector('nav');
console.log(navegacion);

//Ésta es su etiqueta html



/*Pero bueno ahora, qué pasa si tenemos multiples elemntos con el mismo selector,
pues anteriormente ya vimos que si funciona ponerle nth child, pero a su vez 
para esto tenemos una cosa que se llama all.

Actua muy similar con la misma sintaxis, pero este si nos retorna todos los valores con
el mismo selector, no sólo uno.
*/