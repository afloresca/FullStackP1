//document.getElementById('modifyTarea').showModal(); //Mostrar modal modificación tareas
//
//document.getElementById('deleteTarea').showModal(); //Mostrar modal eliminar tareas



// variables de control

let diasId = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


/**
 *  Container Tareas sin asignar  
 */ 
function createUnaTasksDiv(){
    let unaTaskContainer = document.getElementById("tareasContainer");
    let unaTasksDiv = document.createElement("div");
    unaTasksDiv.setAttribute("id","tareas-sin-asignar");
    unaTasksDiv.setAttribute("style","background-color: #edede9; border: 1px solid DEE2E6;  border-radius: 18px;");
    unaTasksDiv.classList.add("col-sm-2"); 
    unaTasksDiv.classList.add("p-2");
    unaTasksDiv.classList.add("d-flex");
    unaTasksDiv.classList.add("flex-column");
    unaTasksDiv.classList.add("justify-content-around");
    unaTasksDiv.classList.add("text-center");
    let html = 
    `<h4 style="height:50px;">Tareas sin asignar</h4>
    <div id = "unaTasks" class="card-body text-center d-flex flex-column row-gap-2;">        
    </div> `;
    unaTasksDiv.innerHTML = html;
    unaTaskContainer.appendChild(unaTasksDiv);
    }

/**
 * creates week tasks div
 */
function createWeekTaskDiv(){
    let weekTaskContainer = document.getElementById("tareasContainer");
    let tareaWeekDiv = document.createElement("div");
    tareaWeekDiv.classList.add("col-sm-10");
    tareaWeekDiv.setAttribute("id", "tareas-week");
    weekTaskContainer.appendChild(tareaWeekDiv);
    // hay dos divs anidados
    weekTaskContainer = document.getElementById("tareas-week");
    tareaWeekDiv = document.createElement("div");
    tareaWeekDiv.classList.add("row");
    tareaWeekDiv.classList.add("column-gap-1");
    tareaWeekDiv.classList.add("text-center");
    tareaWeekDiv.setAttribute("id", "tareas-week-cols");
    weekTaskContainer.appendChild(tareaWeekDiv);
}

function createWeekDays(){
    let weekDays = document.getElementById("tareas-week-cols");
    let dayDiv = document.createElement("div");
    let color =  WHT_COLOR;
    for (let i = 0; i < diasId.length; i++) {
        dayDiv.classList.add("tareas"); 
        dayDiv.classList.add("col-sm");
        dayDiv.classList.add("day");
        dayDiv.classList.add("p-0");
        dayDiv.classList.add("pt-2");
        dayDiv.classList.add("vh-100");
        dayDiv.setAttribute("id", "tareas" + diasId[i]);
        dayDiv.setAttribute("style", `background-color: ${color}; border: 1px solid DEE2E6;  border-radius: 18px;`)
        dayDiv.innerHTML =  `<h4 style="height:50px;">${dias[i]}</h4>   `             
        weekDays.appendChild(dayDiv);
        dayDiv = document.createElement("div");
        if (color === DEFAULT_COLOR) color = WHT_COLOR;
        else color = DEFAULT_COLOR;
    }
}
    
  /**
   * Carga la pantalla de planificación semanal de tareas
   */
function loadDivTasksWeeks(){
    loadNavBar(`PLANIFICACIÓN SEMANA ${plan.num_semana} AÑO ${plan.year}`);
    let container = document.getElementById("container");
    container.innerHTML= `<div class="row vh-100" id="tareasContainer">
    </div>
    <div class="sticky-xxl-bottom">       
        <button class="btn btn-primary mb-3 mt-2" onclick="addTask()">  Añadir nueva tarea   </button>
    </div>`;
    modalAddTask();
    modalDeleteTask();
  }

  function loadWeeKTasks(){
    createUnaTasksDiv();
    createWeekTaskDiv();
    createWeekDays();
}

///****************************
//    CONTROL DE MODALES */

/**
 * MODAL AÑADIR NUEVA TAREA
 */


function addTask(){
    modalTitle.innerHTML = "Añadir nueva tarea";
    modalAccion.value = "add";
    document.getElementById("addTarea").showModal(); //Mostrar modal añadir tareas
}



const btnAddTask = document.getElementById("btnAddTarea");
const btnCloseAddTask = document.getElementById('btnCloseAddTarea');
// Identificamos el modal.
let modalTitle = document.getElementById("accionTitulo");
let modalAccion = document.getElementById("accionT");
let nomTarea = document.getElementById("nombre-tarea");
let modTaskdesc = document.getElementById("taskdesc");
let modColorTarea = document.getElementById("taskcolor");
let modIdTask = document.getElementById("modIdTask");

function verificaDatos(){
    if (nomTarea.value === "" ||  modTaskdesc.value === "") {
        alert("Debes rellenar todos los campos obligarorios");
        return false;
    } 
    return true;
}

// Función que cierra el modal al pulsar el botón de cerrar
btnCloseAddTask.addEventListener('click', function(){
    document.getElementById("addTarea").close();
    })



//Evento que cuando clickas en el boton añadir valida los campos del modal y añade la semana si son correctos
btnAddTask.addEventListener('click', function (){
    // Validacion de campos obligatorios
    if (verificaDatos()) {      
        if (modalAccion.value === "add") {
              tasks({"id" : ++numTareas + "", "idcard" : plan.id, "nombre" : nomTarea.value, "color" : modColorTarea.value, "descripcion" : modTaskdesc.value, "dia" : ""});
              generateTask()   ;        //creamos la nueva tarea semanal 
        }
        else {
            //actualiza datos tasks cuando haya backend 
            // updateTask({"id" : ++numTareas + "", "idcard" : plan.id, "nombre" : nomTarea.value, "color" : modColorTarea.value, "descripcion" : modTaskdesc.value, "dia" : ""});
            //actualiza div
            tasks({"id" : modIdTask.value + "", "idcard" : plan.id, "nombre" : nomTarea.value, "color" : modColorTarea.value, "descripcion" : modTaskdesc.value, "dia" : ""});
            updateTaskDiv();
        }
                
        // Limpiamos los valores del formulario    
        nomTarea.value = "";
        modTaskdesc.value = "";
        modColorTarea.value = DEFAULT_TASK_COLOR; 
        document.getElementById("addTarea").close(); //CIERRA MODAL
    }
    }
);
        
/**
 * ACTUALIZAR TAREA, QUE USA EL MISMO MODAL QUE AÑADIR
 */

/**
 * Recibe el id del div de la tarjeta a actualizar y el json con los datos
 * @param {*} idTask 
 * @param {*} taskJson 
 */
function updateTask(taskJson){
    nomTarea.value = taskJson.nombre;
    modTaskdesc.value = taskJson.descripcion;
    modColorTarea.value = taskJson.color; 
    modalTitle.innerHTML = "Actualizar tarea";
    modalAccion.value = "update";
    modIdTask.value = taskJson.id; //guardaremos la idTask para actulizar la tarjetilla de tarea
    document.getElementById("addTarea").showModal(); //Mostrar modal añadir tareas
}

function updateTaskDiv(){
    tdiv = document.getElementById(getTaskDivId()); //la función de getTaskDivId nos da el id de la tarjeta
    tdiv.setAttribute("style", "border: 1px solid DEE2E6;  border-radius: 18px; background-color:" + modColorTarea.value);
    tdiv.innerHTML = getTaskHtml();
}

/**
 * MODAL ELIMINAR TAREA
 */

function deleteTask(){
    document.getElementById("deleteTarea").showModal(); //Mostrar modal añadir tareas
}

const btnCloseDelTarea = document.getElementById("btnCloseDelTarea");
const btnEliminarTarea = document.getElementById('btnEliminarTarea');


// Función que cierra el modal al pulsar el botón de cerrar
btnCloseDelTarea.addEventListener('click', function(){
    document.getElementById("deleteTarea").close();
    })

/**
 * Funcion que abre el modal de confirmación de eliminar
 * @param {*} id 
 */
function deleteTaskById(idTask){
    deleteModal=document.getElementById("deleteTarea");
    deleteModal.showModal();
    btnEliminarTarea.addEventListener('click', function(){
        const task= document.getElementById(idTask);
        task.remove();
        deleteModal.close();
    })
    btnCloseDelTarea.addEventListener('click', function(){
        deleteModal.close();
    })
}    
