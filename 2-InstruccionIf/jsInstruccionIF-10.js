/* if 10. js: Alexis Aranda jara;
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar() {

	let numero;

	numero = Math.round(Math.random() * (10 - 1) + 1);

	if (numero == 9 || numero == 10) {
		alert(numero + " : EXECELENTE");
	}
	else if (numero >= 4) {
		alert(numero + " : APROBÓ");
	}
	else {
		alert(numero + " : Vamos, la proxima se puede")
	}

}
//FIN DE LA FUNCIÓN