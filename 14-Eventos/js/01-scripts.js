/*Detectar cuando el html está listo

Cuando visitamos un sitio o una aplicación existe una gran cantidad de eventos que
están pasando, cuando le damos me gusta a una publicacion o cuando damos un retweet, 
ambos son eventos, compartir igual, scroll sobre los productos de amazon igual, cuando
estamos planeando nuestras próximas vacaciones en Airbnb y comenzamos a ver la galeria 
de imagenes, también son eventos.

Por lo tanto la sintaxis es de addEventListener*/

//document.addEventListener('DOMContentLoaded');//este siempre va a ser una funcion anónima
//esta es la sintaxis de eventos, es addEventListener, hay muchos eventos

console.log(1);
document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
});
console.log(3);

/*Ese evento espera a que el Documento esté listo, por lo que aquí el orden de
siempre no se cumple(de ejecutarse de arriba hacia abajo), por lo tanto el orden
de ejecución sería, 1, 3, 2*/

/*Ya que primero espera a que todas las imagénes, video etc,se descarguen y luego se
ejecuta lo que esté dentro del DOMContentLoaded*/


/*Y de esto se tratan los eventos básicamente, cuando sucede algo, se ejecuta un código
, en este caso, si el Documento está listo, se ejecuta el código automáticamente.
Algunas otras veces esto puede pasar cuando el usuario le de click a un
fomulario, a un boton o cuando de scroll.
*/