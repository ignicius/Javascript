// let UserName = prompt(`¿Cual es tu nombre?`)
// console.log(UserName)

// let UserAge = prompt(`¿Cual es tu edad?`)
// console.log(UserAge+" años")

// let UserNationanilty = prompt(`¿Cual es tu nacionalidad?`)
// console.log(UserNationanilty)



// DEFINIENDO CONSTANTE IVA e INTERESES //

const IVA = 21/100
const intereses = 15/100

// UTILIZAR UN FILTRO CON OPCIONES PARA
// 1- Rango de precios
// 2- Condiciones (Usado/Nuevo/% de Bateria)
// 3- Definir parametros (Producto/Modelo/Memoria/Color/Precio/Codigo/)
// 4- 
// 5- 
// 6- 
// 7- 
// 8- 


// Mostrar Menu desplegable con los modelos y al elegir uno, autoscroll hacia la imagen con detalles del producto + precio y opciones de pago



// let precioFinal = +prompt(`¿Cuanto estas dispuesto a pagar?`)

if(precioFinal >= 1000){
    console.log(`Venta mayor a 1000`);
} else if(precioFinal < 500){
    console.log(`Venta menor a 500`);
} else if(500 >= precioFinal < 1000){
    console.log(`Venta entre 500 y 1000`);
} else{
    console.log(`No introdujo numero entero`);
}

// let cuotas = +prompt(`En cuantas cuotas te gustaria pagarlo?`)

//      
console.log(cuotas);


const precioSinIva = precioFinal - (precioFinal * IVA);
console.log(precioSinIva);

let precioFinalCuotas = [precioFinal + (precioFinal * intereses * cuotas)];

console.log(precioFinalCuotas);

function calcularDescuento(precio, porcentaje) {
    let Descuento = precio * porcentaje /100;
    let precioFinalDescuento = precio - valorDescuento;

    return precioFinalDescuento;

}

class Producto {
    constructor(nombre, memoria, precio) {
        this.nombre = nombre;
        this.memoria = memoria;
        this.precio = precio;
    }
}

const i1264 = new Producto("Iphone 12","64gb",700);
console.log(i1264);

const i12128 = new Producto("Iphone 12","128gb",800);
console.log(i12128);

// ES BUENA PRACTICA SEGUIR CREANDO OBJETOS DE CADA PRODUCTO? O AL ESTAR EN EL ARRAY LOS PUEDO EXTRAER CON MAYOR SIMPLEZA?

const listaProductos = [
    {nombre:`Iphone 12`, memoria: `64gb`, precio: 700},
    {nombre:`Iphone 12`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 12 Pro`, memoria: `64gb`, precio: 800},
    {nombre:`Iphone 12 Pro`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 13`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 13`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 13`, memoria: `512gb`, precio: 800},
    {nombre:`Iphone 13 Pro`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 13 Pro`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 13 Pro`, memoria: `512gb`, precio: 800},
    {nombre:`Iphone 13 Pro Max`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 13 Pro Max`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 13 Pro Max`, memoria: `512gb`, precio: 800},
    {nombre:`Iphone 14`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 14`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 14`, memoria: `512gb`, precio: 800},
    {nombre:`Iphone 14 Pro`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 14 Pro`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 14 Pro`, memoria: `512gb`, precio: 800},
    {nombre:`Iphone 14 Pro Max`, memoria: `128gb`, precio: 800},
    {nombre:`Iphone 14 Pro Max`, memoria: `256gb`, precio: 800},
    {nombre:`Iphone 14 Pro Max`, memoria: `512gb`, precio: 800},
]
console.log(listaProductos);

listaProductos.forEach((Producto) => {
    console.log(`Este producto es ${Producto.nombre} ${Producto.memoria} y su precio es ${Producto.precio}`)
});

const crearProducto = {}




