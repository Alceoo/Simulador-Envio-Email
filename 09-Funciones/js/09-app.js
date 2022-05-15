//Añadir funciones a un objeto 
//imaginemos que vamos a hacer un reproductor de música
const reproductor = { 
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id:  ${id}`)
    },
    pausar: function(){
        console.log('Pausando...');
    },
    borrar: function(id){
        console.log(`Borrando la cancion... ${id}`);
    },
    crearPlaylist: function(nombre){
       console.log(`Creando la playlist de ${nombre}`);  
    }, 
    reproducirPlaylist: function (nombre){
       console.log(`Reproduciendo la playlist ${nombre}`);
    }
}




//Recordemos que en objetos siempre vamos a usar el método de punto, o sea
reproductor.reproducir(30);
reproductor.reproducir(50);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rap del fino');
//Haciendo la propiedad y mandándo llamar a la misma Propiedad 
/*De esta manera metíamos nuevas propiedades a un objeto, pero también se las podemos 
especificar dentro del mismo objeto*/
//reproductor.borrar = function (id) {
  //  console.log(`Borrando cancion... ${id}`);
//}/*También puden tener parametros , pero que sean llamando la misma funcion*/
//reproductor.borrar(70);







/*Hacer otra propiedad pero que sea algo así cómo usted ha pausado la rola(nombre de
la rola y numero de la playlist o algo así)*/