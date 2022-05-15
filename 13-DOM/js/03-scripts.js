//En este video veremos cómo seleccionar elementos con un ID

/*Los id no son reutilizables, esto quiere decir que sólo podemos utilizar uno por documento*/

const formulario = document.getElementById('formulario'); 

console.log(formulario);


const noExiste = document.getElementById('no-existe');
console.log(noExiste);

/*A diferencia de el otro método que nos retorna una collection de html en 
este caso lo que nos retorna es un null*/


/*Nota: Es recomendable sólo usar los id en un elemento, ya que si los usamos en 
más elementos en automático lo que va a pasar será qué el método de selección
nos traerá el primero que encuentre ignorando al otro
*/

/*Usualmente ya no se usa tan seguido el método de selección por id ni por clase, 
sino que se usa una que se llama query selector*/






