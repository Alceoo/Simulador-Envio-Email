/*Generar HTML con JS*/

/*Otro tema muy importante cuando estamos trabajando con el DOM es la creación de html desde JS.
Cuando publicamos un tweet tenemos un textArea y a la hora que presionamos un botón se coloca en la 
lista de todos los tweets, de ahí la gente comienza a darle me gusta.

Así qué veámos cómo generar html desde JS*/

const nuevoEnlace = document.createElement('a')
/*Para crear un nuevo elemento hay varias maneras, una de ellas es con el 
createElement.

Si vamos a crear un div, se lo pasamos dentro de los paréntesis, aqui si 
puede ser en mayúsculas o en minúsculas, en mi caso le voy a pasar un enlace.

Y todos los enlaces podemos ver que tienen un texto, pues vamos a agregarle un texto a esos
enlaces*/
nuevoEnlace.textContent = 'Nuevo enlace';//Agregando el texto
//Aun no lo hemos agregado al DOM, ya que apenas estamos construyendo el nuevo enlace


//Añadiendo enlace
nuevoEnlace.href = '#';

//Añadiendo target, esto lo hacemos para demostrar que se le pueden agregar cuántas cosas necesitemos
nuevoEnlace.target = '_blank';

/*Ahora, una vez que hemos creado nuestro elemento ya nos toca mostrarlo y tenemos que definir
en donde queremos mostrarlo., en mi caso quiero seleccionarlo en la navegación.*/

//Seleccionando en la navegacion

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//appendChild es básicamente agregarle un hijo nuevo en la navegacion
//Ya sólo le decimos cuál será el nuevo hijo, en nuestro caso es pss el que acabamos de crear


/*Ahora, appendChild nos lo va a colocar al final de nuestros enlaces, si
nosotros queremos tener más control de dichos enlaces lo que vamos a hacer es 
usar otro método

navegacion.insertBefore(nuevoEnlace);

este requiere dos argumentos, porque cuando son los valores reales son arguemntos.
1.el elemento que queremos agregar(nuevoEnlace).
2.Donde deseamos mostrarlo(posición).

O sea es básicamente antes de qué posición
para saber las posiciones ya vimos que lo hacemos por consola para que nos 
muestre los índices o bien la posición de los nodos.

console.log(navegacion.children);
navegacion es el nombre de la constante que creamos, no su clase.

navegacion.insertBefore(nuevoEnlace, navegacion.children[1]);

Si no le pasamos el nodo de referencia que pss es el 2do argumento, nos va a marcar un error.*/







/*Ahora, vamos a un reto, tenemos que crear uno de los cards de forma dinámica.

Esto es lo que haríamos básicamente al consumir una api, es consumir los datos de algún 
lugar y los vamos a mostrar en el html, esto es lo que hacen librerias cómo REACT,VUE.JS 
Angular,etc*/

/*Entonces, podemos ver que cada card tiene 3 párrafos, cada uno tiene diferentes clases, 
uno tiene concierto, otro tiene título y otro tiene precio por persona.

Lo primero que haremos es crear 3 párrafos
*/

const parrafo1 = document.createElement('P');//Recordemos que el createElement es para eso, para crear nuevos elements
//Podemos ver que el primero es cómo una categoría, así que crearemos una categoría de tipo concierto
parrafo1.textContent = 'Concierto';
/*Vemso cómo esa parte tiene 2 claes(categoria y concierto) lo que le da el color es concierto y categoria le da un
poco de apariencia*/
parrafo1.classList.add('categoria','concierto');
//Aqui le estamos agregando esas dos clases.
console.log(parrafo1);//Ésto sólo lo pongo para verlo en consola jeje, que aveces me pierdo un poco


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de RAP';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$120, pa los compas gratis';
parrafo3.classList.add('precio');

/*Ahora, cada párrafo podemos ver que está dentro de un div con la clase de info
Entonces tenemos nuestros primeros 3 párrafos, nos hace falta el info y la imagen.
*/

//Crear div con la clase info
const info = document.createElement('div');/*Si podemos recordar al crear un elemento le tenemos que especificar
qué queremos crear, en este caso quiero crear un div, es por eso que le puse div, no importa si son minúsulas o
mayúsculas, por eso en la parte de arriba al crear un párrafo le puse P*/
info.classList.add('info');
//Aqui le estamos agregando la clase de info
console.log(info);

/*Una vez que hemos creado los 3 párrafos o los hemos seleccionado
ya los podemos agregar.*/

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
//Aqui ya lo agregamos, todo quedó bien, ya tenemos toda la parte de los textos, sólo nos queda la imagen

//Crear la imagen 

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Imagen de un concierto';

/*Ya tenemos la imagen, ahora lo único que nos hace falta es el div padre de la imagen y los textos jajaj
este div es el que tiene la clase de card*/

const card = document.createElement('div');
card.classList.add('card');
//ya tenemos creado el card

//Asignar imagen
card.appendChild(imagen);
//Asignar info
card.appendChild(info);

/*Alaverga, si funciono jsjajs, que nice, bueno bueno esto, está bastante chevere la vdd*/


console.log(card);


/*Tal vez digamos que se ve mucho código para eso, pero la mayoría de los frameworks de JS
ya hacen esto de forma automática, el problema es que mucha gente no sabe cómo se hace, así que
podrán saber mucho angular o React pero si no saben cómo crear elementos html desde js ahí se quedan.

Entonces tenemos que saber cómo funcionan nuestras herramientas para poder aspirar a un mejor puesto 
por ejemplo*/

//Finalmente tenemos que insertarlo, o sea decir en qué parte queremos nuestro elemento.


//INSERTAR EN EL HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');//queryselector pork ya es un elemento existente
contenedor.appendChild(card);





