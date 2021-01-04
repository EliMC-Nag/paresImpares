//Ejercicio PARES e IMPARES
//Crear una función expresada que al recibir un numero como parametro imprimima por consola
//“El número es par” si lo es o “El número es impar” si no lo es. En el caso que el numero fuese 0
//mostrar un mensaje de error. Se debe incluir un if ternario en script.

let numero;
let parImpar = function (numero) {

    if(numero != 0){

        (numero%2)==0? console.log('El numero es Par') : console.log('El numero es Impar');

    }else{
        let msj='Error, se ingreso un valor nulo'
        console.log(msj);
    }
}

parImpar(4);
parImpar(3);
parImpar(0);