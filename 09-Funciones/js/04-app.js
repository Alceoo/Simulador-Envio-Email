//Diferencias entre métodos y funciones
const numero1 = 20;
const numero2 = '20';

console.log( parseInt(numero2));/*Ésto es una funcion ya que
tenemos un nombre y un paréntesis(parseInt convierte strings en numeros
parsFloat lo hace igual, pero sirve también con decimales)*/

console.log(numero1.toString())
/*cuando primero esté el nombre de la variable y después esté un punto
y otro nombre, eso significa que es un método.(toString convierte numeros en
strings)*/

//Veámos qué pasa aquí

function sumar() {
    console.log( 2+2);
}
sumar();
/*Aqui definimos una funcion y la mandamos llamar, en el caso de parseInt
mandamos llamar la funcion, pero le pasamos un valor dentro,
a ese valor dentro de le conoce cómo argumento, mientras que la fucion
debería tomar un parametro*/ 