/*
Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/
function mostrar() {
    let numeroUno;
    let numeroDos;
    let divido;
    let suma;

    numeroUno = prompt("ingrese un numero:");
    numeroDos  = prompt("ingrese un otro numero.");

    if (numeroUno == numeroDos) {
        alert(numeroUno + numeroDos);
    }else if (numeroUno > numeroDos) {
        if (numeroDos != 0) {
            divido = parseInt(numeroUno) / parseInt(numeroDos);
            alert(divido);
        } else {
            alert("No se puede dividir por 0.");
        }
    }  else {
        suma = parseInt(numeroUno) + parseInt(numeroDos);
        alert (suma);
        if (suma < 50 ){
            alert ("la suma es: "+suma+" y es menor a 50");
        }
    }

}
