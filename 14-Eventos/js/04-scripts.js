/*Los eventos que suceden sobre los formularios*/

const formulario = document.querySelector('#formulario');//aqui nomas seleccionamos el id 

formulario.addEventListener('submit', (evt) =>{//funcion anonima con el evento submit
 evt.preventDefault(); /*A ver, nos costó trabajo esta parte pero por fin le entendimos
, lo que hace el prevent default es prevenir el comportamiento del navegador. 
Aqui previene el action que tiene el form que lo envía por method="POST" hacia la url 
del mismo action,  esa es la acción por default, o sea que es lo que se espera que haga 
un fomulario básicamente.

Ejemplo:

cuando damos click en un enlace, la action por default(defecto) es que habra ese mismo
enlace, es decir que me lleve a la página de "vender, registro, ayuda, iniciar sesión"
etc, son las acciones por default, un enlace tratará de abrir ese enlace, un formulario
va a tratar de mandar el formulario.

Pero si le ponemos .preventDefault vamos a prevenir la accion que realizaría ese elemento
por default, que podría ser envíar el formulario o entrar a un enlace.

En este caso nos sirve para realizar lo que requerimos.*/


 console.log(evt);
});
/*le pasamos evt porque es el evento que se presenta en la parte del boton 
buscar, que es el submit.*/

//aqui estamos creando un evento para formulario 


function validarFormulario (){
    evt.preventDefault();
    console.log('Buscando');
    console.log(evt.target.action);
}