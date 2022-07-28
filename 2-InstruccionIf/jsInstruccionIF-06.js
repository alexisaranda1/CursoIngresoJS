/*
Al ingresar una edad debemos informar
 si la persona es mayor de edad
(mas de 18 años) o adolescente 
(entre 13 y 17 años)
 o niño (menor a 13 años).
*/


function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	if (edad >= 18) {
		alert(" Más de 18 años ");
	}

	else if (edad >= 13) {
		alert("Es adolescente");
	}

	else {
		alert(" Es menor de 13");
	}

}//FIN DE LA FUNCIÓN