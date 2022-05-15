/*Concatenar un string y template strings*/ 
const producto = 'Monitor de 20 pulgadas';
const precio = '30usd';

console.log(producto.concat(precio));
//También se puede concatenar con un string, ejemplo: 
console.log(producto.concat('En descuento'));

/*Es muy común que se quiera concatenar dos variables 
y para esto se usar el método concat.
Aquí se concateno el producto con el precio, por lo que 
en consola me saldrá monitor de 20 pulgadas que sería 
el producto, pegado al precio. 

*/

//De la misma manera podríamos hacer eso pero más concatenado y menos código

console.log(producto + ' con un precio de: ' + precio);

console.log('El producto ' + producto + 'tiene un precio de: ' + precio);
//otra forma de concatenar sería poniéndole comas en lugar de signos, pero sale peor

//Ejemplo aplicado. 
let valor = 'lo que indique su only fans ',  
feministas = true,
valorOnlyfans = 5,
costoAmazonKindle = 7.5,
comprarFeministas = 2;

if(feministas == false){
    console.log('Las ' + 'morras basicas' + ' valen ' + valor + ' y eso es ' + valorOnlyfans + 'dls');

} if(feministas == true) {
    console.log(valor + 'es lo que valen');
}

if(comprarFeministas < costoAmazonKindle){
    console.log('tu feminista vale menos que una suscripción a amanzon kindle');

}

/*Ahora, ponerlo así es mucho código y además nos puede causar varios dolores
de cabeza si no ponemos algún signo de más o algo por el estilo.

Para esto se trajeron consigo varias mejoras con el ecma script6 y nos trajo
otra forma de concatenar variables que se llaman template strings 
o template literals, veamos cómo funcionan estos.
*/


console.log(`El producto ${producto} tiene un precio de $${precio}`); 

/*La nueva forma que nos trajo esto es que las variables se agregan con
esa sintaxis ${producto}  y lo demás sigue siendo una cadena de texto.
Así quedaría con el ecmascript6

Así es cómo quedaría de la manera tradicional

console.log('El producto ' + producto +'tiene un precio de: ' + precio);



*/