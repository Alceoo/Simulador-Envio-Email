


//El operador && para que se cumplan 2 o más condiciones

/*El operador && revisa que se cumplan 2 o más condiciones dentro de nuestro if.

Cuando vamos a comprar en amazon por ejemplo, primero debemos de tener una cuenta y 2do 
debemos de tener suficiente saldo para realizar el pago, además de que el producto debe de
estar disponible
Ejemplo:
*/

const usuario = false;
const puedePagar = false;


if(usuario){
  console.log('Si eres usuario')
}else if(puedePagar){
    console.log('Si puede pagar');
}

/*De esta manera es cómo lo podríamos hacer, pero sin embargo lo que pasa es que si podemos recordar
el else if o el if y eso lo que hacía era ejecutar sólo la primera sentencia que se cumpla, 
pero si queremos que se cumplan dos no lo podríamos hacer de esta manera y es para ello que tenemos el
&&, veámos cómo se utiliza*/

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else {
    console.log('No puedes comprar')
}
/*Esa es una característica del operador &&, que revisa que se cumplan las dos variables, si una de las dos no 
se cumple en automático va a caer en el else, porque el && revisa que se cumplan ambas

Ahora esto sólo dice, no, no puedes comprar si uno de los dos no se cumple, pero
si queremos dar información más detallada podemos hacer lo siguiente...
*/


if(usuario && puedePagar){
    console.log('si puedes comprar');
} else if(!usuario){/*Una forma de negar una condicion es con el signo de exclamación, al
negar una condicion queremos decir, si esta no se cumple ejecuta esto. ejemplo:

Aquí le estamos diciendo, sí usuario y puedePagar son true, ejecútame si puedes comprar,
si no son true ejecuta, no puedes comprar, pero si una se cumple y la otra no le ponemos el signo de
exclamacion, esto lo que  hace es dar más información*/
console.log('Inicia sesión por favor');
} 
/*Aqui si usuario pasa a ser false nos dice que iniciemos sesion, ya que sin eso no podemos avanzar al siguiente paso*/
else if(!puedePagar){
  console.log('No tienes saldo suficiente');
} 
/*Aqui si el valor de alguna de las variables es verdadero o falso lo que pasa es que se van hacia una respuesta */
else{
    console.log('No puedes comprar')
}

/*Ahora, si la persona no puede pagar y tampoco es usuario ejecutaríamos que no puede comprar
else if(!puedePagar && !usuario){
    console.log('No, no puedes comprar');
}
el orden de los factores termina siendo muy importante cuándo trabajamos con los else if
*/


