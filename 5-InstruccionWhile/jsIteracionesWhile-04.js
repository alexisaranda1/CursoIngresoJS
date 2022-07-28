/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	do{ 
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}while(numeroIngresado>=0 && numeroIngresado>=9);

document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN