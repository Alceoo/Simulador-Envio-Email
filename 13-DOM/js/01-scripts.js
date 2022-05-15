/*Qué es el DOM- Document object Model

Puede ser medio confusa la definicion sobre lo que es el DOM.

Es muy sencillo lo que es el DOM perse.

Ahora, supongamos que tenemos una página web, un archivo, html y a ese archivo html javascript se refiere a el cómo 
Document. El document es el objeto principal del DOM y también tenemos algo llamado root, que también es el html
y de ahí se divide en dos partes, cómo en el html igual que se divide en el head(donde cargamos los estilos, 
importamos cosas, mandamos llamar a los bots etc.), y el body(donde colocamos toda la estructura).

El DOM se refiere a estas etiquetas cómo elementos, entre estas mismas etiquetas van a tener etiquetas hijas
que por ejemplo, la etiqueta hija del head puede ser title, ya que aqui se pone le titulo de la página, pero sigue 
yendo dentro de un head.

Del otro lado en el body, es donde tenemos más elementos que son pss las etiquetas hijas del mismo body, pero 
aquí son muchos más elementos, por lo que el body podría tener bien un elemento nav, un h1, a su vez esta 
navegación tiene un elemento a de un enlace, cada enlace tiene un texto que puede decir "nosotros".

Entre los atributos del enlace podría tener un href que es el link perse, y una clase tmabién.
Dentro del h1 puede tener un texto, entre sus atributos podría tener un id, también un class y así

El dom básicamente son todos los elementos de tú página web, es amm cómo una representación gráfica de arbol en
donde podemos ir expandiendo y a la vez conociendo los diferentes elementos de nuestra página web, incluyendo
etiquetas y atributos.

Una característica del DOM es que podemos ir seleccionado digámos el h1, irnos al texto
y modificarlo, o sea tenemos que seleccionar el elemento y sobre el podemos realizar operaciones

O también de la navegación me puedo recorrer hacia el body y de ahí buscar otros elementos*/

let elemento;

//Lo más importante en el DOM es que tenemos acceso al document(es un objeto) es todo el html
/*O sea que siempre vamos a hacer referencia para seleccionar elementos con el objeto de 
document*/
elemento = document;
elemento = document.all;/*Esto es para que nos diga que nos enseñe todos los elementos 
que confoman el html de nuestro proyecto*/

elemento = document.head;
/*Head se va a referir a la parte superior de nuestro elemento, es decir al head jaja
o sea que estoy mandando llamar al head, puedo hacer lo mismo con el body*/

elemento = document.body;
/*Aquí estamos accediendo al body, pero también vemos que pasa algo medio raro, si 
refresco mucho la página cómo que se guarda el elemento en un objeto raro */

elemento = document.domain; 
//Aqui vemos que también podemos acceder al dominio
elemento = document.forms;
/*También podemos acceder a los formularios dentro de esto, aqui nos dice cuántos 
formularios tiene mi proyecto, esto nos retorna los elementos cómo si fueran
arreglos, pero a esto se le llama htmlcollection.
Al parecer ya comienzo a comprender, agarramos la palabra document cómo base 
para entrar a los distintos elementos*/


/*Algo de lo que podemos acceder en los formularios es si expandimos el formulario,
aqui nos viene mucha informacion sobre el formulario, cómo es una collection de html
que pfff yo lo veo igual que un arreglo, pues podemos acceder a esa información cómo 
en la de los arreglos, con su posición. ejemplo: */

elemento =  document.forms[0];
//Aqui estamos accediendo al formulario
elemento =  document.forms[0].id;
//Aqui estamos accediendo al id del formulario 
elemento =  document.forms[0].method;
//Aquí estamos accediendo al metodo del formulario, que en este caso es POST.
elemento =  document.forms[0].classList;
//Le estamos diciendo que nos de las clases que tiene ese formulario

elemento =  document.forms[0].action;
//Aqui estamos accediendo a e action donde dice buscador
/*Estamos viendo que podemos acceder a cualquier cosa de nuestro documento en javascript*/

/*También podemos acceder a los links, ejemplo*/
elemento = document.links;
//Aquí nos dice cuántos links tenemos(aqui tenemos 25).
elemento = document.links[4];
//De esta manera accedemos a los link, con su posición.
/*Ahora, nosotros siempre vamos a ver cómo hacer las cosas más rápidas y entendibles,
por lo que veremos cómo hacer que nos retorne la clase */

elemento =  document.links[4].classList;
//Ésto me va a retornar las clases que tiene, pero en forma de arreglo.
elemento =  document.links[4].className;
/*Pero este nos va a retornar las clases que tiene en forma de string y aún más corto*/

/*Veámos qué otras cosas podemos seleccionar*/

elemento = document.images;
/*Ésto en automático me va a lanzar todas las imágenes que tenemos (16),
de igual manera podemos seleccionar una en específico*/

//IGUAL PODEMOS SELECCIONAR LOS SCRIPTS

elemento = document.scripts;
/*Aquí nos arroja 12 elementos cuándo enrealidad son 11, pero esto pasa
porque está agregando una etiqueta en alguna parte superior por una extensión
instalada */

/*Tenemos varias formas en las que podemos seleccionar nuestros elementos, 
pero también podemos ver que todas hacen referencia al Document, ya que
todo el contenido reside en el document y podemos hacer referencia a elementos
del html, a imágenes, a scripts o a hojas de estilo(css).

Por lo que podemos tener control sobre todo nuestro documento o en el DOM
*/

console.log(elemento);










