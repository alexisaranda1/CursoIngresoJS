/*
una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el
  ingreso de una estacion del año y localidad para vacacionar
   para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y
 Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%


en Verano: bariloche tiene un descuento del 20% cataratas 
y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%


en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas
 tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
 Cordoba tiene el precio sin descuento
 */
	function mostrar() {
		var estacionIngresada;
		var destino;
		//constante siempre en mayusculas
		const PRECIO = 15000;
		var porcentajeCalculo;
		var precioFinal;
	 
		
		porcentajeCalculo=1
		estacionIngresada = document.getElementById("txtIdEstacion").value;
		destino = document.getElementById("txtIdDestino").value;
		switch (estacionIngresada) {
			case "Invierno":
				if (destino == "Bariloche") {
					porcentajeCalculo = 1.2;
				} else if (destino == "Mar del plata") {
					porcentajeCalculo = 0.8;
				} else {
					porcentajeCalculo = 0.9;
				}
			break;
			case "Verano":
				if (destino == "Bariloche") {
					porcentajeCalculo = 0.8;
				} else if (destino == "Mar del plata") {
					porcentajeCalculo = 1.2;
				} else {
					porcentajeCalculo = 1.1;
				}
			break;
			case "Otoño":
			case "Primavera":
				if (destino != "Cordoba") {
					porcentajeCalculo = 1.1;
				}
			break;
		}
	
		precioFinal = porcentajeCalculo * PRECIO;
		alert("El precio final es:" + precioFinal);
	
	}//FIN DE LA FUNCIÓN
