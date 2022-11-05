let todosLosProductos = null;
let productosFiltrados = null;
const contenedorProductos = document.getElementById('contenedorProductos');

$.ajax({
  url: "../data/data.json",
  dataType: 'json',
  async: true,
  success: function (data) {
    todosLosProductos = data;
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
						<img src="../images/iph14pro.jpg" class="card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">${info.modelo}</h5>
              <p class="card-text">${info.memoria} memoria</p>
							<p class="card-text">${info.descripcion}</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Color: ${info.color}</li>
							<li class="list-group-item">Precio: ${info.precio}</li>
						</ul>
					</div>
				</a>`
    );

  animaciones();
}


const colores = [
  "Midnight",
  "Starlight",
  "Blue Sierra",
  "Green Alpine",
  "Silver",
  "Gold",
  "Purple"
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


function refrescarPagina() {
  mostrarProductos();
  agregarColores();
}


const btn = document.getElementById('aplicarFiltros');
btn.addEventListener('click', aplicarFiltros);
// console.log(btn);

function aplicarFiltros(event) {
  event.preventDefault(); 

  const modelo = document.getElementById('cantidadModelo').value;
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
