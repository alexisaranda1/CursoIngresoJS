/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar() {
	let numero;
	let max;
	let min;

	max = 10;
	min = 1;

	numero = Math.round(Math.random() * (max - min) + min);
	alert(numero);

}//FIN DE LA FUNCIÓN