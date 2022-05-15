//El operador OR para que se cumpla al menos una o la otra condicion, pero va a revisar que se cummpla almenos una

const efectivo = 300;
const credito = 1000;

const saldoDisponible = efectivo + credito;

const totalApagar = 600;

if(efectivo > totalApagar || credito > totalApagar){
    console.log('Si podemos pagar');
}
else {
   console.log('Fondos insuficientes');
}

/*El operador OR que es este || sirve para decir o jajaj literalmente ejemplo:

efectivo = 300;
credito = 1000; 

saldoDisponible = efecivo + credito;

totalApagar = 600;

if(efectivo > totalApagar || credito > totalApagar){
    console.log('Si podemos pagar);
}

Aqui le estamos dicendo, si nuestra cantidad de efectivo es mayor al total a pagar, eso significa
que si podemos pagar, caso contrario(else)Fondos insuficientes.

Entonceslo de dentro del paréntesis va a revisar porque se cumpla la primera condicion o la segunda 
condicion dentro de los pipes. incluso se pueden poner más operadores OR para poner más condiciones

( || a este operador se le conoce cómo OR o pipes )

else {
    consol.log('fondos insuficientes);
}

O sea que a diferencia del otro operador, este con uno que se cumpla es cómo si se fuera al otro camino para dicho operador
*/

/*Ahora supongámos que están los siguientes datos

const efectivo = 300 * 1.16;
const credito = 400 * 1.16; 
const saldoDisponible = efectivo + credito; 
const totalApagar = 600;

if(efectivo >= totalApagar || credito >= totalApagar || saldoDisponible >= totalApagar){ 
console.log('Si podemos pagar');
}else{
  console.log('No podemos pagar');
}

Este código es muy común por ejemplo en la validación de un formulario, resisamos si alguno de los 
campos está vacío, con uno sólo que esté vació le podemos decir que es obligatorio que
los llene, el OR es más común que el && 


aqui lo que estamos haciendo es decir, si efectivo es mayor o igual a total a pagar, o, si credito es mayor
a total a pagar, o, si saldoDisponible que es igual o mayor a la suma de los impuestos de cada producto,
mas el precio total imprime si podemos pagar

*/






