'use strict'
//Método para sellar un objeto, seal

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
}

Object.seal(producto);
/*Lo que hace el método seal es que no se pueden agregar, ni eliminar propiedades.
Peroo si se pueden modificar las existentes. o sea, que se pueden reasignar los 
valores de las propiedades que ya tenemos
 */

producto.disponible = false;//SIUUUU

//producto.imagen = 'Imagen.png';//nouuu 
//delete producto.precio;//nouu

console.log(producto);

/*Pregunta para trabajo:
¿Cuál es la diferencia entre freeze y seal?
R= freeze no te deja hacer nada, te deja el objeto tal cuál cómo está 
y seal si te permite modificar(reasignar) las propiedades ya
existentes, pero tampoco te deja borrarlas, ni crear nuevas 

*/

//COMO SABER SI UN OBJETO ESTÁ SELLADO

console.log(Object.isSealed(producto));
//Si lo está nos arroja true, si no lo está nos arroja false.