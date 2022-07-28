/*
Al selecionar un destino , indicar el punto cardinal
 de nuestro pais
 en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
			alert("Se encuentra al Oeste.");
			break;
		case "Ushuaia":
			alert("Se encuentra al Sur.");
			break;
		case "Cataratas":
				alert("Se encuentra al Norte.");
				break;
		case "Mar del plata":
				alert("Se encuentra al Este.");
				break;

	}
	

}//FIN DE LA FUNCIÓN