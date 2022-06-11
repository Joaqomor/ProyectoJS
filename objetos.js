 debugger
function objeto (material,medida,espesor,peso,valor,stock,) {
    this.material = material
    this.medida = medida
    this.espesor = espesor
    this.peso = peso
    this.valor = valor
    this.stock = stock
    
} 

const objeto1 = new objeto ("Galvanizado", "2000x1000", 2, 30, 50, 226)
const objeto2 = new objeto ("Galvanizado", "3000x1500", 1.5, 63, 72, 1226)
const objeto3 = new objeto ("Aluminio", "3000x1500", 1, 10, 35, 587)
const objeto4 = new objeto ("Hierro", "2000x1000", 1, 32, 40, 698)
const objeto5 = new objeto ("Hierro", "2500x1250", 1.5, 48, 62, 748)
const objeto6 = new objeto ("Latón", "2000x1000", 1.5, 24 , 23, 37)


function stockFinal(){
    let cantidad = parseInt(prompt("ingrese la cantidad de material que se va a consumir"))
    let resultado = objeto4.stock - cantidad
    console.log("El stock actualizado es de " + resultado + " unidades");
}

stockFinal()

function Precio(){
    let cant = parseInt(prompt("ingrese la cantidad de material que se va a comprar"))
    let resultado = objeto2.valor * cant
    console.log("El precio total es de " + resultado + " euros");
}

Precio() 