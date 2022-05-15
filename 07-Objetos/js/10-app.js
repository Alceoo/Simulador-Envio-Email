//Copiar objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true,
}
const medidas =  {
    peso: '1kg',
    medida: '1m',
}
console.log(producto);
console.log(medidas);

/*Al hacer esto hemos creado dos objetos.*/
const resultado = Object.assign(producto, medidas);

console.log(resultado);
/*Más que copiar objetos yo lo veo cómo unir objetos, ya que al poner esta propiedad 
lo que sucede en consola es que une las propiedades de los dos objetos en uno sólo*/






//2da forma de copiar(unir objetos) más utilizada 

//Spread operator o Rest Operator 


const resultado2 = { ...producto, ...medidas }
/*los 3 puntos lo que quiere decir es que tome una copia de (producto) y asignala 
dentro del objeto, toma una copia de medidas y asígnala dentro del objeto.*/
console.log(resultado2);

/*El uso de métodos podrá tener muchísimo sentido en muchos casos, pero éste la vdd que se me 
hace un poco más rápido, no sé tú*/