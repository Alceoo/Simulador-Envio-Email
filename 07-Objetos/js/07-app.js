//El problema de los objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponibilidad: true, 
}

/*El problema con las constantes es que no se pueden reasignar, eso nos lleva a una 
pregunta, los objetos se podrán reasignar?
Si, si se pueden reasignar, veámos.
*/
producto.disponibilidad = false;
console.log(producto);

/*Aquí vemos cómo sus propiedades si se pueden reescribir, pero sin embargo lo que no
se puede reescribir es el mismo objeto.*/


delete producto.precio //con esto podríamos eliminar una propiedad, veámos cómo congelarla
