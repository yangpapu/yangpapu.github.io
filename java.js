function agregarTarea() {
    var tareaInput = document.getElementById("tarea").value;
    if (tareaInput === "") { return;}
    var contenedorTareas = document.getElementById("contenedor-tareas");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = tareaInput;
   

    var btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Borrar";
    btnEliminar.classList.add("btn-borrar");
    btnEliminar.addEventListener("click", function() {
        eliminarTarea(nuevaTarea);
    });

    nuevaTarea.appendChild(btnEliminar);
    contenedorTareas.appendChild(nuevaTarea);
    document.getElementById("tarea").value = "";
}

function eliminarTarea(tarea) {
    var contenedorTareas = document.getElementById("contenedor-tareas");
    contenedorTareas.removeChild(tarea);
}