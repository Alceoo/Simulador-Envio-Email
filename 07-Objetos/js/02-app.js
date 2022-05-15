//Cómo acceder a los valores de un objeto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}


console.log(producto);

/*¿Cómo yo puedo acceder a un objeto.
Los objetos tienen algo que se llama la sintaxis de punto,
si queremos acceder a más valores de las variables lo que tenemos que hacer es 
poner más veces el console.log con el nombre del objeto en donde se encuentra (.) y después
el valor de la variable

*/
console.log(producto.nombre);

producto.nombre = 'Así se le cambia el valor a una propiedad dentro de un objeto'




//Hay otra forma en la que esto se puede hacer

console.log(producto['nombre']);
