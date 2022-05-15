//Añadir nuevos elementos al fin o al inicio de un array

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];
//console.log(meses.length);//Lenght lo que quiere decir es dame el número de valores que hay ahí.

//meses[7] = 'Agosto'; 
/*Vemos que podríamos agregar un nuevo valor con esta sintaxis, pero 
tenemos que conocer las posiciones de los numeros y esto lo hace menos dinámico, para evitar
esto tenemos los métodos de los arreglos.

Estos nos van a permitir agregar valores al arreglo sin conocer la posición o la extensión del 
arreglo yo puedo agregar valores al arreglo
*/

//Agregar elementos(valores) al final del arreglo

meses.push('Agosto');
/*Lo que hace esto es decir.
"Me importa un chingado en qué posición estén, yo voy a agregar al final, no tengo que 
conocer la posición"
si seguimos agregando más se irán agregando uno tras otro
meses,push('Agosto);
"
*/
console.table(meses);


//Ejercicio

/*Aquí se deja el arreglo vacío ya que nosotros al entrar a amazon pss no tenemos elementos en el 
carrito, usualmente vamos a inciar con un arreglo vacío y con base en las interacciones del
usuario pss le van a ir dando click a agregando al carrito o seguir personas y ese arreglo se va 
ir llenando*/
//Nota: UN ARREGLO PUEDE NO TENER NADA, PERO A UN OBJETO SI SE LE TIENEN QUE DECLARAR LOS VALORES
const carrito = []; 

//Definir un producto
const producto = {
    nombre: 'Monitor 10 pulgadas',
    precio: 500,

}
//Y si quiero agregarlo al carrito podemos aplicar lo que ya vimos
carrito.push(producto);



//2do prodcuto añadido al carrito de compras

const producto2 = {
    nombre: 'Celular',
    precio: 1290,
}
carrito.push(producto2);

/*Poner los elementos antes que otros, esto se hace con una propiedad llamada unshift*/

const producto3 = {
    nombre: 'Teclado',
    precio: 2500,
}
carrito.unshift(producto3);
/*Con esto ya tenemos teclado al comienzo del carrito de compras*/




/*Y si lo quiero listar pues...*/
console.table(carrito);//le pasamos carrito pok lo que queremos que se muestre es el carrito 

/*Recuerda cabrón .push agrega al final del carrito, no importa que no haya nada, si no hay nada
pues va a ir agregando conforme vayamos creando y vayamos haciendo un push*/


/*Nota: El código se ejecuta de arriba hacia abajo, puede que muchas cosas no nos salgan si
seguimos utilizando malas prácticas y nuestro código muy desordenado*/



