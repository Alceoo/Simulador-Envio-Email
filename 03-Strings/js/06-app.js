//Strings methods - repeat y split

const producto = 'Monitor de 20 pulgadas';

//.Repeat te va a permitir repetir una cadena de texto

const texto = 'en promocion '.repeat(2);
/*Si a .repeat le pasas un entero qué es lo que hace
pues se repite ese número de veces

Y si no le pasas un entero que es lo que hace
se redondea al número más cercano.

*/




console.log(texto);
/*Nota, para hacer los backticks lo que tenemos
que hacer es poner alt gr más la tecla que tiene
los backticks */
console.log(`${producto} ${texto} !!!`)






/*Split, dividir un string */
const actividades = 'estoy aprendiendo javascript moderno';

console.log(actividades.split(' '));
/*Aqui le tenemos que pasar qué es lo que va a buscar
dentro de ese string para divirlo y crear varias
partes de ese string.

NOTA: esto incluye espacios, si lo que le ponemos
dentro es un espacio nos va a dividir los espacios
 */

/*Utilidad
Imáginemos que tenemos un listado de hobbies

*/
const hobbies = 'Leer, improvisar, aprender a programar, maquetar sitios web, etc.';
console.log(hobbies.split(','));
//Con esto se divide por las comas que tenemos entre ellos


/*Ahora, cómo hace twiter para resaltar los hashtags, veamos.  */
const tweet = 'Aprendiendo javascript moderno #Código moderno con juan';
console.log(tweet.split('#'));
