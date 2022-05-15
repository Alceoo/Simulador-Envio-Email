//Destructuring de los objetos

/*Aquí estaremos viendo cómo acceder a los valores de un objeto y asignarlos a una 
variable*/
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponibilidad: true,
}

/*Cómo tal lo que queremos es extraer una propiedad(variable) de un objeto y 
crear la variable*/



//const nombre = producto.nombre
//console.log(nombre);


//Supongamos que queremos acceder al nombre
//console.log(producto.nombre); Y esto nos va a permitir acceder al nombre

/*Si queremos asignar el valor de nombre a su propia variable podríamos tener algo así*/


/*Extraer la propiedad(variable) del objeto y a su vez crear la variable en el 
ecma6 es más sencillo, veámos cómo hacerlo. */
const {nombre} = producto;
console.log(nombre);
 
const {precio} = producto;
console.log(precio);

/*Ahora, éste código se puede simplificar más, de ésta manera quedaría
el nuevo código

const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);

destructuring además de extraer el valor, crea la variable.


*/
