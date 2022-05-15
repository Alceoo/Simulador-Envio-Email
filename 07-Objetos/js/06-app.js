//Destructuring de Objetos Anidados
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    informacion: {
    medidas: {
        peso: '3kg',
        medida: '1metro',
    },
        fabricacion: {
          pais: 'México',
          numIdentificador: 1331313, 
        }
    }
}

/*Veámos cómo hacer un destructuring más complejo que los anteriores */

const {nombre, informacion: {fabricacion: {pais}}} = producto;

console.log(pais);

//aqui nos interesa acceder a la variable fabricacion
/*Tenemos que ser específicos con lo que queremos con el destructuring
(sacar la propiedad(variable) del objeto y declarar la variable), ya que si le ponemos 
recordemos que lo que hace es crear una nueva variable con lo que le pongamos dentro,
si le creamos algo que no pss error, pero si también mandamos llamar algo por consola 
que no es exactamente lo que creamos pues también error jaja */

/*Si también queremos acceder a otra variable amm por ejemplo a informacion, también 
podemos, y se hace de la siguiente manera

const {nombre, informacion, informacion: {fabricacion}} = producto;
console.log(fabricacion);
console.log(informacion);
*/

/*El destructuring puede ser muy complejo pero a su vez es muy útil
ya que manda a llamar a la propiedad del objeto y a su vez lo crea. */



/*Ejercicio: haz un objeto que tenga muchas cosas y a su vez mándalo llamar
con el destructuring*/



