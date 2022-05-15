//El Orden De Las Operaciones
/*Es el mismo órden que en la escuela,
multiplicaciones y divisiones se ejecutan primero que 
sumas y restas, pero antes están las potencias y la raíz,
ejemplo*/ 
let resultado; 
resultado = 20 + 30 * 2
//Aqui el resultado es 80', fácil rey.

resultado = (20 - 30) * 2;
//Al estar dentro de un paréntesis se ejecuta primero que lo que hay adentro.


//20% de descuento en tú carrito de compras.
resultado = (20 + 30 + 40 + 50 + 60) * .2;
/*Aquí lo que hacemos es sumar las cantidades del carrito de compras
y luego multiplicarlo por punto dos para sacar el 20 porciento,
pero los separamos con paréntesis para que la jerarquía de operaciones 
no afecte al orden en el que se harán las operaciones.
*/

/*Ejercicio: calcula un impuesto
Tenemos 2 artículos, uno de 20 y otro de 30

*/
resultado = (20 + 30) * 1.16;
/*Aquí se le pone 1.16 Para qué en automático sume el impuesto al producto, 
ese es un buen hack la vdd.
 


*/
console.log(resultado);