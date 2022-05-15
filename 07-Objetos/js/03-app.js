//Agregar o eliminar propiedades de un objeto

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
//imagen: 'jpg'
}

/*Se pueden agregar desde la declaración del objeto, pero si por alguna razón la tenemos que
agregar después en la ejecución, se puede de esta manera */

//Agregar nuevas propiedades al objeto
producto.imagen = 'Imagen.jpg'

//Reasignar el valor de una propiedad dentro de un objeto
producto.nombre = 'Monitor de 4 pulgadas'

//Eliminar propiedades del objeto

delete producto.disponible



console.log(producto);