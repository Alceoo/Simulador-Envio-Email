//Comparar null y undefined

let numero1; 
console.log(numero1); 
/*Declaramos la variable sin asignarle un valor para que al mandarla llamar nos de un 
undefined, por qué undefined*/


// console.log(typeof numero);
/*Al ponerle un typeof es básicamente preguntar qué tipo de dato es el que tiene la 
variable, y el tipo de dato es undefined
*/


//Null
let numero2 = null;
console.log(numero2)
// console.log(typeof numero2);


console.log(numero1 == numero2);

/*Si comparamos numero1 con numero 2 con el operador de igual
normal, nos va a arrojar un valor de true, y si le vemos un poco de
lógica pues null es nulo en español y undefined hace referencia a un valor inexistente
o indefinido, estos dos podrían tomarse cómo iguales.
Pero esas chaquetas mentales no jajaj, no es.

Por este tipo de cosas medio raras se recomienda utilizar operadores estrictos, para
no cagarla en algún punto.


*/
console.log(numero1 === numero2);

/*De esta manera es cómo si le pusieramos un typeof al operador igual que se encarga de 
checar el tipo de dato que hay en cada uno,  */
