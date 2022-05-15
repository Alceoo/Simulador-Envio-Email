//Switch para evaluar multiples condiciones

/*Cuándo tenemos muchas condiciones que tenemos que revisar lo mejor es hacerlo
con un switch, ya que lo podríamos hacer con un else if y más, pero sería algo confuso

El switch y case se utilizan para dar muchas condiciones, usualmente los usuarios 
están pendejos, por lo que nosotros tenemos que ver esas tonterias que ellos hacen
para después 

.*/

//Switch case

const metododePago = 'cheque';

//en lugar de un if se coloca un switch

switch (metododePago){
//aqui va la variable que queremos evaluar        

case 'tarjeta':
    console.log(`El metodo de pago es: ${metododePago}`); 
    break;
case 'efectivo':
     console.log(`El metodo de pago es: ${metododePago}`);
/*Lo que hace este switch es que va a revisar la variable metododePago, va a
comprobarla y en caso de que su valor sea efectivo va a ejecutar esa línea */
    break;    
 
 
    case 'cheque':/*No sólo pueden tener un console.log, también funciones y demás */
     pagar();
     break; 

  
  
  
  
     default: 
   console.log('Aun no has seleccionado un método de pago o ')
/*El default lo que hace es actuar si ninuna de la scondiciones se cumple, si alguna 
se cumple pss ya no se ejecuta el default, cuándo utilizamos switch siepre tenemos que 
pone el valor default */
}
/*Los cases lo que hacen es decir, en caso de que el valor sea tal, ejecuta esto,
literalmente tenemos que poner todos los casos posibles para esa variable.
A cada case se le tiene que pasar un break, para que este termine la condicion.*/


function pagar() {
    console.log('Pagando...')
}