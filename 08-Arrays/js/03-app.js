//Recorrer un Array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
/*Con esto lo que hacemos es decirle que ejecute el arreglo meses, pero el valor de la posición uno*/
console.table(meses[2]);
/*Cuando vsitamos el sitio web de amazon o alguna página de ecomerce, y comenzamos a agregar 
elementos al carrito de compras, nos lista los elementos que tenemos en el carrito.
¿Pues cómo accedemos a todos estos elementos a la vez?
Porque pueden haber personas que no tengan nada en el carrito y pueden haber otras tantas que
puedan tener muchísimas cosas en el carrito
la pregunta es, cómo hacemos para recorrer un arreglo?, que su distancia que su tamaño puede ser 
variable.*/


/*Lo primero que tenemos que hacer es conocer cuánto mide el arreglo*/

console.log(meses.length);
/*Para conocer cuánto mide un arreglo tenemos la propiedad length, esta nos sirve justo para eso
jaja creo la vi en el módulo uno de variables, o si no fue en el de strings, es uno de los pocos
métodos que no se les puede asignar un valor dentro de paréntesis*/

/*De esta forma podemos escribir un código que se ejecute sólo la cantidad de veces
que hay en un arreglo.*/





//Recorrer un arreglo
//For es un iterador
for(let i = 0; i < meses.length; i++ ) { 
  console.log(meses[i]);
/*Al console.log se le pone que se quiere que la posición sea dimámica
por lo que le ponemos meses en la posición i, para que vaya cambiando 
a la posicion uno, dos tres etc y me evito estar accediendo de uno en uno
*/ 
}
/*Lo que quiere decir éste código es:
quiero que la variable i inicie en la position 0 y que se repita i siempre y cuándo sea menor
al numero de elementos que hay en el arreglo meses, en cuánto cambien los elementos a su vez 
cambiará esto, ya que la posicion la medimos con .lenght.

Ahora, el let se pone porque si le ponemos un const el i inicial va a ir 
incrementando una vez y otra vez cada que se ejecute esa misma funcion.

Es importante que el código se ejecute siempre y cuándo sea menor al tamaño
del arreglo, vemos que tenemos 6 elementos en el arreglo, pero las posiciones 
de estos comienzan en 0, por lo que tiene que ser menor.

Por último i se convierte en una posicion

*/



/*El foor loop es una funcion que tiene tres partes.
1.Valor donde va a iniciar   //desde enero por ejemplo, que es la posición 0 de nuestro arreglo
2.Cuántas veces quieres que se ejecute el código //No podemos decirle que corra 100 veces
ya que eso consumuría memoria a lo wey, a menos que tenga en el carrito de compras 100productos
por ejemplo.


(Sólo queremos que se ejecute la cantidad de veces que sea necesaria, que va a ser la misma que
él número de elementos que hay en el arreglo, si de esa forma alguien continúa agregando meses
pues va a seguir detectando el tamaño del arreglo y va a seguir corriendo el código todas esas 
veces)
3.


*/
