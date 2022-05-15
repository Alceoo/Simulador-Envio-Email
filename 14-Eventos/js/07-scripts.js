/*Prevenir el event bubbling con un delegation*/

const carDiv = document.querySelector('.card');
/*Recordemos que esto solo selecciona el primer card, sin embargo dentro del mismo card
tenemos varios elementos, tenemos una imagen, tenemos el espacio de info y tenemos
el titulo.

Cómo saber a qué le estamos dando click?
Pues muy fácil, le podemos pasar el evento(e)
y enviar a la consola(en este caso que no estamos haciendo pruebas reales, poro
    sino lo haríamos directamente a la variable con el argumento)
*/

carDiv.addEventListener('click', (e) => {
    console.log(e.target.classList);//el target nos dice a qué elemento le estamos dando click.
});
/*Ahora, cómo vamos a escribir un código que por ejemplo reaccione diferente a info
o a concierto o al precio?

R= Con el classlist nos va a decir cuales son las clases de lo que estamos presionando.
*/

carDiv.addEventListener('click', (e) =>{
   if(e.target.classList.contains('titulo')){
    console.log('Diste click en titulo');
   }
   if(e.target.classList.contains('precio')){
    console.log('Diste click en el precio ');
   }
   if(e.target.classList.contains('card')){
    console.log('Diste click en la card');
   }
   
});

