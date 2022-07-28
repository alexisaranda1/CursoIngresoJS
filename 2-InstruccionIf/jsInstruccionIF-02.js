/*Al ingresar una edad debemos informar 
solo si la persona es mayor de edad*/

function mostrar()
{
let edad;

edad= document.getElementById("txtIdEdad").value;


if (edad >= 18) {
	alert("mayor de edad");
}

}//FIN DE LA FUNCIÓN