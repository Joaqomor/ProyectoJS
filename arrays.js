
const productos = [objeto1, objeto2, objeto3, objeto4, objeto5, objeto6]
debugger
function recorreArray () {
    for (const elemento of productos) {
        console.table(elemento)
    }
}
recorreArray()

console.table(productos)


debugger

function agregarObjeto (){
    let material = prompt("ingrese el material") 
    let medida = prompt("ingrese la medida")
    let espesor = parseInt(prompt("ingrese el espesor"))
    let peso = parseInt(prompt("ingrese el peso"))
    let valor = parseInt(prompt("ingrese el valor"))
    let stock = parseInt(prompt("ingrese el stock"))
    productos.push(new objeto (material,medida,espesor,peso,valor,stock))
}

agregarObjeto()

console.table(productos)
