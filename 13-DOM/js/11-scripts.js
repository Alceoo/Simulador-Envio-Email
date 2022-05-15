/*En este capitulo estaremos finalizando con lo que es el DOM, veremos lo que se puede hacer
con la siguiente carpeta que son los eventos, lo que vamos a construir aquí es un boton, que 
sirven cuando presionamos un boton y se despliega el menu del footer.*/

/*Podemos ver que al presionar el boton, se muestra o se oculta el footer, pues lo
primero que tenemos que hacer es seleccionar ese boton.
éste boton tiene la clase de btn-flotante.*/

const btnFlotante = document.querySelector('.btn-flotante');
//Si recordamos lo que se mueve hacia arriba es el footer
const footer = document.querySelector('.footer');
//Aqui ponemos el footer para tenerlo  cómo referencia 

/*Ahora, cuando yo doy click en el boton, se ejecuta una funcion, y a esto se le conoce
cómo evento, es decir.

"este boton va a esperar a que suceda algo en la pantalla y una vez que suceda va a 
reaccionar", y la forma en la que le decimos porque tiene que esperar se le llama 
evento. con un método que se llama addEventListener


btnFlotante.addEventListener('click', () =>{
  console.log(`Diste click en el boton`);
} );

Entonces lo que estoy diciendo es.
éste boton va a esperar a que alguien le de click, y si alguien le da click va a 
ejecutar un código, por lo tanto queda...

Y el primer argumento que va a tomar ese evento va a ser de un click
Puede ser cómo una funcion declarada, es decir function nombre(){

}
o también puede ser lo que se conoce como una funcion anonima, las funciones anonimas
son las que no tienen nombre, pero se declaran como un arrow function. en este caso es 
la 2da.

Entonces lo que le estamos diciendo es que si alguien le da click al btn-flotante,
va a ejecutar esta funcion.
Entonces al abrir la consola no pasa nada hasta que le damos click al boton.*/


/*Ahora a mucha gente le gusta tenerlo un poco más separado, veámos que rollo con 
esto.

btnFlotante.addEventListener('click', mostrarOcultarFooter);
function mostrarOcultarFooter(){

}

Y lógicamente lo que mueve esa clase de arriba hacia abajo es una clase, una 
clase de css jajaj

Y esa clase se llama activo, entonces podemos ver que tenemos un bottom que lo 
mueve hacia abajo, y cuando está en activo el bottom se mueve hacia arriba.

Entonces tenemos que agregar y quitar la clase de activo.

Al footer se la tenemos que agregar o quitar dependiendo de lo que estemos realizando
y también el boton flotante.

Iniciemos con el footer

btnFlotante.addEventListener('click', mostrarOcultarFooter);
function mostrarOcultarFooter(){
  footer.classList.add('activo');//aqui le estamos agregando la clase que ya existe
 
  Ahora agregando la clase de activo ya tenemos el footer arriba, pero ahora lo tenemos
que quitar al presionar de nuevo el footer 
}*/


/*Podríamos commprobar si la clase activo está, si está significa que se está 
mostrando el footer, una forma en que podemos verificar si algo existe o no
es con un if*/

//Aqui es donde entran en juego los if, veámos

btnFlotante.addEventListener('click', mostrarOcultarFooter);
function mostrarOcultarFooter (){//classList nos va a dar las clases que tenemos
    if(footer.classList.contains('activo')){//con un if y un classList podemos usar .contain
     footer.classList.remove('activo');
     this.classList.remove('activo');
     this.classList.remove('activo');//
     this.textContent = 'Idioma y Moneda'//Con esto lo vuelvo a poner como antes
    }else{
    footer.classList.add('activo');
    this.classList.add('activo');
    this.textContent = 'Cerrar'//peo lo que pasa aqui es que se queda el cerrar después
    }
}
/*.contains va a verificar si un elemento tiene o no tiene una clase, si tiene la clase
de activo significa que el elemento se está viendo, por lo tanto, si ya tiene la clase
de activo y le volvemos a dar click, significa que la quiero quitar.

Pero si yo le doy click vemos que aparece, pero si le volvemos a dar click vemos que
se quita y se vuelve a poner, esto pasa porque no le hemos colocado un else.

Entonces, lo que hace este código es...

La primera vez que demos click no va a tener la clase de activo, por lo tanto cae en 
el else, y se le agrega la clase de activo que tiene las propiedades de css para
que se muestre mi estilo, por lo tanto si le doy click al caer en el else
se va a mostrar mi estilo.

La 2da vez, ya va a tener la clase de activo por lo que se va a cumplir el if y va 
a remover la clase de activo, por lo que va a remover a su vez los estilos por defecto
*/
//Lo mismo sería para los estilos del boton flotante


/*Ahora, btnFlotante es al variable de arriba, pero lo que dispara la funcion
es pss ese mismo boton flotante, ese mismo boton flotante es el que está 
ejecutando esa funcion.
Por lo tanto en lugar de ponerle btnFlotante podríamos ponerle (this),
This es una forma de acceder a las mismas propiedades de un objeto en los métodos, 
pero también this cuando damos click y ejecutamos una funcion hace referencia a lo que
mando llamar esa funcion.


btnFlotante.addEventListener('click', mostrarOcultarFooter);
function mostrarOcultarFooter (){//classList nos va a dar las clases que tenemos
    if(footer.classList.contains('activo')){//con un if y un classList podemos usar .contain
     footer.classList.remove('activo');
     this.classList.remove('activo');
    }else{
    footer.classList.add('activo');
    this.classList.add('activo');
    }
}
//Así quedaría más limpio el código
*/

//Checar lo de la clase activo jajaj