let fs= require("fs")//guardo el objeto readFileSync para luego operar con este

function imprimirTareas(arregloTareas){
    arregloTareas.forEach(function(elemento){//for each se usa solo para imprimir cada elemento del arreglo
        console.log("tarea " + elemento.codigo + ":" + elemento.titulo)
    })
}

function agregarTareas(arregloTareas,nuevaTarea){
    arregloTareas.push(nuevaTarea)//agrego la tarea en el arreglo de tareas con push
    fs.readFileSync("./tareas.json"),JSON.stringify(arregloTareas,null," ")//aca agrego la tarea en el archivo json sino
    //solo agrego la tarea en el arreglo, el stringify convierte todo el arreglo nuevo a JSON y lo guarda en tareas.josn
    //el null y " " es solo para formato
}

function borrarTarreas(arregloTareas,codigoTarea){
    let arregloSinTareaBorrada= arregloTareas.filter(function(elemento){
        return elemento.codigo!=codigoTarea
    })//uso un filter para filtrar todas las tareas que no sean ese codigo y las guardo en un array
    fs.readFileSync("./tareas.json"),JSON.stringify(arregloSinTareaBorrada,null," ")//guarda el array sin la tarea en el archivo json
    return arregloSinTareaBorrada//devuele el array sin la tarea borrada
}

function filtrarTareas(arregloTareas,estadoTarea){
    let arregloTareasPorEstado = arregloTareas.filter(function(elemento){
        return elemento.estado==estadoTarea//filtro por estado y lo guardo en un array
    })
    return arregloTareasPorEstado// devuelvo el array

}

module.exports = {imprimirTareas,agregarTareas,borrarTarreas,filtrarTareas};//exporto varias funciones