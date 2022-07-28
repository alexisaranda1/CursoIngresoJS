function mostrar() {
	let contador;
	let acumulador;
	let numero;
	let promedio;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {
		numero = parseInt(prompt("ingrese un numero: "));

		acumulador += numero;
		contador++; 
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN