let todosLosProductos = null;
let productosFiltrados = null;
const contenedorProductos = document.getElementById('contenedorProductos');

$.ajax({
  url: "../data/data.json",
  dataType: 'json',
  async: true,
  success: function (data) {
    todosLosProductos = data;
    console.log(todosLosProductos);
    productosFiltrados = todosLosProductos; 
    refrescarPagina();
    animaciones();
  }
});

// ---------------------------------------      APPENDS      --------------------------------------- //

function mostrarProductos() {
  $(".seccionProductos").empty();
  for (const info of productosFiltrados)
    $(".seccionProductos").append(
      `<a href="#" target="_blank">
					<div class="card" style="width: 18rem;">
						<img src=../${info.src} class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title"><strong>${info.modelo}</h5>
              <p class="card-text">${info.memoria} memoria</strong></p>
							<p class="card-text">${info.descripcion}</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Color: <em>${info.color}</em></li>
							<li class="list-group-item"><strong>Precio: $ ${info.precio}</strong></li>
						</ul>
					</div>
				</a>`
    );

    animaciones();
}

// ---------------------------------------      FILTRO COLORES      --------------------------------------- //

const colores = [
  "Midnight",
  "Starlight",
  "Blue Sierra",
  "Green Alpine",
  "Silver",
  "Gold",
  "Deep Purple",
  "Pink",
  "Space Black"
];

const listadoDeColores = {};

function agregarColores() {

  colores.forEach(function (color) {

    const celularesFiltrados = todosLosProductos.filter(function (celular) {
      return celular.color == color;
    });

    listadoDeColores[color] = celularesFiltrados.length;
  });

  $("#listadoDeColores").append(`<option value="">Seleccionar</option>`);

  // for...in: recorre todos las productos de un objeto
  for (const color in listadoDeColores) {
    $("#listadoDeColores").append(
      `<option value="${color}">${color} (${listadoDeColores[color]})</option>`
    );
  }
}

// ---------------------------------------      FILTRO MODELOS      --------------------------------------- //


const modelos = [
  "iPhone 11",
  "iPhone 12",
  "iPhone 13",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",
  "iPhone 14",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max"
];

const listadoModelos = {};

function agregarModelos() {

  modelos.forEach(function (modelo) {

    const celusFiltrados = todosLosProductos.filter(function (celu) {
      return celu.modelo == modelo;
    });

    listadoModelos[modelo] = celusFiltrados.length;
  });

  $("#listadoModelos").append(`<option value="">Seleccionar</option>`);

  // for...in: recorre todos las productos de un objeto
  for (const modelo in listadoModelos) {
    $("#listadoModelos").append(
      `<option value="${modelo}">${modelo} (${listadoModelos[modelo]})</option>`
    );
  }
}

function refrescarPagina() {
  mostrarProductos();
  agregarColores();
  agregarModelos();
}


const btn = document.getElementById('aplicarFiltros');
btn.addEventListener('click', aplicarFiltros);
// console.log(btn);

function aplicarFiltros(event) {
  event.preventDefault(); 

  const modelo = document.getElementById('listadoModelos').value;
  const moneda = document.querySelector('input[name="moneda"]:checked').value;
  const desde = document.getElementById('desde').value;
  const hasta = document.getElementById('hasta').value;
  const color = document.getElementById('listadoDeColores').value;

  const filtros = {
    modelo: modelo,
    moneda: moneda,
    precio: {
      desde: desde,
      hasta: hasta,
    },
    color: color
  };

  filtrarDatos(filtros);
  mostrarProductos();
}

function filtrarDatos(filtros) {
  console.log(filtros);

  productosFiltrados = todosLosProductos
    .filter(function (producto) {
      let filterExpression =
        producto.precio >= (filtros.precio.desde || 0)
        && producto.precio <= (filtros.precio.hasta || Infinity);

      if (filtros.modelo) {
        filterExpression = filterExpression
          && producto.modelo == filtros.modelo;
      }

      if (filtros.color) {
        filterExpression = filterExpression
          && producto.color == filtros.color;
      }

      return filterExpression;
    });
}

// ANIMACIONES

function animaciones() {
  $("h1").hide();
  $(".card").hide();
  $("h1").fadeIn();
  $(".card").fadeIn("slow", function () { });
}
