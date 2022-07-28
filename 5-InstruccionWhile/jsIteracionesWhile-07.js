/*
Al presionar el botón pedir  números  hasta
 que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numero;
	let contador = 0;
	let acumulador = 0;
	let respuesta;

	 do{
		numero= parseInt(prompt("ingrese un numero: "));
		acumulador += numero;
		contador++;
		respuesta = prompt("¿Quiere volver a ingresar un numero?..")
	}while (respuesta == "si");
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN

/*  con while... la respuesta hay que
 inicializar para que entre a la iteración

	respuesta = "si";
	while (respuesta == "si") {

		numero = parseInt(prompt("ingrese un numero: "));
		acumulador += numero;// acumuda valores variables.
		contador++; // acumula a desacumula en valores constantes.

		respuesta = prompt("Quiere volver a ingresar un numero?..")
	}
*/