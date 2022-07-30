/* while 01
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {
	let contador;

	contador = 1;
	
		while (contador <=10) {
			document.write("Numero: " + contador+"<br>");
			//alert("Numero: " + contador);
			//	console.log("Numero: " + contador);
			contador = contador + 1;
	
		}
}//FIN DE LA FUNCIÓN