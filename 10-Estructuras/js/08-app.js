//Algunas buenas prácticas a la hora de trabajar con los if

const autenticado = true;

if(autenticado === true){
    console.log('El usuario está autenticado');
}
/*éste código funciona, sin embargo cuando estamos evaluando sobre un true no es necesario tener esa evaluacion
de que es igual a true, ya que se da por entendido que es igual a true */
if(autenticado){

}//Ésta es la manera correcta



const puntaje = 500;
if(puntaje > 300){
    console.log('buen puntaje, felicidaes');
}else if (puntaje > 400){
    console.log('Excelente!!!');
}

/*Muchas personas escriben sus códigos así, lo que pasa es que estamos evaluando primero la condición de buen puntaje 
felicidades que es la que se cumple si puntaje es mayor a 300, y le estamos mostrando un mensaje donde talvez le podríamos 
haber mostrado otro mensaje, el mensaje de (excelente) podría ser mejor para alguien que hizo un puntaje de 
500, entonces muchas personas cometen el error de que piensan que un if va a ejecutar ambas condiciones porque ambas 
son verdad(se cumplen), pero el if sólo va a decir, bueno, aqui se cumplió, ejecuto esta linea de código y me
olvido de todo lo demás.
 
Entonces lo más seguro es que en esos casos queramos revisar las condiciones de otra dorma, por ejemplo:

const puntaje = 500;
if(puntaje > 400){
    console.log('Excelente!!!');
}else if (puntaje > 300){
    console.log('buen puntaje, felicidaes');
}

Es importante que revisemos el código constantemente, nuestra lógica tiene que ser la adecuada.

Usualmente los if si se utilizan mucho pero son pocas condiciones las que se utilizan, usualmente basta con un if
normalmente no vamos a colocar un else if else if y así, usualmente va a ser un if.

A muchas personas puede que no les guste mucho utilizar un else if, lo que podemos hacer es lo siguiente

const puntaje = 450;
if(puntaje > 400){
    console.log('Excelente!!!');
   return;
}
if(puntaje > 300){
  console.log('Buen puntaje... felicidades);
  return;
}

Lo que muchas personas hacen es colocar un return, lo que va a hacer es evaluar la condicion que está dentro de los 
paréntesis, si se cumple muestra el mensaje o ejecuta el código y el return dice, "bueno ya, no te ejecutes el 
resto del código", ahora ese return sólamente funciona dentro de una función, o sea que quedaría así...

function revisarPuntaje(){
    
const puntaje = 450;
if(puntaje > 400){
    console.log('Excelente!!!');
   return;
}
if(puntaje > 300){
  console.log('Buen puntaje... felicidades);
  return;
}

}
revisarPuntaje();
mandamos llamar la funcion y ya quedaría lo esperado
*/

function revisarPuntaje(){
    
    const puntaje = 450;
    if(puntaje > 400){
        console.log('Excelente!!!');
       return;
    }
    if(puntaje > 300){
      console.log('Buen puntaje... felicidades');
      return;
    }
/*Si no tuviera esos returns me mandaría los dos mensajes ya que las dos condiciones se cumplen y cada una es un if
no un else if, ahora, lo que return dice es "bueno, ya se cumplió esta condicion, ya imprimí excelente y ya me voy a salir
y esta línea de abajo ya no se ejecuta('el de buen puntaje felicidades')"*/
    

//Éste código es más similar a lo que se haría en la vida real
    }
    revisarPuntaje();

