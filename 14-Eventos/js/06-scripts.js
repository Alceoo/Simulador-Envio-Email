/*Que es el event bubbling */

/*Es cuando presionamos en un objeto pero ese evento se propaga por muchos otros lugares
dando resultados que nosotros no queremos.

Veámos esto más a detalle.
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

/*Lo que estoy haciendo aqui es seleccionar el primero, pero podemos ver que aqui
tenemos un párrafo con la clase de titulo, después un div con la clase de info que es
el padre de los hermanos y de titulo y después tenemos un div con card, que es 
también párrafo de info.
*/

//Aqui estamos registrando un evento
cardDiv.addEventListener('click', (e) => {//aqui le ponemos e del evento
  e.stopPropagation();/*Al igual que tenemos un método para frenar el por default igual 
  para detener la propagacion, o sea el event bubling*/
  console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

tituloDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

/*Entonces el Event bubling es cuando presionamos en un elemento con un evento y se 
disparan los demás eventos de los demás elementos */

/*Por ejemplo, aqui tengo 3 elementos con eventos por así decirlo,
Puedo ver que cuando presiono la imagen me sale el evento de que di click en el card
pero si le doy click al titulo me aparece que le di click a mis demás elementos
que comparten ese mismo evento de dar click.

Si le doy click afuera en la parte por así decirlo blanca igual me aparece que le di
click a todos mis elementos.

Ésto pasa por el event bubbling, es básicamente que se propaga el evento al padre
o incluso a los hijos.*/

/*Ya si le damos click en card no va a haber problema*/




