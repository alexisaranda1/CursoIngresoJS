/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Ingresar tres precios de productos y mostrar la suma de los mismos.
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    
    precioUno = parseInt( document.getElementById( "txtIdPrecioUno" ).value); 
    precioDos = parseInt( document.getElementById( "txtIdPrecioDos" ).value);
    precioTres =parseInt( document.getElementById ("txtIdPrecioTres" ).value);
   
    resultado = precioUno + precioDos + precioTres;

    alert ("El resultado de la suma es: "+resultado.toFixed(2));

	
}
function Promedio () 
{
    //	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;
    precioUno = parseInt( document.getElementById( "txtIdPrecioUno" ).value); 
    precioDos = parseInt( document.getElementById( "txtIdPrecioDos" ).value);
    precioTres =parseInt( document.getElementById ("txtIdPrecioTres" ).value);

    suma =  precioUno + precioDos + precioTres;
    promedio= suma / 3;

    alert("el promedio es: "+promedio.toFixed(2)); 

	
}
function PrecioFinal () 
{
    //	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let precioFinal;

    precioUno = parseInt( document.getElementById( "txtIdPrecioUno" ).value); 
    precioDos = parseInt( document.getElementById( "txtIdPrecioDos" ).value);
    precioTres =parseInt( document.getElementById ("txtIdPrecioTres" ).value);

    suma =  precioUno + precioDos + precioTres;
    iva= suma* 0.21;
     precioFinal= suma + iva;

    alert("El precio final mas Iva es: "+precioFinal.toFixed(2)); 
	
}