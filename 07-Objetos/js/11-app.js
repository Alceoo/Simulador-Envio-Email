//La palabra this

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    disponible: true,
    precio: 30,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }//concatenamos las propiedades del objeto
}
/*Los template strings `` estas cositas, creo haber escuchado que eran parte del ecmascript 6,
Aqui pasaba algo un poco raro, ya que las variables se ponían enmedio de signos de dolar
y entre llaves. así
console.log(`El producto: ${nombre} tiene un precio de: ${precio} `);
de esta manera podemos acceder a las variables
*/


producto.mostrarInfo();

/*Si ejecutamos esto enseguida nos va a aparecer un error, ya que por defecto busca unas
variables definidad, pero fuera del objeto, no está viendo las que tenemos dentro del objeto
por lo que necesitaríamos crear las variables fuera del objeto y asignarles un valor a la vez.
(inicializar las variables jeje).

Aquí lo que está pasando es que mi objeto está imprimiendo lo que hay afuera(como no le he 
asignado el nombre a las variables pss tira un error), pero no está imprimiendo lo que hay 
dentro del objeto

perooo existe una palabra muuy muuy importante para que se ejecute lo que nosotros queremos
 dentro de nuestro objeto y esta palabra tan importante es

 THIS.

La palabra this se refiere a los valores que hay dentro del objeto
*/
/*NOTA: this es una forma de referirse al objeto en si mismo, ya que un objeto puede contener 
multiple informacion*/

const producto2 = {
    nombre: 'Tablet',
    precio: 29,
    disponible: false,
    mostrarInfo: function() { 
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto2.mostrarInfo();

/*Esto lo que nos quiere decir es que this se queda en el objeto en el cual fue declarado, por lo que no se mezclan los valores
entre ellos, está bastante nice si lo vemos de esta manera ya que así es un tanto más rápido*/
