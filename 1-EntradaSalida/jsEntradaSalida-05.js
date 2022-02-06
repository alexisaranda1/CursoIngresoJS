/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// declarar variables 

	let nombreIngresado; 
	let edadIngresado;
	let mensajeMostrar; 
	 
	//tomo  los datos 

	nombreIngresado=document.getElementById("txtIdNombre").value;

	edadIngresado=document.getElementById("txtIdEdad").value;

	

	mensajeMostrar=" usted se llama se llama "+nombreIngresado+" y tiene "+edadIngresado+" edad ";

	alert(mensajeMostrar);
	

}

