/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.x
2-Suma de los positivos.x
3-Cantidad de positivos.x
4-Cantidad de negativos.x
5-Cantidad de ceros.x
6-Cantidad de números pares.x
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero;
	let respuesta;
	let acumuladorPositivos = 0;
	let acumuladorNegaticos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorceros = 0;
	let contadorPares = 0;
	let promedioPosivos=0;
	let promedioNegativos=0;
	let diferencia=0;
	do {
		numero = parseInt(prompt("ingrese un numero.."));

		if (numero > 0) {
			acumuladorPositivos += numero;
			contadorPositivos++;
		} else if (numero == 0) {
			contadorceros++;
		} else {
			acumuladorNegaticos += numero;
			contadorNegativos++;
		}
		if (numero % 2 == 0) {
			contadorPares++;
		}
		respuesta = prompt("¿Quiere seguir ingresando un numero?.( si/no )");
	} while (respuesta == "si" || respuesta == "SI");

	if (contadorPositivos!=0) {
		promedioPosivos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNegativos = acumuladorNegaticos / contadorNegativos;
	} 
	diferencia = contadorPositivos - contadorNegativos;

	document.write("La suma de negativos es: " + acumuladorNegaticos + "<br>");
	document.write("La suma de positivos es: " + acumuladorPositivos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorceros + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	document.write("Promedio de positivos es: " + promedioPosivos + "<br>");
	document.write("Promedio de negativos es :" + promedioNegativos + "<br>");
	document.write("Diferencia entre positivos y negativos es :" + diferencia + "<br>");
	
}//FIN DE LA FUNCIÓN