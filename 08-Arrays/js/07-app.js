//Eliminar elementos con splice

/*En esta parte estaremos viend la forma imperativa.
La imperativa va a modificar la variable original y la declarativa no*/
const carrito = [];


const producto = {
    nombre: 'Monitor de 10 pulgadas',
    precio: 39,
}
carrito.push(producto);
const producto2 = {
    nombre: 'Tablet',
    precio: 129,
}
carrito.push(producto2);

const producto3 = {
    nombre: 'Tablet dos',
    precio: 19,
}
carrito.push(producto3);
console.table(carrito)
//Cómo eliminar el último elemento de un arreglo con .pop

//carrito.pop();
//Con esto ya eliminamos al útimo elemento de un arreglo, no hace falta pasarle otro valor

//console.table(carrito);


//carrito.pop();
//console.table(carrito);


//Si queremos eliminar al incio del arreglo el método que se usa es..


carrito.shift();
console.table(carrito);
//De esta manera eliminamos el valor del inicio del arreglo


const producto4 = {
    nombre: 'Café',
    precio: 308,
}//Este producto se creo para poder hacer más grande el arreglo y explicar otro método
carrito.push(producto4);
console.table(carrito);

/*Cómo eliminar cualquier elemento... splice*/

carrito.splice(1, 1);
/*Este método funciona de la siguente manera
El primer numero dentro del paséntesis es para indicar desde qué posición quiero empezar a cortar
y el segundo numero es cuántos quiero eliminar a partir de la posición desde donde empecé a cortar.
*/
console.table(carrito);