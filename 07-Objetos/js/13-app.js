//Object .keys .values y .entries

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true,
}
console.log(Object.keys(producto));
/*El método object keys nos va a retornar un arreglo con los keys del objeto.
Las llaves del objeto se obtienen con object keys. 
se utiliza por ejemplo si un objeto está vacío aquí nos va a mostrar pss qué 
información tiene.

Aqui tenemos tres propiedades, el nombre, el precio y el disponible, 
eso es lo que nos va a arrojar el object keys*/

//Object .values
console.log(Object.values(producto))
/*El object values nos va arrojar el valor de esas propiedades que nos da el 
object keys*/


//Object. entries
console.log(Object.entries(producto));

/*Si object.keys nos retorna las llaves(propiedades) y object.values nos retorna
los valores, object.entries nos retorna los dos, en pares pero lo veo más útil*/

