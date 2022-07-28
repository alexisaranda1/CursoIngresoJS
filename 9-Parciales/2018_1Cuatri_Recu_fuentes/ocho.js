/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100
 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/function mostrar() {
    let letra;
    let numero;
    let contador = 0;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let contadorPositivos = 0;
    let contadorNegativos = 0;
    let sumaNegativos = 0;
    let sumaPositivo = 0;
    let promedioPositivo;
    let ingresoDatos;
    let maximo;
    let minimo;
    let flag = 0;
    let letraMax;
    let letraMin;

    do {
        do {
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100:"));
        } while (isNaN(numero) || numero < -100 || numero > 100);
        letra = prompt("Ingrese una letra: ");
        contador++;
        if (numero == 0) {
            contadorCeros++;
        } else if (numero > 0) {
            contadorPositivos++;
            sumaPositivo += numero ;
        } else {
            contadorNegativos++;
            sumaNegativos += numero ;
        }
        if (numero % 2 == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }

        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMax = letra;
        }
        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMin = letra;
            flag = 1;
        }

        ingresoDatos = prompt("Continuar ingresando datos? (SI / NO)");
    } while (ingresoDatos == "SI" || ingresoDatos == "si");

    alert("Los numeros pares son: " + contadorPares);
    alert("Los numeros impares son: " + contadorImpares);
    alert("Los ceros son: " + contadorCeros);

    promedioPositivo = sumaPositivo / contadorPositivos;
    if (isNaN(promedioPositivo)) {
        alert("El promedio de numeros positivos es: 0");
    } else {
        alert("El promedio de numeros positivos es: " + promedioPositivo);
    }

    alert("La suma de todos los numeros negativos es: " + sumaNegativos);
    alert("El numero maximo es: " + maximo + " y la letra  es: " + letraMax);
    alert("El numero minimo es: " + minimo + " y la letra es: " + letraMin);


}
