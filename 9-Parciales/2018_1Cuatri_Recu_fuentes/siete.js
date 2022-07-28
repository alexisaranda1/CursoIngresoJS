/*   2018-1cuatri-Recu-fuentes.
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar() {
    let nota;
    let sexoIngresado;
    let i;
    let acumuladorNotas = 0;
    let promedio;
    let contadorVarones = 0;
    let flag = 0;
    let minimo;
    let minimoSexo;

    for (i = 0; i <= 4; i++) {

        do {
            nota = parseInt(prompt("Ingrese la nota"));
        } while (isNaN(nota) || !(nota >= 0 && nota <= 10));
        do {
            sexoIngresado = prompt("ingrese f ó m .");
        } while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "F" && sexoIngresado != "M");
        acumuladorNotas += nota;
        if (sexoIngresado == "m" && nota >= 6 || sexoIngresado == "M" && nota >= 6) {
            contadorVarones++;
        }
        if (flag == 0 || nota < minimo) {
            minimo = nota;
            minimoSexo = sexoIngresado;
            flag = 1;
        }
    }
    
    promedio = acumuladorNotas / 5;

    alert("Promedio de las notass totales: " + promedio);
    alert("La cantidad de Varones con notas mayor a 6: " + contadorVarones);
    alert("la nota mas baja es: " + minimo + " y el sexo es : " + minimoSexo);
}// fin de la funcion
