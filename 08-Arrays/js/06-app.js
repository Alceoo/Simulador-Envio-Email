//Crear un nuevo arreglo con el spread operator

const carrito = [];

const producto1 = {
    nombre: 'Monitor',
    precio: 30,
}
carrito.push(producto1);

const producto2 = {
    nombre: 'Teclado',
    precio: 800,
}
carrito.push(producto2);

const producto3 = {
    nombre: 'Celular',
    precio: 8999,
}
carrito.push(producto3);



let resultado;

 resultado = [...carrito, producto1];

 resultado = [...resultado, producto2];

 resultado = [...resultado, producto3];

 console.table(carrito);
/*Aqui lo que esta pasando es: 
Quiero que mi resultado sea igual a copiar los valores que hay en el mismo carrito, más, ya que 
aqui la coma significa más el producto1.

Después quiero que resultado sea igual a copiar los valores de resultado, más los valores del 
producto dos.

Para terminar quiero que resultado sea igual a la copia de resultado que a su vez
resultado es la copia de carrito y producto uno, y también esa misma copia mas producto dos.
Ahora quiero que se haga una copia de resultado más producto tres, de ésta manera ya tengo mi carrito
de compras.*/




/*En javascript en las nuevas versiones se dieron diferentes funciones, unas se les conoce cómo
declarativa y otra se le conoce cómo imperativa.

La forma imperativa se va a explicar de esta manera.

const carrito = [];

const producto = {
    nombre: 'cualquier mamada'
    precio: 3299
}
const producto2 = {
    nombre: 'Celular',
    precio: 900,
}

carrito.push(producto);
carrito.push(producto2);

Aquí tenemos un carrito y sobre ese mismo carrito estamos agregando elementos al inicio
o al final,(Al incio con unshift y al final con push). 
A esta forma se le conoce cómo imperativa.
O sea que esa forma modifica la variable original, sobre ella misma trabaja,
sobre ella misma la reescribe, y sobre ella misma modifica los datos.


///----Forma declarativa------///
//Esta forma viene con la actualización más grande que es la del ecmascript 6

Esta forma por así decirlo no trabaja con la variable original , sino que crea una nueva, ejemplo
*/

let resultado2;

resultado2 = [...carrito]

console.table(resultado2);


