/*El ejercicio del fizz buzz

Supongámos que tenemos una serie de elementos del 0 al 100, todos los que son múltiplos de tres, es decir
3,6,9,12,15, deben imprimir en la consola la palabra fizz, todos los que son múltiplos de 5,  es decir, 5,10,15,20,25
deben de imprimir la palabra buzz y los que son múltiplos de 3 y de 5, deben de imprimir fizz buzz o sea 15,30,45*/

/*Siempre que tengamos un problema que no podamos resolver, tenemos que ir paso a paso, o sea  comprimirlo en pequeños problemas*/

/*Fizz buzz -- 100 numeros, 1.Obtener los 100 números

for(let i = 0; i < 100; i++){
    console.log(i);
}Aqui ya tenemos nuestra serie de números*/



/*Cómo vamos a identificar los que son múltiplos de 3?, pues utilizando el módulo de 3

for(let i = 1; i <= 100; i++){
    if( i % 3 === 0){//multiplo de 3
      console.log(`${i} fizz`); 
      
    }
}Aqui nuevamente viene la palabra módulo, si dividimos 9 entre 3 el resultado queda en 3, pero el residuo(el modulo)
queda en /0/.
Aunque yo lo entiendo más por el lado de... investigar más sobre el módulo jajaj
*/


/*Ahora los multiplos de 5
for(let i = 1; i < 100; i++){
    if( i % 3 === 0){//multiplo de 3
      console.log(`${i} fizz`); 
    } else if(i % 5 === 0){
      console.log(`${i} buzz`);
    }//podemos ver que es muy similar, sin embargo hay un problema con los multiplos de esos dos, ya que dicen uno u otro
}
*/

//Ahora el multiplo de 3 y 5 tiene que decir fizz buzz

/*Lo más común que podríamos llegar a pensar es que necesitemos otro else if, pero si podemos recordad el if
lo que va a hacer es cumplir las condiciones por cómo vayan apareciendo, por lo que el orden de los factores 
si altera el producto, ya que necesitaremos poner las condiciones en orden del más raro que suceda.

for(let i = 1; i < 100; i++){
    if( i % 3 === 0){
      console.log(`${i} fizz`); 
    } else if(i % 5 === 0){
      console.log(`${i} buzz`);
    }
}
Y el más raro es el multiplo de 15. por lo que nuestro código quedaría de la siguiente manera
*/

for(let i = 0; i < 100; i++){
    if (i % 15 === 0){
        console.log(`${i} FIZZ BUZZ!!!`);
    } else if (i % 3 === 0){
      console.log(`${i} Fizz`);
    } else if(i % 5 === 0){
     console.log(`buzz`);
    }
}

/*Investigar más sobre módulos*/
