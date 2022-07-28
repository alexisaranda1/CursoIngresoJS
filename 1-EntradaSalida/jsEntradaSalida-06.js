// ALEXIS ARANDA JARA EJERCICIO 06 JS
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let numeroUno;
	let numeroDos;
	let resultado;
	
	// num + num = num
	// string + string = string
	// num + string = string
	// string + num = string

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;


	alert("la suma es " + resultado);
}


