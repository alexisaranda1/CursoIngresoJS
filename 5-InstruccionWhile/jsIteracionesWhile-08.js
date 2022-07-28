/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	/*
	let numero;
	let respuesta;
	let acumuladorPositivo = 0;
	let negativos = 1;
	let flag = 0;


	do {
		numero = parseInt(prompt("ingrese un numero.."));
		if (numero >= 0) {
			acumuladorPositivo += numero;

		} else {
			flag = 1;
			negativos = negativos * numero;
		}
		respuesta = prompt("¿Quiere seguir ingresando un numero?.");
	} while (respuesta == "si");

	if (flag == 0) {
		negativos = 0
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivo;
	document.getElementById("txtIdProducto").value = negativos; */




	let contador;
	let numero;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let flag = 0;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		if (numero >= 0) {
			sumaPositivos += numero;
			contador++;
		}
		else {
			flag = 1;
			multiplicacionNegativos *= numero;
			contador++;
		}
		respuesta = prompt("¿Quiere ingresar un nuevo numero?");
	}

	while (respuesta == "si");
	if (flag == 0) {
		multiplicacionNegativos = 0;
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;
	

}//FIN DE LA FUNCIÓN