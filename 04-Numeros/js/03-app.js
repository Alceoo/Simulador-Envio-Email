//El objeto math

/*Para poder visualizarlo usamos la consola del 
navegador(chrome) 
*/
let resultado;

//ejemplo,operaciones que podemos realizar con math y cómo hacerlas

resultado = Math.PI;
//Aqui nos arroja el resultado que tiene guardado de PI


//Si queremos redondear
//Aquí pues está más cerca del 3 que del 2, pues será 3
resultado = Math.round(2.8); 
resultado = Math.round(2.3);//mas cerca del dos, pues es dos

//en esta operación se redondea a 3, no a 2, a 3.
resultado = Math.round(2.5);

/*Existe un método que forza a redondear hacia arriba
cualquier número, se llama ceil, veamos*/

resultado = Math.ceil(2.1);

//Hay otro, pero ahora forza hacia abajo.
resultado = Math.floor(2.9);


//raíz cuadrada

resultado = Math.sqrt(144);


//VALOR ABSOLUTO
/*El valor absoluto es amm, aunque le pongamos menos 200, va a traer el 200.*/

resultado = Math.abs(-132);


//Potencia(se lee, dos a la potencia dee cuatro.)

resultado = Math.pow(2, 4);


//Mínimo
/*Si tenemos una serie de números y queremos saber cuál es el mínimo,
ponemos el objeto math con el método min, le colocamos los números que
queremos verificar y nos va a arrojar el mínimo */

resultado = Math.min(3,5,1);

//Máximo

resultado = Math.max(12,3,4);

//Aleatorio, es random jeje
//resultado = Math.random();

//Podemos mezclar varios números, ejemplo.
/*Aleatorio dentro de un rango, supongamos que queremos generar un número
del 0 al 30*/

resultado = Math.floor(Math.random() * 30);
/*Aquí lo que está pasando es que redondeamos con math.floor hacia arriba
impidiendo que nos salgan números con punto décimal, pero a la vez le 
estamos diciendo que queremos un número que vaya del uno al treinta

//esto podría estar bueno para una rifa
*/
console.log(resultado);




