let total = 0;
let informacion = [];
let textPshop = document.querySelector(".numberCar");
let totalH1 = document.getElementById("total");
let informacione = document.getElementById("cuadroTotal");
const datosCarrito = {
  basico: {
    id: Date.now(),
    nombre: "Basico",
    info: "Basico este paquete incluye Pagina Web, 5 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO",
    basicoAnual: 3540.99,
  },
  intermedio: {
    id: Date.now(),
    nombre: "Intermedio",
    info: "Intermedio este paquete incluye Pagina Web, 10 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO",
    intermedioAnual: 4540.99,
  },
  avanzado: {
    id: Date.now(),
    nombre: "Avanzado",
    info: "Avanzado este paquete incluye Pagina Web, 15 Secciones, Diseño Personalizado, Dominio, Host, Certificado SSL, Formulario Contactanos, Diseño Responsivo, SEO",
    avanzadoAnual: 5540.99,
  },
};

const render = (listaProducto) => {
  const contenidoSection = document.querySelector(".section__contenedorCards");
  if (informacion.length >= 1) {
    textPshop.innerHTML = informacion.length;
  } else {
    textPshop.innerHTML = 0;
  }
  let html = "";
  listaProducto.forEach((producto) => {
    const { nombre, info, precio } = producto;
    html += `<div class="plan-card">
        <h2>${nombre}<span>Plan</span></h2>
        <div class="etiquet-price">
          <p>${precio}</p>
          <div></div>
        </div>
        <div class="benefits-list">
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <span>${info}</span>
            </li>
          </ul>
        </div>
        <div class="button-get-plan textMio" id="plan-${nombre}">
          <a>
            <i class="fa-solid fa-rocket text-white"></i>
            <span class="text-white">AGREGAR</span>
          </a>
        </div>
      </div>`;
  });
  contenidoSection.innerHTML = html;
  let planBasicoButton = document.getElementById("plan-Basico");
  let planIntermedioButton = document.getElementById("plan-Intermedio");
  let planAvanzadoButton = document.getElementById("plan-Avanzado");
  let formularioVistaUno = document.getElementById("formularioVistaUno");
  let pay = document.getElementById("pay");
  pay.onclick = () => {
    swal({
      title: "Gracias por tu compra!",
      text: "Estamos en contacto",
      icon: "success",
      button: "Aceptar",
    }).then((value) => {
      informacion.splice(0, informacion.length);
      textPshop.innerHTML = informacion.length;
      total = 0;
      totalH1.textContent = `Su total es de: $${total.toFixed(2)}"MXN`;
      formularioVistaUno.style.display = "none";
      pay.style.display = "none";
      localStorage.clear();
      limpiarHtmlArreglo();
    });
  };
  planBasicoButton.onclick = () => {
    formularioVistaUno.style.display = "flex";
    let cotizarButton = document.getElementById("cotizar");
    let carritoSel = document.getElementById("carritoSel");
    carritoSel.textContent = "Seleccionaste plan Basico";
    modalMio.setAttribute("style", "visibility: visible");
    modalMio.setAttribute("class", "offcanvas offcanvas-end show textMio");
    modalMio.setAttribute("aria-modal", "true");
    modalMio.setAttribute("role", "dialog");
    cotizarButton.onclick = () => {
      rangoPagos(
        datosCarrito.basico.basicoAnual,
        datosCarrito.basico.info,
        datosCarrito.basico.nombre
      );
    };
  };
  planIntermedioButton.onclick = () => {
    formularioVistaUno.style.display = "flex";
    let cotizarButton = document.getElementById("cotizar");
    let carritoSel = document.getElementById("carritoSel");
    carritoSel.textContent = "Seleccionaste plan Intermedio";
    modalMio.setAttribute("style", "visibility: visible");
    modalMio.setAttribute("class", "offcanvas offcanvas-end show textMio");
    modalMio.setAttribute("aria-modal", "true");
    modalMio.setAttribute("role", "dialog");
    cotizarButton.onclick = () => {
      rangoPagos(
        datosCarrito.intermedio.intermedioAnual,
        datosCarrito.intermedio.info,
        datosCarrito.intermedio.nombre
      );
    };
  };
  planAvanzadoButton.onclick = () => {
    formularioVistaUno.style.display = "flex";
    let cotizarButton = document.getElementById("cotizar");
    let carritoSel = document.getElementById("carritoSel");
    carritoSel.textContent = "Seleccionaste plan Avanzado";
    modalMio.setAttribute("style", "visibility: visible");
    modalMio.setAttribute("class", "offcanvas offcanvas-end show textMio");
    modalMio.setAttribute("aria-modal", "true");
    modalMio.setAttribute("role", "dialog");
    cotizarButton.onclick = () => {
      rangoPagos(
        datosCarrito.avanzado.avanzadoAnual,
        datosCarrito.avanzado.info,
        datosCarrito.avanzado.nombre
      );
    };
  };
  let iconSho = document.querySelector(".textMio");
  let modalMio = document.querySelector(".modalMio");
  let close = document.querySelector(".close");
  close.onclick = () => {
    modalMio.setAttribute("style", "visibility: hidden");
  };
};
const getProductJson = () => {
  fetch("data/data.json")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      render(datos);
    })
    .catch((error) => {
      swal({
        title: "Upps error",
        text: error,
        icon: "error",
        button: "Aceptar",
      });
    });
};
getProductJson();
function rangoPagos(precioAnual, info, name) {
  let precioMes = precioAnual / 12;
  let precio2Anual = precioAnual * 2;
  let seleccionMes = Number(document.getElementById("mesesServicios").value);
  if (seleccionMes == 1) {
    pay.style.display = "flex";
    agregarCarrito(precioMes, info, name);
  } else if (seleccionMes == 12) {
    pay.style.display = "flex";
    agregarCarrito(precioAnual, info, name);
  } else if (seleccionMes == 24) {
    pay.style.display = "flex";
    agregarCarrito(precio2Anual, info, name);
  } else {
    swal({
      title: "Upps error",
      text: "Por favor selecciona un mes valido (1, 12 ó 24)",
      icon: "error",
      button: "Aceptar",
    }).then((value) => {
      const formulario = document.querySelector("#formularioVistaUno");
      formulario.reset();
    });
  }
}
function agregarCarrito(precioTotal, info, name) {
  total += precioTotal;
  informacion.push(info);
  seguirCarrito(total);
  if (name == "Avanzado") {
    const productoJson = JSON.stringify(datosCarrito.avanzado);
    localStorage.setItem("avanzado", productoJson);
  } else if (name == "Intermedio") {
    const productoJson = JSON.stringify(datosCarrito.intermedio);
    localStorage.setItem("Intermedio", productoJson);
  } else if (name == "Basico") {
    const productoJson = JSON.stringify(datosCarrito.basico);
    localStorage.setItem("Basico", productoJson);
  }
}

function getLocalStorage() {
  let salida = localStorage.getItem("avanzado");
  let salidaJSON = JSON.parse(salida);

  let salidaBasico = localStorage.getItem("Basico");
  let salidaBasicoJSON = JSON.parse(salidaBasico);

  let salidaIntermedio = localStorage.getItem("Intermedio");
  let salidaIntermedioJSON = JSON.parse(salidaIntermedio);
  if (salidaJSON.info != null) {
    informacion.push(salidaJSON.info);
  }
  if (salidaBasicoJSON.info != null) {
    informacion.push(salidaBasicoJSON.info);
  }
  if (salidaIntermedioJSON.info != null) {
    informacion.push(salidaIntermedioJSON.info);
  }
  for (const inf of informacion) {
    const p = document.createElement("p");
    p.textContent = `Datos de compra: ${inf}"MXN`;
    informacione.appendChild(p);
  }
}
function seguirCarrito(total) {
  salir();
  totalH1.textContent = `Su total es de: $${total.toFixed(2)}"MXN`;
  let cuadroTotal = document.getElementById("cuadroTotal");
  cuadroTotal.style.border = "1px black solid";
  textPshop.innerHTML = informacion.length;
  limpiarHtmlArreglo();
  if (informacion.length > 0) {
    for (const inf of informacion) {
      const p = document.createElement("p");
      p.textContent = `Datos de compra: ${inf}"MXN`;
      informacione.appendChild(p);
    }
  }
}
function limpiarHtmlArreglo() {
  while (informacione.firstChild) {
    informacione.removeChild(informacione.firstChild);
  }
}
function salir() {
  swal({
    title: "Felicidades",
    text: "Se ha agregado tu producto al carrito, por favor procede a pagar",
    icon: "success",
    button: "Aceptar",
  }).then((value) => {
    const formulario = document.querySelector("#formularioVistaUno");
    formulario.reset();
  });
}
getLocalStorage();
