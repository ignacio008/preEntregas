// let precioBasicoAnual=3540.99;
// let precioIntermedioAnual=4540.99;
// let precioAvanzadoAnual=5540.99;
let total=0;
let informacion=[];



const datosCarrito={
    basico:{
        nombre:'Basico',
        info:'Basico este paquete incluye Pagina Web, 5 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO',
        basicoAnual:3540.99,
    },
    intermedio:{
        nombre:'Intermedio',
        info:'Intermedio este paquete incluye Pagina Web, 10 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO',
        intermedioAnual:4540.99,
    },
    avanzado:{
        nombre:'Avanzado',
        info:'Avanzado este paquete incluye Pagina Web, 15 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO',
        avanzadoAnual:5540.99,
    }
}

function seleccionarOperacion(){
    console.log("_______________");
    console.log("1 - Precio Servicio Basico");
    console.log("2 - Precio Servicio Intermedio");
    console.log("3 - Precio Servicio Avanzado");
    console.log("4 - Cerrar carrito");
    console.log("_______________");
    let op=prompt("Ingrese el servicio que desea")
    switch (op) {
        case "1":
            rangoPagos(datosCarrito.basico.basicoAnual,datosCarrito.basico.info,datosCarrito.basico.nombre)
            break;
        case "2":
            rangoPagos(datosCarrito.intermedio.intermedioAnual,datosCarrito.intermedio.info,datosCarrito.intermedio.nombre)
            break;
        case "3":
            rangoPagos(datosCarrito.avanzado.avanzadoAnual,datosCarrito.avanzado.info,datosCarrito.avanzado.nombre)
            break;
        case "4":
            salir()
            break;
        default:
            console.log("operacion invalida, por favor seleccione una opcion valida");
            seleccionarOperacion();
    }
}

let planBasicoButton=document.getElementById("plan-basico");
let formularioVistaUno=document.getElementById("formularioVistaUno");

planBasicoButton.onclick=()=>{
    formularioVistaUno.style.display="flex"
    let cotizarButton=document.getElementById("cotizar")
    cotizarButton.onclick=()=>{
    rangoPagos(datosCarrito.basico.basicoAnual,datosCarrito.basico.info,datosCarrito.basico.nombre);
}
}












function rangoPagos(precioAnual, info, name){
    let precioMes=precioAnual/12;
    let precio2Anual=precioAnual*2;
    console.log("*** Seleccione cuantos meses va a desear el servicio ***");
    console.log("1 - 1 Mes     ------    "+"MXN "+precioMes+"/mes");
    console.log("2 - 12 Meses  ------    "+"MXN "+precioAnual+"/mes");
    console.log("3 - 24 Meses  ------    "+"MXN "+precio2Anual+"/mes");
    console.log("4 - Cerrar carrito");
    console.log("_______________");

    
let seleccionMes=Number(document.getElementById("mesesServicios").value);
if(seleccionMes==1){
    agregarCarrito(precioMes, info,name)
}else if(seleccionMes==12){
    agregarCarrito(precioAnual,info,name)
}else if(seleccionMes==12){
    agregarCarrito(precio2Anual,info,name)
}
else{
    alert("Por favor selecciona un mes valido (1, 12 ó 24)")
const formulario=document.querySelector('#formularioVistaUno')
    formulario.reset();
}

    // let op=prompt("Ingrese el numero de paquete deseado");
    //  switch (op) {
    //     case "1":
    //         agregarCarrito(precioMes, info,name)
    //         break;
    //     case "2":
    //         agregarCarrito(precioAnual,info,name)
    //         break;
    //     case "3":
    //         agregarCarrito(precio2Anual,info,name)
    //         break;
    //     case "4":
    //         salir()
    //         break;
    //     default:
    //         console.log("operacion invalida, por favor seleccione una opcion valida");
    //         seleccionarOperacion();
    // }
}
function agregarCarrito(precioTotal, info, name){
    total +=precioTotal;
    console.log("Su total es de: "+ "$"+total +"MXN");
    console.log("Usted escogio el paquete: "+name);
    console.log("Su informacion del paquete es: ");
    console.log(info);
    informacion.push(info);
    seguirCarrito(total);
}
let informacione=document.getElementById("cuadroTotal");
function seguirCarrito(total){
    // let confirmTotal =confirm("Su total es de: $"+total+"MXN"+" ¿De sea segur comprando?");
    // if(confirmTotal){
    // // seleccionarOperacion();
    // }else{
       
       
    // }
    salir();
    let totalH1=document.getElementById("total");
    // document.write("<h1>Su total es de: $"+total+"MXN<h1/>");
    totalH1.textContent=`Su total es de: $${total}"MXN`;
    let cuadroTotal=document.getElementById("cuadroTotal");
    cuadroTotal.style.border="1px black solid";
    
 
    limpiarHtmlArreglo();
    if (informacion.length>0) {
        for (const inf of informacion) {
            // document.write("<div class='lenght'>Datos de compra: "+inf+"<div/>");
            // document.write("<br>");
            const p =document.createElement('p');
            p.textContent=`Datos de compra: ${inf}"MXN`;
            informacione.appendChild(p);
        }
    }
}
function limpiarHtmlArreglo(){

    // var elementosRemovidos = comentarios.splice(0, comentarios.length);
 
    while (informacione.firstChild) {
        informacione.removeChild(informacione.firstChild);
    }
   }
function salir() {
    alert("Gracias por su compra");
}

// seleccionarOperacion();
