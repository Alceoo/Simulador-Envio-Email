//Las ventajas de los Arrow functions

//Parámetros en las funciones de arrow functions
const aprendiendo = function(tecnologia){
/*Aquí le pusimos un parámetro al que le tenemos que poner un Argumento*/
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('javascript');


/*Ahora supongámos que queremos hacer lo mismo, pero de la forma de abajo*/


const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}` ;

console.log(aprendiendo2('React native'));
/*Recordemos que arriba no necesitamos el console.log, ya que ya le estamos asinando
un valor y para mandarlo llamar lo que hacemos es eso*/





/*Cuando sólo se tiene un parámetro lo que se puede hacer es quitarle los paréntesis 
jajaja 
*/


/*Ejericio:
Hacer una de esas madres con el arrow function pero con más parámetros y otra con un sólo 
parámetro
*/

const aprendiendo3 = function(tecnologia, tecnologia2) { 
    console.log(`Aprendiendo ${tecnologia} ${tecnologia2}`);
}
aprendiendo3('Javascript', 'Node JS');





const aprendiendo4 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`

console.log(aprendiendo4('java', 'node js'));



 