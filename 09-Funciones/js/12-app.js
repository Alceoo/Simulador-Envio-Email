//Arrow functions en un .forEach y un .map

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 200},
    {nombre: 'Televisión', precio: 230},
    {nombre: 'Tablet', precio: 710},
    {nombre: 'Tablet', precio: 120},
    {nombre: 'Audífonos', precio: 450},
    {nombre: 'Celular', precio: 300},
     
];

const nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
})


const nuevoArreglo2 = carrito.forEach(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
})


console.log(nuevoArreglo);
console.log(nuevoArreglo2);





















