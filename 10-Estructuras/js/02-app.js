//Comparador estricto 

const puntaje = 1000; 

if(puntaje == 1000) {
    console.log('Si es igual...');
}

/*Que tal que queremos comparar si puntaje u otra variable, es
diferente a ...*/

const puntos = 1000;// un signo es para asignar, 2 es para comparar

if (puntos != 100){
    console.log('Si es diferente a 100');
}

/*Javascropt agrega lo que es un triple signo de igual*/

const coins = 10; 

if (coins == '10') {
    console.log('Si, es igual');
}else{
    console.log('No, no es igual ');
}
//Con == no es estricto y con === es estricto

/*Aquí lo que hace javascript básicamente es tomar los strings cómo un número si 
es que tienen el mismo valor, ya que no es tan estricto*/

