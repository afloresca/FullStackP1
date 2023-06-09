/**
 * JS para crear el panel de semanal y gestionar eventos y cosas que pasen.
 * (como llamadas a modal, drag and drops y vete tu a saber)
 */


// variables de control

let diasId = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.currentTarget.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var taskId = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(taskId));
    updateDayTaskDiv(ev.target.id, taskId);
  }

  function updateDayTaskDiv(dayId, taskId){
    let task = document.getElementById(taskId).getElementsByClassName("diaTarea")[0];
    if (dayId === "unaTasks") dayId = ""; //sin asignar
    task.value = dayId; //actualizamos su dia de la semana en la div de la tarea
  }

/**
 *  Container Tareas sin asignar  
 */ 
function createUnaTasksDiv(){
    let unaTaskContainer = document.getElementById("tareasContainer");
    let unaTasksDiv = document.createElement("div");
    unaTasksDiv.setAttribute("id","tareas-sin-asignar");
    unaTasksDiv.setAttribute("style","background-color: #edede9; border: 1px solid DEE2E6;  border-radius: 18px;");
    unaTasksDiv.classList.add("tareas"); 
    unaTasksDiv.classList.add("col-sm");
    unaTasksDiv.classList.add("day");
    unaTasksDiv.classList.add("p-0");
    unaTasksDiv.classList.add("pt-2");
    unaTasksDiv.classList.add("vh-100");
    unaTasksDiv.classList.add("text-center");
    unaTasksDiv.setAttribute("ondrop","drop(event)");
    unaTasksDiv.setAttribute("ondragover", "allowDrop(event)");
    let html = 
    `<h4 style="height:50px;">Tareas sin asignar</h4>
    
    <div class="sticky-xxl-bottom">       
        <button class="btn btn-primary mb-3 mt-2" onclick="addTask('unatask')">  Añadir nueva tarea   </button>
    </div>
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

/**
 * crea los divs contenedores para cada día de la semana
 */
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
        dayDiv.setAttribute("id", diasId[i]);
        dayDiv.setAttribute("style", `background-color: ${color}; border: 1px solid DEE2E6;  border-radius: 18px;`)
        dayDiv.setAttribute("ondrop","drop(event)");
        dayDiv.setAttribute("ondragover", "allowDrop(event)");
        dayDiv.innerHTML =  `<h4 style="height:50px;">${dias[i]}</h4> 
        <div class="sticky-xxl-bottom">       
            <button class="btn btn-primary mb-3 mt-2" onclick="addTask('${diasId[i]}')">  Añadir nueva tarea   </button>
        </div>  `             
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
    container.innerHTML= `<div class="row" id="tareasContainer">
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

let modalDia = "";

function addTask(mdia){
    nomTarea.value = "";
    modTaskdesc.value = "";
    modColorTarea.value = DEFAULT_TASK_COLOR;
    modHoraI.value="00";
    modHoraF.value="00";
    modIdTask.value = "";
    document.getElementById("modCompletada").checked = false;
    if (mdia==='unatask') mdia = "";
    modalDia = mdia;
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
let modHoraI = document.getElementById("modHoraI");
let modHoraF = document.getElementById("modHoraF");

function verificaDatos(){
try{
    if (nomTarea.value === "" ||  modTaskdesc.value === "" || modHoraI==="" || modHoraF==="") {
        alert("Debes rellenar todos los campos obligarorios");
        return false;
    }  //comprueba si las horas son numericas y si estan entre los rangos
    else if ( isNaN(modHoraI.value) || isNaN(modHoraF.value) || parseInt(modHoraI.value)<0 || parseInt(modHoraF.value)>24){
        alert("Valor de hora no es correcto debe ser entre 0 y 24");
        return false;
    }
    else if ( parseInt(modHoraI.value) > (modHoraF.value)){
        alert("La hora inicial no puede ser mayor que la final");
        return false;
    }
    else       return true;
}
catch (e){
    alert("VALOR NO VALIDO!");
    return false;
}

}

// Función que cierra el modal al pulsar el botón de cerrar
btnCloseAddTask.addEventListener('click', function(){
    document.getElementById("addTarea").close();
    })



//Evento que cuando clickas en el boton añadir valida los campos del modal y añade la semana si son correctos
btnAddTask.addEventListener('click', function (){
    // Validacion de campos obligatorios
    if (verificaDatos()) {    
        let modCompletada="N";
        if (document.getElementById("modCompletada").checked) {
            modCompletada = 'S';
            console.log(modCompletada)
        }   
        if (modalAccion.value === "add") {
              tasks({"id" : ++numTareas + "", "idcard" : plan.id, "nombre" : nomTarea.value, "color" : modColorTarea.value, "descripcion" : modTaskdesc.value, "dia" : modalDia, "completada":modCompletada, "horaI":modHoraI.value, "horaF":modHoraF.value});
            //aquí irá la llamada a función de insert en bdd de la bdd a task.js
              generateTask()   ;        //creamos la nueva tarea semanal 
        }
        else {
            tasks({"id" : modIdTask.value + "", "idcard" : plan.id, "nombre" : nomTarea.value, "color" : modColorTarea.value, "descripcion" : modTaskdesc.value, "dia" : modalDia, "completada":modCompletada, "horaI":modHoraI.value, "horaF":modHoraF.value});
            //aquí irá la llamada a función de actualización de la bdd en task.js
            updateTaskDiv();

        }
            // Limpiamos los valores del formulario    
        nomTarea.value = "";
        modTaskdesc.value = "";
        modHoraI.value="";
        modHoraF.value="";
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
    modHoraI.value=taskJson.horaI;
    modHoraF.value=taskJson.horaF;
    modalTitle.innerHTML = "Actualizar tarea";
    modalAccion.value = "update";
    modIdTask.value = taskJson.id; //guardaremos la idTask para actulizar la tarjetilla de tarea
    if (taskJson.completada==="S") document.getElementById("completada").checked= true;
    else document.getElementById("completada").checked= false;
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
