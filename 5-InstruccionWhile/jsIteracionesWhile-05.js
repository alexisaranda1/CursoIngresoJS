/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
     do {
		sexoIngresado = prompt("ingrese f ó m .");

	 }while (sexoIngresado!="f"&& sexoIngresado!="m" );


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN