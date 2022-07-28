/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let aumento;
let aumentoImporte;

sueldo = parseInt(document.getElementById("txtIdSueldo").value);
// calculo de porcetaje
// aumento = sueldo*10/100;
aumento = sueldo*0.10;
//sumo el porsentaje al sueldo. 
aumentoImporte = aumento + sueldo;

document.getElementById("txtIdResultado").value = aumentoImporte;




	
}
