/**
 * JS de Carga y destrucción de modales
 */

//Main Dialogs
function modalDialog(){
    modalAddWeek();
    modalDeleteConfirmation();
}

//AddWeek Modal Form

function modalAddWeek(){
    body = document.body; 
    dialog = document.createElement("dialog");
    dialog.classList.add("col-sm-4");
    dialog.setAttribute("id", "addWeekModal");
    dialog.setAttribute("style", "border: 1px solid black; border-radius: 18px;");
    div = document.createElement("div");
    div.classList.add("d-flex");
    div.classList.add("flex-column");
    div.classList.add("p-3");
    div.classList.add("row-gap-3");
    div.classList.add("justify-content-center");
    div.innerHTML = modalAddWeekHtml();
    dialog.appendChild(div);
    body.appendChild(dialog);
}

function modalAddWeekHtml(){
    html = `<h4 class="modal-title" id="myModalLabel">Formulario de registro de semana</h4>
    <form id="newWeekForm" class="d-flex flex-column row-gap-1">
      <div class="form-group">
        <label for="nombre-semana" class="col-form-label"><strong style="color: red;">*</strong> Nombre semana:</label>
        <input type="text" class="form-control" id="nombre-semana" required>
      </div>
      <div class="form-group">
        <label for="descripcion" class="col-form-label">Descripción:</label>
        <textarea class="form-control" id="descripcion"></textarea>
      </div>
      <div class="form-group">
        <label for="color" class="col-form-label"><strong style="color: red;">*</strong>Seleciona Color</span>
        <input type="color" class="form-select border border-1"  id="color" value = "#edede9" required> 
      </div>
      <div class="form-group">
        <label for="numSemana" class="col-form-label"><strong style="color: red;">*</strong>Número Semana</label>
        <input type="number" min="1" max="${new Date().getMaxWeeksPerYear()}" step="1" value="${new Date().getWeekNumber()}" class="form-control" id="numSem-add">
        <label for="year" class="col-form-label"><strong style="color: red;">*</strong>Año</label>
        <input type="number" min="1900" max="2099" step="1" value="${new Date().getFullYear()}" class="form-control" id="año-add">

      <!--  <label for="fecha-inicio" class="col-form-label"><strong style="color: red;">*</strong>Fecha inicio:</label>
        <input type="date" class="form-control" id="fecha-inicio" required> -->
      </div>
    </form>
    <div class="modal-footer pt-2 d-flex gap-2">
      <button type="button" class="btn btn-secondary" id="btnCloseWeekModal">Cerrar</button>
      <button type="button" class="btn btn-primary"  id="btnAddWeek">Añadir</button>
    </div>
    `
    return html;
}

//Delete Confirmation Modal
function modalDeleteConfirmation(){
    var body = document.body; 
    dialog = document.createElement("dialog");
    dialog.setAttribute("id", "deleteModal");
    dialog.setAttribute("style", "border: 1px solid black; border-radius: 18px;");
    div = document.createElement("div");
    div.classList.add("d-flex");
    div.classList.add("flex-column");
    div.classList.add("p-3");
    div.classList.add("text-center");   
    div.classList.add("row-gap-2");
    div.classList.add("justify-content-center");
    div.innerHTML = modalDeleteConfirmationHtml();
    dialog.appendChild(div);
    body.appendChild(dialog);
}
function modalDeleteConfirmationHtml(){
    html = `<h4>¿Estás seguro que deseas eliminar esta semana?</h4>
    <div class="d-flex flex-row column-gap-1 justify-content-center">
    <button type="button" class="btn btn-secondary" id="btnCloseDeleteModal">Cerrar</button>
    <button type="button" class="btn btn-danger"  id="deleteBtn">Eliminar</button>
    </div>
    `
    return html;
}


//Tasks Weeks MODAL 





//AddTarea Modal Form

function modalAddTask(){

}

function modalAddTaskHtml(){
    html = `
    `
    return html;
}

