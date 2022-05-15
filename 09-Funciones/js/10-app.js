//Arrow functions 

/*Los Arrow functions son otra forma de declarar funciones*/

/*Crearemos una funcion de tipo expresiva, que esa es la de la variable al inicio*/

const aprendiendo = function(){
 console.log('Aprendiendo javascript');    
}
aprendiendo();
//Ésta funcion puede ser más corta con los arrow functions, veámos

/*Básicamente lo que pasa es que el function se convierte en el igual o mayor que
y el paréntesis se mantiene
*/

const aprendiendo2 = () => { 
      console.log('Aprendiendo dos');
}
aprendiendo2();
/*Cuando sólamente tenemos una funcion con una línea, las llaves ya no son necesarias,
por lo tanto las podemos quitar*/


const aprendiendo3 = () => console.log('Aprendiendo 3');
aprendiendo3();
//Lo podríamos hacer de esta manera y el código puede seguir funcionando



/*También cuando los arrow functions cuando tienen una sóla línea dan por implícito 
el return, por lo que bien podemos quitarle el console.log de ahí.


o sea que nuestra variable tiene el valor de Aprendiendo 4, por lo que 
podemos mandarla llamar con un console log de la siguiente manera


Ojooo, cólo cuando tienne una sóla línea
*/
const aprendiendo4 = () => 'Aprendiendo 4';

console.log(aprendiendo4());


/*Si la funcion sólo tiene una línea los paréntesis son opcionales, y también se da
por implícito el return cuando tenemos una sóla línea*/




