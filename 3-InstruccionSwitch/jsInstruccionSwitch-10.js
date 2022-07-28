/* 
una agencia de viajes nos piden informar si hacemos viajes a lugares según 
la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar() {
	let estación;
	let destino;
	estación = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	/*
	switch (estación) {
		case "Invierno":
			if (destino=="Bariloche"){
				alert("Se viaja.");
			}else if (destino!="Bariloche"){
				alert("No se viaja.");
			}
			break;
		case "Verano":
			if (destino=="Mar del plata"||destino == "Cataratas"){
				alert("Se viaja.");
			}	else if (destino=="Bariloche"||destino == "Cordoba"){
				alert("no se viaja.");
			}
			break;
		case "Otoño":
			if (destino=="Mar del plata"||destino == "Cataratas"){
				alert("Se viaja.");
			}	else if (destino=="Bariloche"||destino == "Cordoba"){
				alert("Se viaja.");
			}
			break;
		case "Primavera":
			if (destino=="Bariloche"){
				alert ("No se viaja.");
			}else if (destino!="Bariloche"){
				alert ("Se viaja.");
			}
			break;
	} */
	switch (estación) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Se viaja.");
					break
				default:
					alert("No se viaja.");
					break;
			}
			break;

		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja.");
					break
				default:
					alert("No se viaja.");
					break;
			}
			break;

		case "Otoño":
			alert("Se viaja.");
			break;


		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja.");
					break
				default:
					alert("Se viaja.");
					break;
			}
			break;





	}
}//FIN DE LA FUNCIÓN
