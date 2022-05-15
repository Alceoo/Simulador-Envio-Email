'use strict'
//Métodos para los objetos

/*Un punto importante que hay que recalcar es el que tenemos que escribir código 
javascript más limpio y sin malas prácticas, para esto tenemos un medidador por así 
decirlo que su funcion es no permitirnos escribir código a lo pendejo.

Cabe añadir que al poner esto nos da la opcion de añadir metodos a los objetos.
*/

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30, 
    disponibilidad: true,
}
Object.freeze(producto)/*este lo que hace es evitar que ese objeto o las propiedades internas que hay en ese 
objeto sean modificadas.
ES BÁSICAMENTE LO MISMO QUE CONGELAR ESE OBJETO 
cosa similar a lo que pasa con const 
*/

//A esto se le llama congelar un objeto

//producto.disponible = false;
//producto.imagen = 'imagen.jpg';
/*Con esto creamos y a la vez asignamos un valor a una propiedad dentro de un objeto
*/

console.log(producto);


//Método para saber si el objeto está congelado o no lo está 
console.log(Object.isFrozen(producto));
//Esto nos arroja un boolean, si está congelado es true, si no lo está nos marca false.
