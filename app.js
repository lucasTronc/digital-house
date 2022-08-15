let arregloTareas = require("./tareas.json")//traigo las tareas en formato json a esta variable
let {imprimirTareas,agregarTareas,borrarTarreas,filtrarTareas} = require("./funciones")//tragio la funcion imprimir tareas

imprimirTareas(arregloTareas)// imprimo las tareas
console.log("\n")

//creo una nueva tarea en app
let nuevaTarea={
    codigo: 4,
    titulo: "revisar inventario",
    estado: "pendiente"
}

agregarTareas(arregloTareas,nuevaTarea)//agrego una nueva tarea al archivo josn+
//imprimirTareas(arregloTareas)//imprimo el arreglo con la tarea nueva
tareas =borrarTarreas(arregloTareas,1)//creo una variable tarea donde guarod el array nuevo sin la tarea borrada
imprimirTareas(tareas)
console.log("\n")
tareasFiltradas=filtrarTareas(arregloTareas,"pendiente")
imprimirTareas(tareasFiltradas)

