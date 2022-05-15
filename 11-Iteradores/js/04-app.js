//  While loop

/*Un while se va a ejecutar mientras una condicion sea verdadera, también consta de 3 partes*/

let i = 0; //Inicializar el While

while (i < 10) { //Condicion
    
console.log(`Numero: ${i}`);

    i++;//Incremento
}
/*El while se ejecuta hasta que la condicion sea verdadera..

Entonces la primera dice, bueno 0 si es menor a 10, se ejecuta el código, se muestra y llegado al 9 incrementa a 10
y dice 10, no es menor a 10, entonces se deja de ejecutar.*/




while(i < 100){
    if (i % 15 === 0){
        console.log(`${i} FIZZ BUZZ!!!`);
    } else if (i % 3 === 0){
      console.log(`${i} Fizz`);
    } else if(i % 5 === 0){
     console.log(`buzz`);
    }
    i++;
}
//éste es el código del fizz buzz y vemos que da el mismo resultado, entonces podemos hacer lo mismo con un for que con un while


//Ejercicio, detectar pares y nones
let a = 1; 

while (a < 20) {
        if( a % 2 === 0 ){
          console.log(`El numero ${a} es par`);
        }else {
            console.log(`El numero ${a} es inpar`);
        }
    a++;
}
