//Buenas prácticas a la hora de escribir un boolean

/*Posibles errores */
const autenticado = true;

if(autenticado === true){
    console.log('Si, puedes ver netflix');
} else {
    console.log('No, no puedes ver netflix');
}
/*--------------------NOTA SUPER IMPORTANTE------------------------ */

if(autenticado){
    console.log('Si, si puedes ver netflix príncipe');
}else{
    console.log('No, no puedes ver netflix');
}
/*Lo importante aquí es que no utilizemos los booleans de la manera de arriba, ya que
se da por entendido que el valor es igual al que le asignamos en la variable. 
Por errores cómo estos es que no contratan muchas veces a los programadores.
*/



//Operadores ternario

console.log(autenticado ? 'si esta autenticado' : 'No esta autenticado')
/*Cuánto más avancemos cómo programadores esta va siendo la forma en la que mejoraremos 
nuestras lineas de código*/

