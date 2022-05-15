//String Methods - replace , slice, substring.

const producto = 'Monitor de 20 pulgadas'
console.log(producto);
console.log(producto.replace('pulgadas', '"'));

/*Aquí veremos cómo remplazar un texto de un string.
Si por ejemplo nos dicen que quieren que remplazemos un texto de un string o que
le añadamos las comillas dobles a (pulgadas), ya que así se representan.
Pues tendríamos que ir a la base de datos y modificar cada uno de ellos,
otra forma para no tener que hacer eso es con /.replace/
ejemplo: 
const producto = 'monitor de 20 pulgadas';
console.log(producto.replace('pulgadas', ' " '));

*NOTA: Un punto muy, muy pero que muy importante, no sólo 
copiar el código de los demás, tenemos que hallarle lógica 
al mismo código.

Aquí el código lo que dice es:
Crear un producto que se llame monitor de 20 pulgadas
imprimir en consola el valor del producto
imprimir en consola el valor del producto, modificado por el 
method replace que lo que hace éste método es decirle:

"Cambia el valor inicial de mi string, por el valor que 
sigue, separado con una cóma(,) obviamente, pero después
ponle este otro valor, y ese otro valor igual va en un string
"
si  queremos cambiar otro valor igual podríamos, ejemplo.

const tetas = 'tetotas grandotas peter';
console.log(tetas); aqui lo que hacemos es imprimir la const tetas
console.log(tetas.replace('tetotas', 'nalgotas'));
y ya con esto lo que va a imprimir será el valor de tetas, 
pero modificado por el método replace.
*/


//Método slice

/*Este método nos va a permitir cortar o mejor dicho,
extraer una parte de una cadena de texto. */
const tetas = 'Tetotas así de grandes peter';
console.log(tetas);
console.log(tetas.slice(0,10));

/*Aqui lo que hicimos básicamente fue dejar las letras de la uno a la diez
y que lo demás lo corte.
Si sólo le pasamos un valor,cómo por ejemplo
console.log(tetas.slice(8));
lo que va a pasar es que desde el inicio va a recorrer ocho letras y las demás ñas va a cortar.

*/


//Alternativa a slice == substring
const memes = 'No digas mamadas meriyein';
console.log(memes.substring(0,10));
//Funciona igual.

/* */


let Miakhalifa = 5;
let lanarhoades = 10;
if(Miakhalifa == lanarhoades){
    console.log('las dos son buenas actrices nopor');
} if(Miakhalifa < lanarhoades){
    console.log('mía khalifa es buena, pero lana es mejor');
}

/*Sitios cómo google, discord etc. lo que hacen al inicio de sesión
es ponerte tu perfil con la primera letra del usuario que registraste.
esto lo podemos lograr con un  */

const usuario = "Gabriel";
console.log(usuario.substring(0,1));
/*Ya que aqui le estamos diciendo que cree una constante que se llame Gabriel
pero que a la vez imprima en consola el usuario y le corte al string de la 
posición cero a la position one*/


/*Hay otra forma incluso más corta para hacer esto mismo, veámoslo.

console.log(usuario.charAt(0));
aqui la posicion 0 es la primera.
*/