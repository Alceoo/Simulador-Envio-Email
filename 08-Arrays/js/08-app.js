//Destructuring De Arrays

/*El destructuring básicamente es  amm
tenemos una estructura que en este caso es un objeto y estamos extrayendo un valor y eso lo estamos
sacando de su estructura.
*/

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true,
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring en objetos

const {nombre} = producto;

console.log(nombre);


//Destructuring en arreglos

const numeros = [10,20,30,40,50,60,70,80,90];
/*Si yo quiero extraer el 10, esa sería la primer posición, por lo que le tengo que poner eso*/
const [primero, segundo, tercero, cuarto] = numeros;
/*Dígamos que queremos acceder al 40, pues lo haríamos así, ya que esto funciona por posiciones, no por
nombres, si aqui tenemos 5 valores y queremos sacar el cuatro, nombramos a esos cuatro valores con una 
nueva variable y después imprimimos el nombre del valor que esté en la posicíón del que queremos sacar*/   
console.log(cuarto);

/*Nosotros podemos nombrarlas cómo sea, a diferencia del objeto nosotros decidimos el nombre, no importa
que no exista*/

/*Pero aquí pasa una cosa, que se crean varias variables y es escribir mucho, para que no se nos haga tan
pesado lo que tenemos que hacer es ponerle una coma(,) por cada posición esto evita que se creen variables
a lo pendejo y ocurre lo mismo, el numero de posiciónes será la misma.
EJEMPLO:

const [, , tercero] = numeros;
*/
/*Esta es la sintaxis para aplicar destructuring*/


/*Ejemplo: queremos el tercero y el segundo valor, pero que los demás estén en su propio arreglo*/
const abc = ['a','b','c','d','e','f'];

const [ , b, c, ...e ] = abc;
console.log(b);
console.log(c);
console.log(e);


/*Aqui podemos acceder a los valores juntos o separados, yo lo hice separados.
Ahora lo que está pasando es que nosotros creamos un arreglo con 6 elementos, pero 
nosotros lo que hicimos fue sacar el segundo y tercer valor(a la vez los imprimimos),
y dijimos que los demás valores tomen el nombre de e, al poner los 3 puntos lo que pude observar fue 
que le di a entender implicitamente que los demás elementos me los copiara y me los asignara a una variable
que fue la letra e.
al imprimir la letra e pues me dio los valores faltantes 


*/