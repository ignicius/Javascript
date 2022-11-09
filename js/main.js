$("#btnFiltrar").on("click", refrescarPagina);
$("#btnFiltrar").on("click", scrolear);
$("#btnFiltrar").on("click", animacionesOnClick);



let todosLosProductos = null;
let productosFiltrados = null;
const contenedorProductos = document.getElementById('contenedorProductos');

$.ajax({
  url: "data/data.json",
  dataType: 'json',
  async: true,
  success: function (data) {
    todosLosProductos = data;
    productosFiltrados = todosLosProductos; 
    console.log(todosLosProductos);
    refrescarPagina();
    animaciones();
  }
});


function mostrarProductos() {
  $(".seccionProductos").empty();
  for (const info of productosFiltrados)
    $(".seccionProductos").append(
      `<a href="#" target="_blank">
          <div class="card" style="width: 18rem;">
            <img src=${info.src} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${info.modelo}</h5>
            <p class="card-text">${info.memoria}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Color: ${info.color}</li>
            <li class="list-group-item">Precio: $   ${info.precio}</li>
          </ul>
        </div>
      </a>`);
}



function filtrarDatos() {
  productosFiltrados = todosLosProductos
    .filter(producto =>
      producto.modelo.toLowerCase().includes($("#busqueda").val().toLowerCase())
    );
}



function refrescarPagina() {
  filtrarDatos();
  mostrarProductos();
}



// ANIMACIONES


function animaciones() {
  $("h1").hide();
  $(".card").hide();
  $("h1").fadeIn();
  $(".card").fadeIn("slow", function () {
  });
}

function animacionesOnClick() {
  $(".card").hide();
  $(".card").fadeIn(3000, function () {
  });
}


// FIN ANIMACIONES


function scrolear() {
  $('html,body').animate({
      scrollTop: $(".productosDestacados").offset().top},
      'slow');
};


  // FORMULARIO

  let boton = document.getElementById("btn");

  boton.addEventListener("click", (e)=> {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensajeDeUsuario").value;

    e.preventDefault();
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("email", email);
    localStorage.setItem("mensaje", mensaje);
  })

boton.addEventListener("click", (e) =>
  Toastify({
  text: "Gracias por tu mensaje, te responderemos lo antes posible",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast());
