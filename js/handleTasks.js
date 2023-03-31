//document.getElementById('modifyTarea').showModal(); //Mostrar modal modificación tareas
//
//document.getElementById('deleteTarea').showModal(); //Mostrar modal eliminar tareas



// variables de control
let numTareas = 0;
let diasId = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];


/**
 *  Container Tareas sin asignar  
 */ 
function createUnaTasksDiv(){
    let unaTaskContainer = document.getElementById("tareasContainer");
    let unaTasksDiv = document.createElement("div");
    unaTasksDiv.setAttribute("id","tareas-sin-asignar");
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
    console.log(weekTaskContainer);
}

function createWeekDays(){
    let weekDays = document.getElementById("tareas-week-cols");

    let dayDiv = document.createElement("div");
    for (let i = 0; i < diasId.length; i++) {
        dayDiv.classList.add("tareas"); 
        dayDiv.classList.add("col-sm");
        dayDiv.classList.add("day");
        dayDiv.classList.add("p-0");
        dayDiv.classList.add("pt-2");
        dayDiv.setAttribute("id", "tareas" + diasId[i]);
        dayDiv.innerHTML =  `<h4 style="height:50px;">${dias[i]}</h4>   `             
        weekDays.appendChild(dayDiv);
        dayDiv = document.createElement("div");
    }
}
    
  /**
   * Carga la pantalla de planificación semanal de tareas
   */
  function loadDivTasksWeeks(){
    loadNavBar("PLANIFICACIÓN SEMANAL");
    let container = document.getElementById("container");
    container.innerHTML= `<div class="row" id="tareasContainer">
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

function weekTasks(a){
    loadDivTasksWeeks();
    createUnaTasksDiv();
    createWeekTaskDiv();
    createWeekDays();
    fetchTasks();
  }
    