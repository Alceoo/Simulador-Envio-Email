//Convertir strings a números
const numero1 = '20'; /*Aqui es un string, pero tiene la representacion de numero
Pero, cómo hacemos para volverlo un número? veamos*/
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20;

console.log(Number.parseInt(numero1));//aqui ya es un numero, pero sirve para enteros


/*Number igual es un objeto cómo Math, el método que se ocupa para volver un 
string a un número es parseInt, seguido del string o en todo caso el nombre de la variable

El método parseInt lo que hace es convertir ese número pero a entero, si en todo caso 
lo que está dentro del string no es un número entero, lo redondea pero hacia abajo
*/

//Parsfloat: este se ocupa si el número que tenemos dentro del string no es entero
console.log(Number.parseFloat(numero2));


//Revisar si un número es entero o no con el método isInteger, veámoslo.

console.log(Number.isInteger(numero4));

/*NOTA: el isInteger lo que hace es checar si el número es entero o no.
Si el número es entero, te arroja un booleano, true
SI el número no es entero o no es un número, nos va a arrojar un false.

*/

