//Parámetros y argumentos en funciones 


function sumar(a, b) { //a y b son parámetros
    console.log( a + b );
} 
sumar(2, 3);//2 y 3 son argumentos(los argumentos son los valores reales)

/*Aquí se le pasaron dos parámetros, (a y b), por lo que 2 tomará el lugar de a y 3 tomará el lugar de 3*/


//Ya nuestro algoritmo es un poco más inteligente, veámos
sumar(200, 10);//200 es el valor de a y 10 es el valor de b

sumar(100, 320); //100 es el valor de a y 320 es el valor de b

/*Cuándo nosotros entramos a twitter ya nos muestra nuestro usuario, foto y eso
pues seguramente tiene una funcion que toma los valores de la base de datos y lo
formatea para que se vea de esa forma*/

function saludar(nombre, apellido) {
 console.log(`Hola: ${nombre} ${apellido}`);
}
saludar( 'Gabriel', 'Rodríguez');
/*Recordemos que gabriel y rodríguez son los valores reales, por lo que son nuestros 
argumentos y nombre y aepllido son nuestros parámetros*/

/*Pero aqui nos encontramos con varias preguntas.
Qué pasa si sólo le pasamos un valor?
o si no le pasamos ningún valor?
1.El siguiente nos mostrará undefined
2.Nos mostrará `hola` undefined undefined.

Lo que podríamos hacer es que cuando no se le pase ningún argumento a la funcion
mostrar algunos valores por default 
*/