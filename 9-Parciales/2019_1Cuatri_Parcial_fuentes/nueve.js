
function mostrar()
{
    let nombrePais;
    let cantidadDeHabitantes;
    let temperaturaMinimaTerritorio;
    let respuesta;
    let contadorTemperaturasPares = 0;
    let menorCantidadHabitantes = 0;
    let flag1 = 0;
    let cantidadPaisesIngresados = 0;
    let nombrePaisMenorHabitantes;
    let flag2 = 0;
    let temperaturaMasChica = 0;
    let cantidadPaisesConMas40Grados =0;
    let acumuladorHabitantes = 0;
    let promedioHabitantesPaises = 0;


    do{ 
        nombrePais = prompt("ingrese el nombre del pais");
     
        do{
            cantidadDeHabitantes = parseInt(prompt("ingrese cantidad de habitantes (de 1 a 7000)(Millones)"));
        }while(cantidadDeHabitantes < 1 || cantidadDeHabitantes > 7000);

        do{
            temperaturaMinimaTerritorio = parseInt(prompt("ingrese la temperatura minima registrada en su territorio(entre -50 y 50)"));
        }while(temperaturaMinimaTerritorio < -50 || temperaturaMinimaTerritorio > 50);

        if((temperaturaMinimaTerritorio % 2) == 0){
            contadorTemperaturasPares++;
        }

        if(flag1 == 0 || cantidadDeHabitantes < menorCantidadHabitantes){
            menorCantidadHabitantes = cantidadDeHabitantes;
            nombrePaisMenorHabitantes = nombrePais;
        }
        
        if(temperaturaMinimaTerritorio > 40){
            cantidadPaisesConMas40Grados++;
        }

        cantidadPaisesIngresados++;
        acumuladorHabitantes += cantidadDeHabitantes;
        

        if(flag2 == 0 || temperaturaMinimaTerritorio < temperaturaMasChica){
            temperaturaMasChica = temperaturaMinimaTerritorio;
            nombrePaisTempMasChica = nombrePais;
        }
        
       respuesta = prompt("quiere seguir ingresando paises? (si/no)");
    }while(respuesta != "no");

    if (contadorTemperaturasPares != 0){
        document.write("la cantidad de temperaturas pares fue: "+ contadorTemperaturasPares + "<br>");
    }

    document.write("el nombre del pais con menos habitantes fue: "+ nombrePaisMenorHabitantes + "<br>");
    if(cantidadPaisesConMas40Grados != 0){
        document.write("la cantidad de paises que superan los 40 grados es: " +cantidadPaisesConMas40Grados + "<br>");
    }
    console.log(acumuladorHabitantes);
    console.log(cantidadPaisesIngresados);
    promedioHabitantesPaises = acumuladorHabitantes / cantidadPaisesIngresados;
    document.write("el promedio de habitantes de los paises es: " + promedioHabitantesPaises+ "<br>");

    


}
