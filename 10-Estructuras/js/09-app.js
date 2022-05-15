//El operador ternario

/*El operador ternario es muy similar al if pero todo en una sóla línea*/
const autenticado = true; 

console.log( autenticado ? `si esta autenticado` : `No, no esta autenticado`  );
/*Aquí estamos diciendo, si autenticado esta cómo true, entonces (?) ejecutamos éste código
y si no se cumple(:) ejecutamos esta otra parte de código. Es básicamente lo mismo que un if y else, 
sólo que cambia la sintaxis a un (?) como si fuera el if y (:) como si fuera el else*/
/*Si quisieramos que no haga nada en el else o : le podríamos poner un null*/


//Pero, ¿Cómo le haríamos para revisar dos condiciones en un ternario?
const revisado = true;//Aqui use un sinonimo de autenticado nomas
const puedePagar = false;

console.log(revisado && puedePagar ? `Si esta autenticado` : `No esta autenticado`);

/*Es básicamente lo mismo que un if else, lo que cambia es la sintaxis en la que 
se escribe, esta sintaxis es más corta.

Aqui lo que le estamos diciendo con el operador ternario y el operador && es, 
si estas dos condiciones se cumplen(?), imprime esto o sea el mensaje pues,
si no se cumplen(:) imprime esto otro.

También se le puede agregar un ! al incio de las variables para que no sea por así decirlo 
tan estricto, decir si se cumple una u otra forma imprime el primero, si le cambiamos el valor 
a false esto pasa claro
*/

/*También se le puede poner el || para decir que si una de las dos se cumple entonces ejecutame 
esto*/

console.log(autenticado || puedePagar ? `Si puedo pagar` : `No, no puedo pagar`);

/*De esta manera le estamos diciendo que cumpla una o si esa no se cumple que cheque si se cumple la otra
, si se cumple alguna de las dos se imprime el si puedo pagar, si no se cumple se imprime el no puedo pagar*/



/*Algo que no hemos visto y es muy poco común es un if anidado, o sea un if dentro de otro if*/


const efectivo = 300;
const credito = 400;
const saldoDsiponible = efectivo + credito; 
const totalPagar = 600; 

if(efectivo >= totalPagar || credito >= totalPagar || saldoDsiponible >= totalPagar){
   if(efectivo >= totalPagar){
     console.log('Tú pago se realizó con efectivo')
   }else{
       console.log('Otra forma de pago');
   }
/*Esto puede tener un uso bastante interesante, pero por le momento sólo lo usaremos para dar más información*/   
} else {
    console.log('No podemos pagar');
}

/*¿Cómo podríamos hacerle para tener un if anidado dentro de un ternario*/

console.log(autenticado ? puedePagar ? `SI ESTÁ AUTENTICADO Y puede pagar` : `Si esta autenticado, no puede pagar`:
 `no, no está autentiado` );

/*Esta sintaxis es interesante ya que todo se realiza en una sóla línea con el operador ternario podemos ahorrarnos 
líneas de código.

Entonces lo que está pasando aqui es, si autenticado es true, entonces entra al ternario que nos dice puedePagar y 
revisa si puede pagar, si puede pagar entonces nos dice, `Si esta autenticado y puede pagar`, si autenticado fuera
false entonces entraría al else(: no, no está autenticado).
Si autenticado es true y puedePagar es false, me manda al else(: si esta autenticado, no puede pagar).
*/

/*Es poco comín ver ternarios anidados*/