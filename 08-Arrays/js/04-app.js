//Agregar nuevos valores a un array

/*Al igual que en los objetos en los arrays a veces también se requiere que agreguemos valores después
de haberse declarado, uno nunca sabe, pero el caso es que si se puede hacer */


const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

//Así accedemos al arreglo meses en la posición 0 y le reasignamos el valor
meses[0] = 'Nuevo mes en lugar de enero';
/*¿En qué valores una variable declarada en const se puede modificar sus valores?
R= en objetos y en arreglos,a menos que
selles o congeles el objeto, pero en arreglos no se puede sellar ni congelar*/

/*Ahora, si nosotros lo que hacemos es esto*/
meses[7] = 'Último mes'; 
/*Cómo tal no existe un septimo elemento, por lo que tampoco existe un índice con posición 7,
lo que pasa aquí es que nosotros ya estamos creando otro valor y por lo tanto también se crea 
otro índice.
Aqui tenemos hasta la posición 6 y aquí creamos la 7, pero si queremos crear la posición 10 y 
sólo hay 6 lo normal sería pensar que si nos puede crear las posiciones que faltan(en otros
lenguajes si pasa), cosa que en javascript no pasa, lo que hace es saltar del 6 al 10.
*/

console.table(meses);