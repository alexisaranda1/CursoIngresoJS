function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let flag = 0;
	let NacionalidadPersonaConMasTemp;
	let personaConMasTemp = 0;
	let contadorPersonasMayoresSolteras = 0;
	let contadorMujeresSolteraoViuda= 0;
	let contadorPersonaMas60Con38OMas = 0;
	let contadorMujeresCasadas = 0;
	let promedioEdadMujeresCasadas= 0;
	let acumuladorDeEdadMujeresCasadas = 0;




	do{
		nombre = prompt("ingrese nombre");
		nacionalidad = prompt("ingrese nacionalidad");
		edad = prompt("ingrese edad");
		do{
			sexo = prompt("ingrese sexo (f o m) ");
		}while(sexo != "f" && sexo != "m");
		
		do{
			estadoCivil = prompt("ingrese estado civil (soltero o casado o viudo)");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do{
			temperaturaCorporal = prompt('ingrese temperatura corporal (entre 30 y 45)')
		}while(temperaturaCorporal < 30 || temperaturaCorporal > 45);

		if(flag = 0 || temperaturaCorporal >  personaConMasTemp){
			personaConMasTemp = temperaturaCorporal;
			NacionalidadPersonaConMasTemp = nacionalidad;
			flag = 1;
		}

		if(edad > 17 && estadoCivil == "soltero"){
			contadorPersonasMayoresSolteras++;
		}
		if(sexo == "f" && (estadoCivil == "soltero" || estadoCivil == "viudo")){
			contadorMujeresSolteraoViuda++;
		}else if(sexo == "f"){
			contadorMujeresCasadas++;
			acumuladorDeEdadMujeresCasadas += edad;
		}

		if(edad > 60 && temperaturaCorporal > 38){
			contadorPersonaMas60Con38OMas++;
		}

		respuesta = prompt("quiere seguir ingresando pasajeros? (si/no)");
	}while(respuesta != "no");

	alert("La nacionalidad de la persona con mas temperatura es: "+ NacionalidadPersonaConMasTemp);
	if(contadorPersonasMayoresSolteras != 0){
		alert("La cantidad de personas mayores soltera es: " + contadorPersonasMayoresSolteras);
	}else{
		alert("No hubieron personas mayores solteras");
	}
	if(contadorMujeresSolteraoViuda != 0){
		alert("la cantidad de mujeres solteras o viudas es: "+ contadorMujeresSolteraoViuda);
	}else{
		alert("no hubieron mujeres solteras o viudas");
	}
	if(contadorPersonaMas60Con38OMas != 0){
		alert("la cantidad de personas mayores a 60 con mas de 38 de temperatura fue: " + contadorPersonaMas60Con38OMas);
	}else{
		alert("no hubieron personas mayores de 60 con mas de 38 de temperatura");
	}
	if(contadorMujeresCasadas != 0){
		promedioEdadMujeresCasadas = acumuladorDeEdadMujeresCasadas / contadorMujeresCasadas;
	}

}

