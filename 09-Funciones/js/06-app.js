//Parámetros por default

/*Imaginemos que el usuario no nos paso algún datom pues en dado
caso tenemos que hacer algo y para eso están los parámetros por
defecto, veámos varios ejemplos*/ 


function saludar(nombre = 'Desconocido', apellido = 'No pusiste tú apellido'){ 
    console.log(`Hola: ${nombre} ${apellido}`);
}
saludar( );
/*Aqui en dado caso que no nos hayan pasado los datos que requerimos lo que
vamos a hacer es pasarle unos parámetros por deefecto, de ésta manera si el usuario
no llena los campos le mandaremos un mensaje*/


function entregar(name, numpacket){
    console.log(`Tu paquete es: ${name} numero identificador:  ${numpacket}`)
}
entregar('Monitor de 20 pulgadas', '123123134');

