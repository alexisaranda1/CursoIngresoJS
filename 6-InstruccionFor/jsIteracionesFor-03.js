//al presionar el botón pedir
// la cantidad de veces que quiero repetir
// el mensaje "Hola UTN FRA"
function mostrar()
{
 let repetciones;


 repetciones= parseInt (prompt("ingrese el número de repeticiones"));
	
 for ( let i = 0; i < repetciones; i ++) {

	document.write(i+" HOLA UTN FRA."+ "<br>");

}


}//FIN DE LA FUNCIÓN