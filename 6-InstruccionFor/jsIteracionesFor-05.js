/*
al presionar el botón repetir
 el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let numero;


 
 for ( ; ; ) {
	numero= parseInt (prompt("ingrese un numero:"));

	if (numero == 9){
		break;
	}
	alert("usted ingreso: "+numero);

}
}//FIN DE LA FUNCIÓN