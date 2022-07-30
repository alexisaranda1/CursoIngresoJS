//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar() {
	
	let numero;
	let contador =0;

	numero = parseInt(prompt("ingrese un numero:"));

	for ( let i = 2; i < numero ; i++){

		if ( numero % i == 0 ){
			contador++;
			
		}
	}
	if (contador !=0 || numero==1 ){
		alert(numero+ " No es primo.")
	}else {
		alert (numero+ " Es primo.");
	}
	
}//FIN DE LA FUNCIÓN