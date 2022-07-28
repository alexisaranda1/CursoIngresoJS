/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar 
la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {


    let temperatura;
    let conversion;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    conversion = (temperatura - 32) / 1.8;

    alert(temperatura + "  Fahrenheit son: " + conversion.toFixed(2) + " centígrados.");
}

function CentigradosFahrenheit() {

    let temperatura;
    let conversion;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);

    conversion = temperatura * 1.8 + 32;

    alert(temperatura + " centígrados son: " + conversion.toFixed(2) + " Fahrenheit.");

}
