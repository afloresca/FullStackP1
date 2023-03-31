
    /**
     * JS con funciones para gestionar las tareas de la semana
     */

    // variables de las tareas
    let  idT = "";
    let  idtask = "";
    let  nombreT = "";
    let  colorT = "";
    let  descripcionT = "";
    let  dia = "";
    let plan; //datos de la card
    let numTareas = 0;

    /**
     * constructor de tareas a partir de un json dado
     * @param {*} task 
     */

    function tasks(task) {
        this.idT = task.id;
        this.idtask = task.idtask;
        this.nombreT = task.nombre;
        this.colorT = task.color;
        this.descripcionT = task.descripcion;
        this.dia = task.dia;
        this.taskParms = JSON.stringify(task).replaceAll('"', "'");         
    }
    
    function generateTask(){
      if (this.dia === "") createUnaTask();
      else createAssignedTask();
    }


    /**
     * Puts an unassigned task into unassigned task div
     */

    function createUnaTask(){
        let unaTaskContainer = document.getElementById("unaTasks");
        unaTaskContainer.appendChild(createTask());
    }

    /**
     * Coloca cada tarea en su area de tarea por dia id = "tareas{nombrededia}"
     */
    function createAssignedTask(){
        let taskContainer = document.getElementById("tareas" + this.dia);
        taskContainer.appendChild(createTask());    
    }

    function getTaskDivId(){
        return "task" + this.idT;
    }

    /**
     * crea un elemento tarea
     * @returns task element
     */
    function createTask(){
        let task = document.createElement("div");
        task.setAttribute("id", this.getTaskDivId());
        task.setAttribute("style", "border: 1px solid DEE2E6;  border-radius: 18px; background-color:" + this.colorT);
        task.innerHTML = getTaskHtml();
        return task
    }

    function getTaskHtml(){
      let html= `<h5 class="p-2">${this.nombreT}</h5>  
      <input type="hidden" id="diaTarea" value="${this.dia}">  
      <input type="hidden" id="idT" value="${this.idtask}"> 
      <input type="hidden" id="diaTarea" value="${this.descripcionT}">  
      <input type="hidden" id="idT" value="${this.idT}">                          
       <div class="d-flex flex-row p-1 justify-content-center gap-1">
          <button class="btn btn-primary tareas-btn" onclick="updateTask(${this.taskParms})">
              Modificar
          </button>
          <button class="btn btn-danger tareas-btn" onclick="deleteTaskById('${this.getTaskDivId()}')")>
              Eliminar
          </button>
      </div>`;
      return html;
    }
  



  /**
   * función que cargará las tarjetas obtenidas de la lectura de datos
   * si la tarea pertenece a la semana la carga
   * @param {*} jsonTask 
   */
  function loadTasks(jsonTask){
    jsonTask.forEach(weekTask => {
      if (weekTask.idcard === plan.id){
        numTareas++;
        tasks(weekTask);
        generateTask();
      }    
    });
  }


  /**
   * incorpora los datos, en principio de un fichero json, más tarde cambiará a backend
   */
  function fetchTasks(){
    fetch('../src/data/mocktasks.json')
    .then((response) => response.json())
    .then((json) => {
      loadTasks(json);
    });
  }
/**
 * Se encarga de 
 * @param {*} plan
 */
  function weekTasks(p){
    plan = p; //cargamos los datos de la semana que nos ha llegado de la tarjeta

    loadDivTasksWeeks();
    createUnaTasksDiv();
    createWeekTaskDiv();
    createWeekDays();
    fetchTasks();
  }