/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/function mostrar()
{
	let horaDia;

	horaDia = parseInt(document.getElementById("txtIdHora").value);
	
	switch(horaDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("Es de mañana");
			break;
	}
}//FIN DE LA FUNCIÓN