/*Foor loop */

/*En el capitulo anterior vimos lo que eran estructuras de control que nos permitían ejecutar nuestro código en
caso de que una condicion se cumpla o no se cumpla.
En el caso de los iteradores el código se va a ejecutar hasta que una condicion se cumpla o se deje de cumplir. EJEMPLO: 

Si nosotros visitamos una tienda virtual y comenzamos a agregar artículos al carrito de compras y después le damos en ver 
carrito, ese código que muestra carrito se va a ejecutar hasta llegar al final del arreglo del carrito.

De la misma forma si nosotros queremos ver los comentarios de nuestra última publicación de facebook, esos comentarios
se van a mostrar hasta que ya no haya ningún comentario que mostrar relacionado a nuestra publicación.

Igual en twitter,cuando nosotros entramos a twitter se muestran los twits que no hemos visto, entonces ese código se
ejecuta hasta que se cumplan la condicion de un twit que ya hayamos visto.*/


/*Vamos a comenzar con el más básico, se le conoce cómo for loop, este es igual en casi todos los lenguajes.

Los for loop se ejecutan hasta que el código deja de cumplir una condicion.
Nota: el for es una funcion, ya que tiene el paréntesis alado y for es una palabra reservada(no podemos llamar una variable así)
*/
//se recomienda ponerle una i
for(let i = 0;  i < 10;  i++){
    console.log(`Numero ${i}`);
   //En estas llaves colocamos lo que se va a ejecutar de nuestro código 
   }
   /*Hasta ahora lo que llevamos de cómo funciona el for loop es...
   Quiero que mi código comience a repetirse desla la posición 0,
   pero quiero que comience a hacer eso sólo si (i)mi variable es menor a 10,
   Y quiero que vaya incrementando uno en uno.
   */
   
   
   /*El for loop consta de 3 partes.
   1.El inicializador, o en qué lugar va a empezar a repetir nuestro código 
   2.la condición que vamos a revisar.
   3.Incremento(de cuanto en cuanto se va a incrementar)*/
   
   
   
   for(let i = 0; i <= 10; i++){
       console.log(`Numeros ${i}`);
   }
   /*Entonces lo que pasa es...
   le estoy diciendo que inicie en la posición 0, que se repita mientras sea menor o igual a 10 y que vaya incrementando de
   uno en uno, por lo que llegando a 10 se va a parar de repetir y en el de más arriba se va a repetir hasta llegar al numero
   9, pork inicia en la posición 0 y si la condicion dice que se repita mientras sea menor a 10, va a parar de 
   repetirse en el numero 9*/
   
   for(let a = 0; a <= 10; a+= 2){
       console.log(`Numeros ${a}`);
   }
   /*Por ejemplo aquí le estamos diciendo que vaya de dos en dos(lo incrementamos de 2 en 2) hasta llegar a 10.*/
   
   
   /*Pregunta...
   En un for loop, cómo identificamos los números que son pares y los nones?
   */
   
   for(let b = 0; b <= 20; b++){
     if( b % 2 === 0 ){
       console.log(`El numero ${b} es par`);
     }else {
         console.log(`El numero ${b} es inpar`);
     }
   /*Ya que cómo tal sólo hay numeros pares e impares, además de los de punto décimal*/  
   }
   
   /*Checar los módulos
   Los módulos son amm 2 entre 2 es igual a 1, pero ese valor que queda viene siendo el valor del módulo
   si nosotros ponemos 3 entre 2 sigue siendo 1, pero ahí el módulo si viene siendo de 1
   
   Aqui le estamos diciendo es, el numero que deje 0, al ser dividido entre dos.
   
   O sea, si tenemos un número que al ser dividido entre dos, su módulo sea de 0, entonces imprime...
   `El numero ${b} es par`
   En el b quedan guardados los valores de las operaciones que hagamos, por eso lo mandamos a llamar ahí */
   
   
   
   /*Los for loops son muy útiles cuando tenemos un arreglo, dígamos un carrito de compras*/
   
   const carrito = [
   
       { nombre: 'Monitor de 20 pulgadas', precio: 500},
       { nombre: 'Television', precio: 100},
       { nombre: 'Tablet', precio: 200},
       { nombre: 'Audífonos', precio: 300},
       { nombre: 'Teclado', precio: 400},
       { nombre: 'Celular', precio: 700},
   
   ];
   /*Previamente habíamos visto que podemos acceder a los arreglos por su índice o bien, su posición que es lo mismo*/
   console.log(carrito[0]);//Y esto nos va a traer monitor de 20 pulgadas, ya que es la posición 0 de carrito
   
   /*Ahora un carrito es un buen ejemplo porque muchos van a entrar a una tienda virtual y no van a comprar nada, 
   otros van a comprar un artículo y muy pocos van a comprar 10 o más artículos. o sea que es muy variable*/
   
   /*Cómo vimos anteriormente, cuando tenemos un arreglo tenemos acceso a una propiedad llamada length, y eso nos va a
   decir cuánto mide nuestro carrito, o sea cuántos elementos hay en nuestro carrito. 
   
   En el caso de este carrito son 6, y podemos escribir un for loop que se ejecute el número de veces que hay elementos en ese
   carrito, no requerimos que se ejecute más veces porque ya no habría nada a qué acceder y 2do nuestro código debe de
   ejecutarse únicamente lo necesario para que tenga un buen performance.
   */
   
   for(let c = 0; c < carrito.length; c++){
     console.log(carrito[c].nombre);
   }
   
   /*For let c = 0; , o, vamos a inciar desde el primer elemento de nuestro carrito.(pork los arreglos inician en 0).
   
   c < carrito.length, o, y este código se va a ejecutar mientras el índice sea menor a lo que mida el carrito, cómo el
   arreglo inicia en 0 terminará en el 5, ya que si son 6 elementos van a ser 5 posiciones.
   
   c++, o, finalmente cómo necesitamos listar todos los elementos le ponemos c++ para irnos de 1 en 1.
   
   Finalmente le ponemos carrito en la posición i, y esa posición va a ir cambiando 0,1,2,3,4,5 y va a ir accediendo a los
   diferentes índices o posiciones de nuestro arreglo.
   
   Recordemos que si queremos acceder a uno en específico para eso tenemos la sintaxis de punto(.), si queremos acceder
   a nombre le ponemos .nombre
   
   */