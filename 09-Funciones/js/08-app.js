/*Ejemplos de algunas funciones que se pasan valores

Actualmente hemos tenido funciones que envian datos a la consola


*/
function sumar(a,b){
    console.log(a + b);
/*Aqui mandamos llamar la funcion y realiza la operacion y ya se acabo, pero si yo quisiera hacer algo con ese
resultado, cómo le haría? , pues en lugar de un console log le pondría un return*/
}
sumar(1,2);//aqui tenemos 3

function follar(culo,tetas) {
    return culo + tetas;
}
follar('grande','enormes');
/*Cuando tenemos una funcion que retorna algo, tenemos que tener otra variable  a la 
cual se le asigne el valor retornado, ya que así no nos devuelve nada*/


/*El resultado final es éste de acá abajo*/

function tomar(liquido, envase) {
    return liquido + envase;
}
const saciarSed = tomar('Té helado en: ','Jarra');
/*Obviamente tenemos que mandar llamar la segunda variable, ya que en esa se guardaron 
los datos*/
console.log(saciarSed);


//EJEMPLO MÁS AVANZADO
let total = 0; 
//Declarar una variable con un valor de 0
function agregarCarrito(precio) {
return total += precio;     
}
/*crear una funcion con el parámetro precio y la queremos retornar, por lo que le
estamos diciendo retorname el valor de total(0), más el precio que el valor del 
parámetro precio será el que nosotros le asignemos después de los paréntesis del 
nombre de la misma funcion*/
function calcularImpuesto(total){
   return total * 1.16;
}/*Ahora, cada país tiene un impuesto, en méxico es del 16% si no mal recuerdo,
lo que estamos haciendo es agregarle el impuesto multiplicando el valor de total
por 1.16, ya que de esta manera mantenemos el valor de total y a la vez le sumamos
ese .16% */




total = agregarCarrito(300);/*si genero más valores para total se van a ir sumando, ya 
que esa es la orden que tiene precio*/
total = agregarCarrito(200);
total = agregarCarrito(150);


const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar} `)



/*éste es un buen ejemplo de una función que retorna un valor, estamos retornándole
sobre el total porque después más adelante vamos a hacer algo con ese valor, 
de otra forma lo más seguro es que baste con realizar una función en ese valor y ya esté
*/


console.log(total);