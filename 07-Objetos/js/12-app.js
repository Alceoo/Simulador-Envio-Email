//Object constructor 
/*Forma de crear objetos con la forma de object constructor */



//A esta forma de crear objetos se le llama object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 20,
    disponible: true,
}
console.log(producto);

//Object constructor o segunda manera de crear un objeto

function Producto(nombre, precio) { 
    this.nombre = nombre; 
    this.precio = precio;
    this.disponible = true;
/*Recordemos que la palabra this permite que no se mezclen varios valores, por lo tanto si yo estoy
creando nuevos productos quiero que se asocien a ese producto. este es un ejemplo de ello

Aqui lo que dice es:
this.nombre será igual al nombre que le vamos a pasar.
this.precio, será igual al precio que le vamos a pasar.
this.disponible, será igual a true por default.
*/  
}


const producto2 = new Producto('Monitor de 24 pulgadas', 399);
/*Ésta sintaxis es muy parecida a cómo se podrían crean los new strings, los new boolean etc.

nosotros podemos crear por así decirlo nuestros tipos de dato.
Aquí creamos new Producto y vemos que le tenemos que pasar un nombre y un precio 
*/
console.log(producto2);

const producto3 = new Producto('Televisión', 100);
console.log(producto3);

