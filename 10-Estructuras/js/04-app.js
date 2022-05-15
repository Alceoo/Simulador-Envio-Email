//Mayor o igual y else o if 

/*Algunas veces podemos necesitar que si se cumple más de una condicion o revisar 
dos cosas, o sea que si se cumple una o se cumple la otra*/


const dinero = 300;
const totalApagar = 500;
const tarjeta = false;//Tenemos la tarjeta y está disponible

if (dinero >= totalApagar) {
    console.log('Si, si podemos pagar');
} else if (tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
} /*Aquí estamos revisando, si tenemos la tarjeta entonces se va a
ejecutar, si puedo pagar porque tengo la tarjeta*/
else {
    console.log('Dinero insuficiente');
}/*Lo que sucede es que primero va a pasar por la primera condicion que en este caso 
es if, después, si esa condicion no se cumple lo que pasa es que se sigue al else if
y si esa tampoco se cumple se sigue al else*/

/*Ahora, qué pasa si no traemos la tarjeta o no está disponible la tarjeta?

const dinero = 300;
const totalApagar = 500;
const tarjeta = false;

if(dinero >= totalApagar){
    console.log('Si, si podemos pagaR');
}else if(tarjeta){
    console.log('si puedo pagar porque la tarjeta está disponible')
} else {
    console.log('Fondos insuficientes');
}

Aqui lo que va a pasar es que al no ser igual la cantidad del total a pagar 
la primer condicional se va a ignorar, y si tarketa no está disponible ya que
tiene un valor de false, se va a ejecutar la última condicional, que en este caso
es un else('Fondos insuficientes);


Al tener un if y tenemos un else if va a ejecutar la primer condicion que se cumpla
siguiente, ejemplo:

let dinero = 1000;
let totalApagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalApagar) {
    console.log('Si, podemos pagar');
} else if (tarjeta){
  console.log('Si tengo una tarjeta);
}else if (cheque){
console.log(si puedo pagar porque tengo un cheque);
}else{
    console.log('Fondos Insuficientes);
}
hagamos varias cosas así, porque si cambian los valores de arriba, cambia toda nuestra
estructura y está bastante cool la vdd.
*/