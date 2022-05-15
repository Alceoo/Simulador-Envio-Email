/*Break y continue en un for loop*/

/*Break: esta palabra va a cortar la ejecución de un for loop. pregunta para obtener un trabajo
Continue: Nos va a permitir interceptar un elemento, identificarlo y continuar con la ejecución

for(let i = 0; i <= 10; i++){
   if( i === 5){
    console.log('Este es el 5');
   break;
}
    console.log(`Numero: ${i}`);
}

Aqui lo que pasa es que si, se detiene en el 5, pero también lo que haces es seguir ejecutando el for
y no queremos eso, es por ello que le colocamos un break al final de la sentencia, para que no se siga ejecutando 
el for, sino para que pare donde le dijimos*/


//Ahora, si queremos que se termine de ejecutar en la posición 5, pero que en lugar de que sea un 5 quiero la palabra 5?
/*
for(let i = 0; i <= 10; i++){
    if( i === 5){
     console.log('Cinco');
     break;
 }
     console.log(`Numero: ${i}`);
}
Pues bastante sencillo, lo único que tenemos que hacer es cambiar el string, ya que el if se sigue ejecutando y parando 
en la posición 5, pero lo que se imprima es lo que nosotros queramos, por lo que le quito la variable i y le pongo
la palabra 5*/


/*Ahora, veámos el caso de continue

for(let i = 0; i < 10; i++){
   if(i === 5){
     console.log('Cinco');
     continue; 
    }
   console.log(`Numero: ${i}`);
}
Ahora, lo que podemos ver aquí es lo siguiente.

Le estamos diciendo a nuestro for que i, inicie en la posición 0, que mientras sea menor a 10 se vaya incrementando 
de uno en uno(que vaya por cada punto de la condicion, ya sea número un arreglo o lo que sea).
Ahora, lo siguiente que le estamos diciendo es que si i, es igual a 5(que en algún punto va a ser igual ya que pss eso
le definimos en el for), imprima la palabra "cinco".

Ahora, lo que estamos viendo es que para en la posición 5, pero no cómo tal, sino que el 5 sigue después de nuestra
declaración y es para eso que sirve continue, para que enverdad tome la posición que le estamos dando y continue 
en esa misma posición que le estamos dando.
Pero no detiene la ejecución del for loop.
*/

//Y en qué casos podemos llegar a utilizar el continue o el break?


const carrito = [

    { nombre: 'Monitor de 20 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},//le agregamos esto para usarlo más adelante
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},

];
/*Queremos decirle al wey que uno de los productos que agrego al carrito tiene descuento, cómo lo haríamos? pues con un for*/

for(let a = 0; a < carrito.length; a++){
    if(carrito[a].descuento == true){
console.log(`Èl articulo ${carrito[a].nombre} tiene descuento`)/*Aqui le estamos inyectando la variable carrito en la posición i(la variable).nombre, tiene descuento*/
/*Aqui lo que pasa es cómo si se creara una nueva propiedad, pero lo que queremos es que tome el lugar de tablet
para eso le ponemos el continue*/

continue;

    }
/*Aqui le estamos diciendo, si carrito en la posición a, tiene un descuento(no lo tenemos que comparar con true, ya que
se toma por implícito que es true, pero lo pongo de todos modos para entender a más profundidad), que descuento es la propiedad
que le pusimos al objeto dentro del arreglo, si tiene descuento entonces imprime

el artículo, carrito en la posición a que es la que guarda los valores que tenemos, .nombre, para acceder al nombre, tiene
descuento, si esa condicion se cumple, ejecuta esta linea*/   

    console.log(carrito[a].nombre);
}

/*cómo identificamos que un elemento tiene un descuento? porque puede ser uno u otro, ya que si viene de una 
base de datos por ende esto va a ser dinámico.*/