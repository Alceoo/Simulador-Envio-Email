//Eventos que suceden con el scroll del mouse

/*Los eventos al dar scroll son básicamente pss eventos que suceden cuando vamos de
arriba a abajo o de izquierda a derecha jajaj*/

/*Hay muchos sitios web que mientras vamos dando scroll van agregando animaciones
Ahora, esos eventos van a suceder en la ventana Global, que es "Window"

Si ponemos window, nos va a aparecer todo lo que está ocurriendo detras, como ya lo dije
hay scroll=y y scroll=x y podemos manejarlo a nuestro antojo

window.addEventListener('scroll', () =>{
    console.log('scrolling');//en muy poco scroll se ejecuta muchas veces
});//Aqui le registramos un evento a window


Ahora, cómo hacemos para detectar cuánto scroll estamos dando verticalmente

window.addEventListener('scroll', () =>{
    const scrollPX = window.scrollY;/*scrollPX es de cuántos píxeles le hemos dado
scroll.
Se le pone window.scrollY para decirle que en la ventana del ejeY, o sea de arriba a
abajo cuántos píxeles le estamos dando scroll. 
console.log(scrollPX);
})


*/
window.addEventListener('scroll', () =>{
    const premium  = document.querySelector('.premium');/*Aqui seleccionamos la clase
de la sección que queremos medir y generar una animacion al dar scroll*/

const ubicacion = premium.getBoundingClientRect();/*este metodo lo que hace es darnos
mucha informacion, esto nos va a decir, a qué distancia se encuentra ese elemento de
donde estamos (te lo dice con botoom y y con top principalmente), */

/*Lo que podemos hacer es generar una condicion con amm, te falta para llegar al 
elemento, y cuándo se cumpla la condicion de que llegamos a las coordenadas del 
elemento se ejecute el mensaje "llegaste a el elemento"*/

if(ubicacion.top < 100){
console.log('El elemento, ya está visible');
}else {
    console.log('Aun no, da más scroll');
}
console.log(ubicacion);
})
/*Ahora, si queremos algo más cercano a la realidad, podemos mandar a la consola
la ubicacion para que vayamos debugueando, aqui podemos ir calculando con top o con
bottom*/