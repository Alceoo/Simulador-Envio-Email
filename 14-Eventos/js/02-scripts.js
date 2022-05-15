//Eventos con el mouse

const navegacion = document.querySelector('.navegacion');

/*Primero tenemos un selector y luego le vamos a registrar un evento*/
navegacion.addEventListener('mouseout', ()=>{//lo que esta en comillas es el evento que esperamos
   console.log('estas saliendo de navegacion');
   navegacion.style.backgroundColor = 'transparent';
});

/*Aqui sólo lo puse como ejemplo, el mouseenter se registra desde que está entrando
por así decirlo al area de nuestro elemento, o mejor dicho al perímetro.

Aqui lo que estamos haciendo es...

registrar nuestro evento navegacion con addEventListener, ponerle el evento que
estamos esperando y crear una funcion para que se ejecute en dado caso que pase dicho
evento.

O sea que estamos esperando a que suceda algo para ejecutar el código.

1.Click es un evento si le das click a un elemento
2.mouseenter pasa cuando llegas al elemento, no si le das click,no, sólo con llegar
3.mouseout es lo contrario, se ejecuta cuando sales del elemento.*/

//Podemos tener multiples eventlistener de la misma variable.
navegacion.addEventListener('mouseenter', () => {
    console.log('Estas entrando a navegacion');
    navegacion.style.backgroundColor = 'white';
});


navegacion.addEventListener('mousedown', () => {
    console.log('presionaste la navegacion');
    navegacion.style.backgroundColor = 'white';
});//Este quiere decir cuando presionas, es casi lo mismo que un click.

navegacion.addEventListener('mouseup', () => {
    console.log('Estas dejando de presionar la nevegacion');
    navegacion.style.backgroundColor = 'white';
});//este se ejecuta cuando damos click pero al momento de soltar el click se ejecuta



navegacion.addEventListener('dblclick', () => {
    console.log('Estas presionando doble vez el elemento');
    navegacion.style.backgroundColor = 'white';
});
/*Éste todos lo conocen, cuando abrimos un archivo en nuestra compu o algo así
presionamos 2 veces para que se ejecute, si se presiona 2 veces se ejecuta
*/

