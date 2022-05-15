//Como eliminar espacios en blanco de los strings

/*Aquí lo más pero más importante que vamos a tener es que
los methods se pueden anidar también wey, o algo parecido
es cómo si a los superpoderes les pusieramos superpoderes,
porque se puede poner un método alado de otro método
y los dos van a funcionaaaaar, k loco, pero es así.
 */

const producto = '     Monitor de 20 pulgadas   ';
console.log(producto.trimStart().trimEnd() );

/*el espacio en blanco dentro de las comillas 
ya se cuenta cómo letras, 
uno más corto se llama trim y esto lo quita en 
ambas direcciones

*/