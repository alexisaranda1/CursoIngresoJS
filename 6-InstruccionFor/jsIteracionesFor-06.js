/*
al presionar el botón pedir un 
número. mostrar los numeros 
pares desde el 1 al número ingresado,
 y mostrar la cantidad de 
numeros pares encontrados.
*/
function mostrar()
{
	let numero;
	let contador =0;

	numero = parseInt(prompt("ingrese un numero:"));

	for ( let i=1; i <= numero ; i++){

		if ( i % 2 == 0 ){
			contador++;
			console.log(i);
		}
	}
console.log("N° de Pares: "+contador);

}//FIN DE LA FUNCIÓN