/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    /*  A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un 
    terreno rectangular
   y se debe alambra con tres hilos de alambre.*/
    let largo;
    let ancho;
    let perimetro;
    let alambres;


    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;
    alambres = perimetro * 3;

    alert("Hay que comprar: " + alambres + " metros de alambre.");

}
function Circulo() {
    /* B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
     y se debe alambra con tres hilos de alambre. */
    let radio;
    let perimetro;
    let alambres;
    const PI = 3.14;
    /* const CEMENETO_X_METRO = 2;
       const CAL_X_METRO = 3; 
       */


    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = 2 * PI * radio;
    alambres = perimetro * 3;

    alert("Hay que comprar: " + alambres + " metros de alambre.");


}
function Materiales() {
    /* C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    let largo;
    let ancho;
    let superficie;
    let cemento;
    let cal;


    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);


    superficie = largo * ancho;
    cemento = superficie * 2;
    cal = superficie * 3;


    alert(`Para hacer un contra piso de ${superficie} m2 se necesita ${cemento} bolsa de cemento y ${cal} bolsa de cal`);

}