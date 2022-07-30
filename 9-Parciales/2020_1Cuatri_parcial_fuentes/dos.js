function mostrar() {
  let tipoProd;
  let cantBolsas;
  let precioPorBolsa;
  let respuesta;
  let descuento;
  let acumuladorCantBolsas = 0;
  let acumuladorCantBolsasCal = 0;
  let acumuladorCantBolsasArena = 0;
  let acumuladorCantBolsasCemento = 0;
  let precioConDescuento = 0;
  let precioSinDescuento = 0;
  let TipoMasCaro;
  let mayorPrecio;
  let flag = 0;
  let cantidadUnidades;
  let TipoConMasBolsas;



  do {
    do {
      tipoProd = prompt("ingrese tipo de producto a comprar (cal , arena, cemento)");
    } while (tipoProd != "cal" && tipoProd != "arena" && tipoProd != "cemento");

    do {
      cantBolsas = parseInt(prompt("ingrese cantidad de bolsas a comprar (mayor a 0)"));
    } while (cantBolsas < 0);

    do {
      precioPorBolsa = parseInt(prompt("Ingrese el precio de la bolsa (mayor a 0)"));
    } while (precioPorBolsa < 0);

    console.log(precioPorBolsa);
    console.log(cantBolsas);
    //d
    acumuladorCantBolsas += cantBolsas;
    precioSinDescuento += precioPorBolsa * cantBolsas;
    console.log(precioSinDescuento);

    if (tipoProd == "cal") {
      acumuladorCantBolsasCal += cantBolsas;
    } else if (tipoProd == "arena") {
      acumuladorCantBolsasArena += cantBolsas;
    } else {
      acumuladorCantBolsasCemento += cantBolsas;
    }

    if (flag == 0 || mayorPrecio > precioPorBolsa) {
      mayorPrecio = precioPorBolsa;
      TipoMasCaro = tipoProd;
      flag = 1;
    }

    respuesta = prompt("quiere seguir comprando ?(si/no).");

  } while (respuesta != "no");

  if (acumuladorCantBolsas > 0 && acumuladorCantBolsas < 10) {
    descuento = 1;
  } else if (acumuladorCantBolsas >= 10 && acumuladorCantBolsas < 30) {
    descuento = 15 / 100;
  } else {
    descuento = 25 / 100;
  }

  if(acumuladorCantBolsasArena > acumuladorCantBolsasCal 
    && acumuladorCantBolsasArena > acumuladorCantBolsasCemento){
      TipoConMasBolsas = "Arena";
    }else if (acumuladorCantBolsasCal > acumuladorCantBolsasArena &&
      acumuladorCantBolsasCal > acumuladorCantBolsasCemento){
        TipoConMasBolsas = "Cal"
      }else{
        TipoConMasBolsas = "Cemento"
      }

  if(acumuladorCantBolsas != 0){
    precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);
    alert("el precio a pagar bruto es: " + precioSinDescuento);
    if(descuento != 1){
      alert("el importe a pagar con descuento es: " + precioConDescuento);
    }
    alert("El tipo con mas cantidad de bolsas es: " + TipoConMasBolsas);
    alert("El tipo de bolsa mas cara es: " + TipoMasCaro);
  }else{
    alert("no compro ninguna bolsa");
  }

}