/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert ("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;

	}
	
	


}//FIN DE LA FUNCIÓN