//.forEach para iterar un array
/*El foreach cómo el for loop son metodos que tiene un arreglo */
const carrito = [
  { nombre: 'Monitor de 20 pulgadas', precio: 200},
 
  { nombre: 'tablet', precio: 300},
 
  { nombre: 'audifonos', precio: 400},
 
  { nombre: 'teclado', precio: 500},
 
  { nombre: 'Impresora ', precio: 2600},
 
  { nombre: 'papel de baño', precio: 2300},
]

for(let i = 0; i < carrito.lenght; i++ ) {
    console.log( carrito[i].nombre);
}



/*A esto se le llama iterar sobre un objeto, pero, sobre qué objeto queremos iterar.
Para ir iterando sobre cada objeto lo que tenemos que hacer es recordar el método de punto que es para los arreglos
e ir aplicándolo, ya que éste método lo que hace es acceder a cada punto del arreglo que tenga ese nombre, en este caso 
la propiedad a la que queremos acceder es nombre jajaj por lo que le tenemos que poner después de i . nombre.

Ahora, lo que quiere decir aquí es: 
créame una variable que se llame (i), ese i va a empezar en la posición de 0, i tiene el método lenght para que nos devuelva 
la longitud de la misma cadena de carácteres escritos en la cadena y que a la vez se vaya sumando uno, después le decimos que imprima 
los valores de carrito, pero con la variable i, ya que esto significa en la posición i,  para que vaya iterando sobre cada objeto .

*/
