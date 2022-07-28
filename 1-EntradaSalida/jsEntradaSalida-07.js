// ALEXIS ARANDA JARA EJERCICIO 07 JS
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {

	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	alert("la suma es " + resultado);
}

function restar() {
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno - numeroDos;

	alert("el resultado es  " + resultado);

}

function multiplicar() {
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno * numeroDos;

	alert(" el multiplicación es  " + resultado);

}

function dividir() {
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno / numeroDos;

	alert("el resultado  es  " + resultado);
}




/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/


//primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
//segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

/*
 function mostrar() 
	{

	 let primerNumero;
	 let segundoNumero;

	  function sumar() 
	  {

		primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
		segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert(`La suma es ${primerNumero + segundoNumero}`);

	  }
	  function restar() 
	  {

		primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
		segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert(`La resta es ${primerNumero - segundoNumero}`);

	  }

	  function multiplicar() 
	  {

		primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
		segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert(`La multiplicacion es ${primerNumero * segundoNumero}`);

	  }
	  function dividir() 
	  {

		primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);
		segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
		alert(`La division es ${primerNumero / segundoNumero}`);

	  }

	}
	*/