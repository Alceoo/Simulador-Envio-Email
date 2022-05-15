/*For EACH y .map*/

/*El for each es igual a un for loop con .lenght, ya que se va a recorrer las veces que haya elementos en mi arreglo*/

const pendientes = [
    'tarea', 'comer', 'proyecto', 'estudiar', 'etc'
];
/*
for(let i = 0; i < pendientes.length; i++){
    console.log(pendientes[i]);
}
asi seria con un for loop */

//Ahora con un forEach

pendientes.forEach((pendiente)=> {
    console.log(`${pendiente}`);
})
/*Adentro del paréntesis que está dentro del paréntesis es donde pasaríamos los parámetros de los elementos que ya tenemos
que no son más que amm podrían ser una letra o un nombre, el for each es una forma de iterar pero también puede contar
cómo un arrow function*/

/*Es decir, toma todo el arreglo y comienza a recorrer cada uno, entra a tarea y se crea una variable adentro de los
paréntesis que es donde se ponen los parámetros, entra a el otro valor y así se sigue, por lo que podríamos pasarle
cómo parámetro un nombre y ese va a ser cada uno de los elemntos del arreglo*/
