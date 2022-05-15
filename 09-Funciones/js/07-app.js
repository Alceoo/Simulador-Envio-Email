/*Cómo se comunican las funciones*/
/*Por el momento sólo hemos creado una funcion y la hemos mandado llamar,
pero en la vidad real nuestros proyectos van a tener muchísimas funciones
Así que veámos cómo se van a comunicar las funciones entre si*/ 
iniciarApp();
function iniciarApp(){
    console.log('Iniciando app...');
     segundaFunction();
/*Se va a iniciar nuestra app, y una vez que finalice va a mandar llamar
a la otra funcion, se van encadenando las funciones por así decirlo.*/
}


function segundaFunction() {
    console.log('Desde la 2da funcion');
    usuarioAutenticado('gabriel');
    /* */
}
/*Bien podríamos mandar llamar la otra funcion desde ahí mismo, abajito, pero
Una buena práctica para mandar llamar las funciones es mandarla llamar desde 
otra funcion, por ejemplo*/ 

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}
/*Aqui lo que esta pasando básicamente es que estamos mandando llamar nuestra
funcio usuarioAutenticado en la funcion de segunda funcion, si no le ponemos 
parámetros lo que pasará será que no nos arrojará nada a menos que le pongamos 
los parámetros y los mandemos llamar, además de ponerle un valor a usuarioAutenticado
cómo argumento real.
*/