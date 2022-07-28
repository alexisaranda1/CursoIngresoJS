/*Al ingresar una edad debemos informar
 si la persona es adolescente, 
edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;

	/*
	Operador and &&

	F && F = F
	F && V = F 
	V && F = F
	V && V = V

	Operador or ||

	F || F = F
	F || V = V
	V || F = V
	V || V = V
	*/
	if (edad>=13&&edad<=17){ 
	alert("Es adolescente");


}
}


	/*
function mostrar()
{

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	// and y &&

	/*
	Operador and &&

	F && F = F
	F && V = F 
	V && F = F
	V && V = V

	Operador or ||

	F || F = F
	F || V = V
	V || F = V
	V || V = V

	!F = V
	!V = F

	== comparacion
	!= distinto
	! negar 
	=== comparacion estricta valor y tipo
	< menor
	<= menor igual
	> mayor
	>= mayor igual

	*/
	/*
	if(edad >= 13 && edad <= 17){
		alert("es adolescente");
	}
	*/
	/*
	if(!(edad < 13 || edad >17)){
		alert("es adolecente");
	}

}

	*/