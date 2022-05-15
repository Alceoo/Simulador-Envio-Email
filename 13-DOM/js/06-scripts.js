/*Modificar textos o imágenes con JS*/

/*Hasta ahora sólo hemos visto cómo seleccionar los elementos, pero
no hemos visto cómo modificar los mismos o hacerlos más interactivos con JS. veámos como hacerlo*/


/*Vamos a poner como ejemplo a el encabezado "Encuentra un hospedaje para
tus próximas vacaciones"

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

Aqui creámos una variable para guardar ese valor y poder
modificarlo, y aplicamos la clase por especificidad*/
//Cómo sólo hay un encabezado, utilizo query selector

/*Supongámos que queremos acceder al texto para modificarlo,
hay 3 formas de hacerlo, veámos

console.log(encabezado.innerText);//Si en el css -visivility: hidden, 
no lo a a encontrar.

console.log(encabezado.textContent);//Si lo va a encontrar

console.log(encabezado.innerHTML);//Se trae el html */


/*Hay una mejor opción a mi parecer, a esta opción se le llama 
encadenamiento, su mismo nombre lo dice, es básicamente poner el 
método si así se le puede llamar enfrente de el query selector, veámos*/

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

/*Ahora, qué podemos hacer con los selectores además de verlos en la
consola, ya que pocas veces los vamos a ver en la consola.

Pues podemos hacer lo siguiente*/

document.querySelector('.contenido-hero h1').textContent = 'Nuevo encabezado';

/*Aqui lo que hicimos fue decirle, quiero que de mi html me selecciones 
.contenido-hero en el h1 y quiero acceder al texto para modificarlo, 
ya que accedí al texto, eso va a ser igual a nuevo encabezado.

Y eso va a modificar el encabezado que tenemos.
*/
/*Ahora, eso lo podemos cambiar desde una variable externa, cómo por ejemplo

const nuevoHeading = 'Nuevo encabezado';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;*/

/*Nota, firefox developer edition nos va a dar más opciones para
usar con los selectores */


/*También podemos modificar una imagen 

const imagen = document.querySelector('.contenedor-cards .card:nth-child(2) img');
console.log(imagen);

Aqui lo que estamos haciendo es decir que queremos acceder al contenedor
de cards, en la tercera card, pero a su imagen*/

/*Aquí si queremos modificar el source de la imagen para que cambie la
imagen lo podemos hacer, no necesitariamos imprimir por consola, veámos*/


const imagen = document.querySelector('.contenedor-cards .card:nth-child(3) img');
imagen.src = 'img/hacer2.jpg';
/*Y en automático cambia, o sea que cambia en breve.

Todos los atributos que nos arroja la cosola de los selectores vamos a 
acceder a ellos con un src, porque es cómo si fuera un objeto por así 
decirlo.

Para hacerlo de manera momentanea también lo podemos hacer por medio
de la consola, sólo copiamos y pegamos el código*/

