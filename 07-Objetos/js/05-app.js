//Objetos dentro de objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30, 
    disponible: true,
    informacion: {
        peso: '10kg',
        meidida: '1metro',
        fabricacion: {
            pais: 'México',
            Ni: {
                NI: 'aqui va el número de identificacion',
            
            }
            
        }//esto sólo lo pongo para ver que tan complejo puede llegar a ser un objeto
   
    }

}
console.log(producto)

/*De igual manera si queremos acceder a el valor de informacion podemos hacerlo con la
sintaxis de punto*/
console.log(producto.informacion);
/*Si en todo caso queremos acceder a la variable peso podemos hacerlo de la siguiente manera

console.log(producto.informacion.peso);
*/