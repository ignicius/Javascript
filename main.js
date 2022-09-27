let UserName = prompt(`¿Cual es tu nombre?`)
console.log(UserName)

let UserAge = prompt(`¿Cual es tu edad?`)
console.log(UserAge+" años")

let UserNationanilty = prompt(`¿Cual es tu nacionalidad?`)
console.log(UserNationanilty)



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



let precioInicial = +prompt(`Que precio sugeris?`)

if(precioInicial >= 1000){
    console.log(`Venta mayor a 1000`);
} else if(precioInicial < 500){
    console.log(`Venta menor a 500`);
} else if(500 >= precioInicial < 1000){
    console.log(`Venta entre 500 y 1000`);
} else{
    console.log(`No introdujo numero entero`);
}



let cuotas = +prompt(`En cuantas cuotas lo queres pagar?`);
console.log(cuotas);


const precioIva = precioInicial + (precioInicial * IVA);
console.log(precioIva);

let precioFinalCuotas = [precioIva + (precioIva * intereses * cuotas)];

console.log(precioFinalCuotas);

function calcularDescuento(precio, porcentaje) {
    let Descuento = precio * porcentaje /100;
    let precioFinalDescuento = precio - valorDescuento;

    return precioFinalDescuento;

}

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const listaProductos = [
    {nombre:`Iphone 14`, precio: 1400},
    {nombre:`Iphone 14 Pro`, precio: 1600},
]

