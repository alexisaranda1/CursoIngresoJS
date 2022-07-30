/*
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1
 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/function mostrar()
{
	let numero;
	let contador =0;
	let i;

	numero = parseInt(prompt("ingrese un numero:"));

	for (  i=1; i <= numero ; i++){

		if ( numero % i == 0 ){
			contador++;
			console.log(i);
		}
	}
console.log("Divisores: "+contador);

}//FIN DE LA FUNCIÓN
//for ( let i=1; i <= numero ; i++)