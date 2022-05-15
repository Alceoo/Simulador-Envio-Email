/*query selector all*/

/*El query sleector all lo que hace es básicamente lo mismo que el query selector,
con la única diferencia de que con este si podemos seleccionar y tener varios elemntos
con el mismo id por así decirlo*/

const card = document.querySelectorAll('card');
console.log(card);
/*Y esto nos va a retornar todos los elementos que tangan la clase
de card, pero nos lo devuelve cómo si fuera un arreglo, digo cómo si fuera porque
a esta forma de por así decirlo, de listar los elementos.

Pero ahí dice NodeList, pero a todos estos elementos les vamos a llamar nodos
*/

//Nota: no llamar a los ids igual, sólo puede haber uno en un documento


//Si mandamos llamar uno que no existe igual me genera un array vacío
