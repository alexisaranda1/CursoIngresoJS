/*
Al presionar el botón pedir  números  hasta que el usuario quiera,

mostrar el número máximo y el número mínimo ingresado.*/

function mostrar() {
	let numeroIngresado;
	let respuesta;
	let maximo;
	let minimo;

	/*
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		maximo = numeroIngresado;
		minimo = numeroIngresado;
	
		respuesta = prompt("Quiere ingresar otro numero ( si/no )");
		if (numeroIngresado > numeroIngresado) {
			maximo = numeroIngresado;
		} else if (numeroIngresado < numeroIngresado) {
			minimo = numeroIngresado;
		}
		*/

	do {

		numeroIngresado = parseInt(prompt("Ingrese un numero "));



		if (numeroIngresado > numeroIngresado) {
			maximo = numeroIngresado;
		} else if (numeroIngresado < numeroIngresado) {
			minimo = numeroIngresado;
		}

	respuesta = prompt("Quiere ingresar otro numero ( si/no )");
	} while (respuesta != "no");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;


}//FIN DE LA FUNCIÓN