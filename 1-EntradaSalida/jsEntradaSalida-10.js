/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let importeDescuento;

	importe=parseInt(document.getElementById("txtIdImporte").value);

	descuento= importe*0.25;
	importeDescuento= importe-descuento;
	document.getElementById("txtIdResultado").value = importeDescuento;

}
