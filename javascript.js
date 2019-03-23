var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ]
};


// --------------------------------------------------- 

// PRIMERA PARTE
// FUNCION 1
// Se pide desarrollar las siguientes funciones:
// precioMaquina(componentes): recibe un array
// de componentes y devuelve el precio de la máquina
// que se puede armar con esos componentes, que es la
// suma de los precios de cada componente incluido.



var comp = local.ventas[3].componentes;


function precioMaquina(componentes) {
  var total = 0; // total empieza en cero
  for (var i = 0; i < componentes.length; i++) {
 
    for (var j = 0; j < local.precios.length; j++) {
     
       if (componentes[i] === local.precios[j].componente) {
        // console.log(componentes[i],local.precios[j].precio);
         total += local.precios[j].precio; // a cero sumale el precio de los componentes iterados
        // console.log(total); // componentes sumados 
     }      
    }

  }
  return total
}


var total = (precioMaquina(comp));
console.log("El total de la máquina es:", total);




// FUNCIÓN 2
// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido,
// o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que
// está identificada por la variable ventas.


var ventas = [
  { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
  { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
  { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
  { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
  { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
];

function cantidadVentasComponente(articulo) {
  var vendido = 0;
  for (var i = 0; i < local.ventas.length; i++) {
       var ventasComp = local.ventas[i].componentes;
       // console.log(ventasComp);

       for (var j = 0; j < local.ventas[j].componentes.length; j++) {
        if (articulo === local.ventas[i].componentes[j] ) {
            vendido += 1;
            
        }
           
           
       }
      
  }
  return vendido
     
  
}

console.log( "Se vendieron", cantidadVentasComponente("Monitor ASC 543"), "unidades del articulo consultado"); // 2





// FUNCIÓN 3
// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio)
// y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no
// cantidad de ventas, sino importe total de las ventas. El importe de una venta es el
// que indica la función precioMaquina.


// Mood mientras hacía esta función: FOTOS 1 - 6 Y 9 ----------> https://bit.ly/2FcAmnD


function vendedoraDelMes(mes, anio) {


  vendedoraAda = 0;
  vendedoraGrace = 0;
  vendedoraGanadora = " ";
     
  
       for (var i = 0; i < local.ventas.length; i++) {
             // console.log(local.ventas[i].fecha);
              mesVenta = local.ventas[i].fecha.getMonth()+1;
              anioVenta = local.ventas[i].fecha.getFullYear();
              if (mesVenta == mes && anioVenta == anio){
                //console.log(local.ventas[i].nombreVendedora);
                //console.log("el valor de la venta fue de: ");
                //console.log(precioMaquina(local.ventas[i].componentes), "y la vendedora fué", local.ventas[i].nombreVendedora);
  
                if (local.ventas[i].nombreVendedora === "Ada") {
                 // console.log(precioMaquina(local.ventas[i].componentes));
                  vendedoraAda +=  precioMaquina(local.ventas[i].componentes)
                  
                  
                } else if (local.ventas[i].nombreVendedora === "Grace") {
                  // console.log(precioMaquina(local.ventas[i].componentes));
                  vendedoraGrace += precioMaquina(local.ventas[i].componentes)
                }
                              
              }
             
      }  
      //console.log("Ada vendió", vendedoraAda);  
      //console.log("Grace vendió", vendedoraGrace);
  
      if (vendedoraAda > vendedoraGrace) {
  
        
     
      // todo lo que esté después de un return no se ve porque lo ignora
  
      vendedoraGanadora = "Ada"
        
      } else if (vendedoraGrace > vendedoraAda) {
       vendedoraGanadora = "Grace"
      }
         console.log("La vendedora que más vendió es " + vendedoraGanadora);
         return vendedoraGanadora
  }
  
  
  
  console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)







// FUNCIÓN 4 

// Obtener las ventas de un mes.

// Mood mientras hacía esta función: FOTO 7 ----------> https://bit.ly/2FcAmnD


function ventasMes(mes, anio) {

  ventaDelMes = 0;


for (var i = 0; i < local.ventas.length; i++) {
  
   mesVenta = local.ventas[i].fecha.getMonth()+1;
   anioVenta = local.ventas[i].fecha.getFullYear();
   //console.log(local.ventas[i].componentes);

   if (mesVenta == mes && anioVenta == anio) {
     ventaDelMes += precioMaquina (local.ventas[i].componentes)
   }

  
}

console.log("La venta del mes es: " + ventaDelMes);
return ventaDelMes
}

console.log( ventasMes(1, 2019) ); // 1250




// FUNCIÓN 5
// Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
// Mood mientras hacía esta función: FOTO 7 ----------> https://bit.ly/2FcAmnD


function ventasVendedora(nombre) {
  
  vendedoraVenta = 0; 
  
   for (var i = 0; i < local.ventas.length; i++) {
    //console.log(local.ventas[i].nombreVendedora)
    if (local.ventas[i].nombreVendedora === nombre) {
      vendedoraVenta +=  precioMaquina(local.ventas[i].componentes);
    } 
   }
   
   return vendedoraVenta
  }
   
   console.log( ventasVendedora("Ada") ); // 900
  //console.log("$", Ada);
  //console.log("$", Grace);
  //ventasVendedora("Grace");


  // FUNCIÓN 6
  // Devuelve el nombre del componente que más ventas tuvo historicamente.
  // El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente



  function componenteMasVendido() {
  
    var masVendido = 0;
    var nombreArt = "";
    var acumuladora = 0;
  
    for (var i = 0; i < local.precios.length; i++) {
      //console.log(local.precios[i].componente) 
  
     acumuladora = cantidadVentasComponente(local.precios[i].componente)
     //console.log(acumuladora);
  
    if(acumuladora > masVendido){
      masVendido = acumuladora;
      nombreArt = local.precios[i].componente;
    }
  acumuladora = 0;
    }
    
    return nombreArt
    
    }
     
     console.log( componenteMasVendido()); // Monitor GPRS 3000


 // FUNCIÓN 7
// que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio) {
  
  var venta = false;
 for (var i = 0; i < local.ventas.length; i++) {
   
   mesVenta = local.ventas[i].fecha.getMonth()+1;
   anioVenta = local.ventas[i].fecha.getFullYear();
  // console.log(local.ventas[i].componentes);
   //console.log(mesVenta);
   //console.log(mes);
   
   

   if (mesVenta == mes && anioVenta == anio) {
        venta = true;
   } 
 }
 return venta
}


console.log( huboVentas(0, 2019) ); // false


// ---------------------------------------------------------


// SEGUNDA PARTE
// FUNCIÓN 8

// En las ventas ya existentes, tenemos que agregar la propiedad sucursal
// con el valor Centro (ya que es la sucursal original).

for (var i = 0; i < local.ventas.length; i++) {

local.ventas[i].sucursal = "Centro";
}

console.log(local);



// FUNCIÓN 9

// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local.sucursales =  ["Centro", "Caballito"] ;
console.log(local);


// FUNCIÓN 10

// Cargar la siguiente información en el array ventas,
// creando sus respectivos objetos siguiendo el patrón: fecha,
// nombreVendedora, componentes, sucursal

var masDatos =  [

{fecha: new Date (2019,1,12), nombrevendedora: "Hedy", componentes:["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
{fecha: new Date (2019,1,24), nombrevendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
{fecha: new Date (2019,1,1), nombrevendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
{fecha: new Date (2019,1,11), nombrevendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
{fecha: new Date (2019,1,15), nombrevendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
{fecha: new Date (2019,1,12), nombrevendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal:"Caballito"},
{fecha: new Date (2019,1,21), nombrevendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
{fecha: new Date (2019,1,8), nombrevendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
{fecha: new Date (2019,1,16), nombrevendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
{fecha: new Date (2019,1,27), nombrevendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
{fecha: new Date (2019,1,22), nombrevendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
{fecha: new Date (2019,1,5), nombrevendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
{fecha: new Date (2019,1,1), nombrevendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
{fecha: new Date (2019,1,7), nombrevendedora:"Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
{fecha: new Date (2019,1,14), nombrevendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"},

]

    for (var i = 0; i < masDatos.length; i++) {
    local.ventas.push(masDatos[i]);   
}

 console.log(local.ventas);


// FUNCIÓN 11

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales
// realizadas por una sucursal sin límite de fecha.


function ventasSucursal(sucu) {
  var ventasSucu = 0;
  for (var i = 0; i < local.ventas.length; i++) {
    if (sucu === local.ventas[i].sucursal) {
      ventasSucu += precioMaquina(local.ventas[i].componentes)
    }
  }
  return ventasSucu
}



console.log( ventasSucursal("Centro") ); // 4195


// FUNCIÓN 12

// Las funciones ventasSucursal y ventasVendedora tienen mucho código
// en común, ya que es la misma funcionalidad pero trabajando con una
// propiedad distinta. Entonces, ¿cómo harías para que ambas funciones
// reutilicen código y evitemos repetir?


  function ventasVendedoraOsucursal (consulta){
    var resultado = 0;

    for (var i = 0; i < local.ventas.length; i++) {

      if (local.ventas[i].nombreVendedora === consulta){

      resultado +=  precioMaquina(local.ventas[i].componentes);
    } else if (local.ventas[i].sucursal === consulta){

      resultado += precioMaquina(local.ventas[i].componentes);
    }
      }

 return resultado

}

 
  console.log( ventasVendedoraOsucursal("Ada") ); // 1010
  console.log( ventasVendedoraOsucursal("Centro") ); // 4195



// FUNCIÓN 13

// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio)
// y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas,
// sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina.

  function sucursalDelMes(mes, anio) {
    
    var montoInicial = 0;
    var montoMaximo = 0;
    var sucu="";
    
    for (var i = 0; i < local.sucursales.length; i++) {
      //console.log(local.sucursales);
      
        for (var j = 0; j < local.ventas.length; j++) {
          //console.log(local.ventas);
          
                if ((local.sucursales[i] === local.ventas[j].sucursal) && (local.ventas[j].fecha.getMonth()+1 === mes) && (local.ventas[j].fecha.getFullYear() === anio)) {
                    montoInicial += precioMaquina(local.ventas[i].componentes);               
                }
            }
            if (montoInicial > montoMaximo){
                montoMaximo = montoInicial;
                sucu = local.sucursales[i];
            }
        montoInicial=0;
        }
        return sucu;
  }
  console.log( sucursalDelMes(1, 2019) ); // "Centro"

  // FUNCIÓN 14

  // Muestra una lista ordenada del importe total vendido por cada mes/año

  function renderPorMes(){
    var enero = 0;
    var febrero = 0;
    var string ="";
              for(var i = 0; i < local.ventas.length; i++){
               var mes = local.ventas[i].fecha.getMonth()+1;
               if (mes == 1){
                  enero += precioMaquina(local.ventas[i].componentes) 
               } else if( mes == 2){
                  febrero += precioMaquina(local.ventas[i].componentes)
               }
              }
              string ="Total Enero 2019 " + enero + " - Total Febrero 2019 " + febrero
          return string
  
  }
  
  //console.log(renderPorMes())


// FUNCIÓN 15

// Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal() {
  var caballito = 0;
  var centro = 0;
  var msj = ""
    for (var i =0; i < local.ventas.length; i++) {
  if ("Caballito" === local.ventas[i].sucursal) {
    caballito += precioMaquina(local.ventas[i].componentes);
  } else {
    centro += precioMaquina(local.ventas[i].componentes);

  }

}
msj = "Total sucursal Caballito:" + caballito + "Total sucursal Centro" + centro
return msj
} 

// FUNCIÓN 16

// Tiene que mostrar la unión de los dos reportes anteriores,
// cual fue el producto más vendido y la vendedora que más ingresos generó

function render() {
  var ventasPorMes = renderPorMes();
  var ventasPorSucursal = renderPorSucursal ();
  var ventasVendedora = "La vendedora que más ventas hizo fue:" + vendedoraDelMes();
  var artMasVendido = "El árticulo más vendido fue:" + componenteMasVendido ();

  return ventasPorMes + ";" + ventasPorSucursal + ";" +  ventasVendedora + ";" + artMasVendido
     
}