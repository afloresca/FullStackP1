/**
 * Componente dedicado princiaplmente a la manipulación de los datos del modal que se muestra
 * al pulsar el botón "+ Añadir Semana". Creación de nuevas tarjetas de semana y su eliminación.
 * Validación de los datos del formulario del modal, tratamiento de los mismos para incrustarlos
 * en el HTML de las tarjetas.
 */

// Identificamos el botón "Añadir".
const btnAddWeek = document.getElementById("btnAddWeek");

// Identificamos el modal.
const modal = document.getElementById("addWeekModal");


// Recogemos todos los datos que añadimos en el modal.
let nombreSemana = document.getElementById("nombre-semana");
let descripcion = document.getElementById("descripcion");
let fechaInicio = document.getElementById("fecha-inicio");
let fechaFin = document.getElementById("fecha-fin");
let color = document.getElementById("color");

// Recogemos los datos relativos al modal de confirmación
let deleteModal = document.getElementById('deleteModal');
let deleteBtn = document.getElementById("deleteBtn");
let confirmModal = document.getElementById("confirm-modal");
let confirmTrueBtn = document.getElementById("confirm-yes");
let confirmFalseBtn = document.getElementById("confirm-no");
let closeDeleteButton = document.getElementById('btnCloseDeleteModal')
let closeButton = document.getElementById('btnCloseWeekModal');

// Funcion que abre el modal tras tocar el botón de añadir semana
 function addWeekModal() {
    modal.showModal();
 
 }
// Función que cierra los modales al pulsar el botón de cerrar
 closeButton.addEventListener('click', function(){
    closeButton.parentNode.parentNode.parentNode.close();
 })

 //Evento que cuando clickas en el boton añadir valida los campos del modal y añade la semana si son correctos
 btnAddWeek.addEventListener('click', function (){
    console.log('hola')
  // Validacion de campos obligatorios
  if (
    nombreSemana.value === "" ||
    color.value === "" ||
    fechaInicio.value === "" ||
    fechaFin.value === ""
  ) {
    console.log(nombreSemana.value)
    alert("Debes rellenar todos los campos obligarorios");
    return false;
  } else {
    // Crear un nuevo elemento de div para la tarjeta
    let nuevaTarjeta = document.createElement("div");

    // Agregar las clases necesarias para la organización de las mismas por pantalla
    nuevaTarjeta.classList.add("col-sm-4");

    // Crear el contenido de la tarjeta utilizando los valores del formulario y los estilos de bootstrap
    nuevaTarjeta.innerHTML = `
            <div class="card mb-3 p-2" style="background-color: ${color.value}; border: 1px solid #DEE2E6;
            border-radius: 18px">
                <div class="card-body">
                    <h5 class="card-title">${nombreSemana.value}</h5>
                    <p class="card-text">${descripcion.value}</p>
                    <p class="card-text"><strong>Fecha inicio:</strong> ${fechaInicio.value}</p>
                    <p class="card-text"><strong>Fecha fin:</strong> ${fechaFin.value}</p>
                    <button class="btn btn-primary"> Acceder </button>
                    <button class="btn btn-danger" onclick="deleteWeek(this.parentNode.parentNode.parentNode)"> Eliminar </button>
                </div>
            </div>
        `;

    // Agregar la tarjeta al contenedor
    let contenedorSemanas = document.getElementById("weekContainer");
    contenedorSemanas.appendChild(nuevaTarjeta);

    // Limpiamos los valores del formulario
    nombreSemana.value = "";
    descripcion.value = "";
    fechaInicio.value = "";
    fechaFin.value = "";
    color.value = "";
    modal.close();
  }
}
);

//Funcion que abre el modal de confirmación de eliminar
function deleteWeek(week){
    deleteModal.showModal();
    deleteBtn.addEventListener('click', function(){
        week.remove()
        deleteModal.close();
    })
    closeDeleteButton.addEventListener('click', function(){
        deleteModal.close();
    })
}

function weekTasks(){
  var button = document.getElementById('acceder');
  location.assign('/public/weektasks.html');
}












