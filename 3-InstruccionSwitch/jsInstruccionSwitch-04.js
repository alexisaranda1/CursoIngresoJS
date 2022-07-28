/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días
*/
function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;

		case "Abril":
		case "Julio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias.")
			break;
		/*
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Junio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert ("Este mes tiene 31 días.");
		break;
		*/
		default:
			alert("Este mes tiene 31 días.");
			break;








	}



}//FIN DE LA FUNCIÓN