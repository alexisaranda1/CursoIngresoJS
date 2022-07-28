/*
Al ingresar una edad 
solo debemos informar si la persona 
NO es adolescente.
*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;

	if (!( edad >= 13 && edad <= 17 )){ 
	alert("No es adolescente");
}

}//FIN DE LA FUNCIÓN