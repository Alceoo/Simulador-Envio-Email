/*Eventos sobre los imputs o en el teclado*/

/*Cuando escribimos en un formulario que vamos llenando podemos tener funciones o 
código que se ejecuten. ejemplo:

twitter: En twitter nos aparece un contador de cuántas palabras llevamos, o también 
muchos sitios web nos van entregando validacion, si colocamos un email, nos dice que 
ese email no es valido*/

const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keydown', () =>{//esto siempre va a ser una funcion, anonima o no anonima
console.log('escribiendo...');
});
//Éste se ejecuta cuando presionamos una tecla
/*
busqueda.addEventListener('keyup', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('escribiendo...');
});//este se ejecuta cuando presionamos, pero soltamos la tecla


busqueda.addEventListener('blur', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('dejando el input...');
});
/*Éste blur es más común en los imputs, ya que se ejecuta no cuando escribimos sobre
el input, si no cuándo salimos del input, ahí es cuando se ejecuta.

busqueda.addEventListener('copy', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('copiando...');
});//se ejecuta cuando estamos copiando

busqueda.addEventListener('paste', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('pegando...');
});//este cuando pasan texto que copiaron.

busqueda.addEventListener('cut', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('cortando...');
});//este cuando cortan se ejecuta, cuando se pone en azul básicamente antes de copiar


busqueda.addEventListener('input', () =>{//esto siempre va a ser una funcion, anonima o no anonima
    console.log('escribiendo...');
});
*/

/*INPUT es de los más utilizados, ya que se ejecuta cuando cortas, cuando pegas, cuando
pasas, cuando escribes, cuando sueltas, cuando realizas cualquiera de los eventos 
de arriba jajaj 
Salvo del blur, este es aparte.*/


/*Ahora, podemos ver que me marca cuando estamos escribiendo, pero no podemos ver lo que el
usuario está escribiendo, para poder enviarlo a una base de datos, a un web service o 
simplemente validar lo que está escribiendo el usuario.
//En ese paréntesis le podemos pasar el evento que está pasando
 
busqueda.addEventListener('input', (evt) =>{
    console.log(evt);//este evento lo podemos llamar cómo queramos 
});

Y cuando comienzo a escribir todo lo que podemos ver por consola es 
el evento que se está presentando, nos va a decir cosas cómo, en qué lugar
se está presentando , en qué formulario, en qué tipo de elemento estamos escribiendo
también el target etc.

busqueda.addEventListener('input', (evt) =>{
    console.log(evt.target.value);//este evento lo podemos llamar cómo queramos 
});

Aqui le podemos pasar .type despues de el evento para que nos diga sobre qué elemento
estamos trabajando, en este caso es de tipo input.

Si le ponemos .target eso nos va a decir, qué input en específico estamos escribiendo

AHORAA, si queremos saber lo que estamos escribiendo podemos ponerle e.target.value
*/


/*esto es una excelente manera de validar algo, por ejemplo.*/

busqueda.addEventListener('input', (evt) => {
    if(evt.target.value === ''){
      console.log('Fallo la validacion');
    }
    
})
