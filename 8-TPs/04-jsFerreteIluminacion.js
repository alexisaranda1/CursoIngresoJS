;/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del
 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
 se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si 
es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un
10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio () 
{
    let precio;
    let marcaLamparas;
    let cantidadLamparas; 
    let precioDescuento;
    let descuento;
    let importeFinal;

    precio = 35; 

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparas = parseInt( document.getElementById("Marca").value);

    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    
    if (cantidadLamparas>=6){

       descuento = cantidadLamparas * 0.50;
        precioDescuento = parseInt( document.getElementById("txtIdprecioDescuento").value); 
    }
  
 	
}
*//*4.	Para el departamento de iluminación:
Tomando en cuenta que todmás  as las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o lamparitas bajo consumo tiene
 un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca
 "ArgentinaLuz" se hace un descuento del 40 % 
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca
 "ArgentinaLuz" o “FelipeLamparas” se hace un
  descuento del 25 % y si es de otra marca el 
  descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca 
"ArgentinaLuz"  el descuento es del 15%, si es  
“FelipeLamparas” se hace un descuento del 10 %
 y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de
 $120  se debe sumar un 10% de ingresos brutos en
  informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto 
 que se pagó. 
 */


function CalcularPrecio() {
    let cantid;
    let precioD;
    let precioLamp;
    let marca;
    let precioSD;
    let Impuestos;

    precioLamp = 35;
    cantid = parseInt(document.getElementById("txtIdCantidad").value);
    precioSD = cantid * precioLamp;
    marca = document.getElementById("Marca").value;

        //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantid > 5) {
        precioD = precioSD * 0.50;
       
    } 
     //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace 
    //      un descuento del 40 % y si es de otra marca el descuento es del 30%.
    else if (cantid == 5 && marca == "ArgentinaLuz") {
        precioD = precioSD * 0.40;
    } else if (cantid == 5) {
        precioD = precioSD * 0.30;
    }
    //C.	Si compra 4  lamparitas bajo consumo
    // marca "ArgentinaLuz" o “FelipeLamparas” 
    //se hace un descuento del 25 % 
    //y si es de otra marca el descuento es del 20%.
     else if (cantid == 4 && marca == "ArgentinaLuz") {
        precioD = precioSD * 0.25;
    } else if (cantid == 4 && marca == "FelipeLamparas") {
        precioD = precioSD * 0.25;
    } else if (cantid == 4) {
        precioD = precioSD * 0.5;
    }
    //D.	Si compra 3  lamparitas bajo consumo
    // marca "ArgentinaLuz"  el descuento es del 15%,
    // si es
    //  “FelipeLamparas” se hace un descuento del 
    //10 % y si es de otra marca un 5%.
    else if (cantid == 3) {
        if (marca == "ArgentinaLuz") {
            precioD = precioSD * 0.15;
        } else if (marca == "FelipeLamparas") {
            precioD = precioSD * 0.10;
        } else {
            precioD = precioSD * 0.5;
        }
    } else {
        precioD = precioSD;
    }
    // E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e
    // informar del impuesto con el siguiente mensaje:
    // ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    if (precioD > 120) {
        Impuestos = precioD * 1.1 - precioD;
        Impuestos= Math.round(Impuestos);
        precioD = precioD * 1.1;

        alert(
            `IIBB Usted pago ${precioD} , siendo ${Impuestos} el impuesto que se pagó`
        );
    } else {
        document.getElementById("txtIdprecioDescuento").value = Math.round(precioD);
    }
}
