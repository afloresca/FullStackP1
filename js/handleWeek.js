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
modNombre = document.getElementById("nombre-semana");
modDesc = document.getElementById("descripcion");
modFecIni = document.getElementById("fecha-inicio");
modFecFin = document.getElementById("fecha-fin");
modColor = document.getElementById("color");

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
    modNombre.value === "" ||
  //  modColor.value === "" || con la paleta siempre va a tener un color
    modFecIni.value === "" ||
    modFecFin.value === ""
  ) {
    console.log(modNombre.value)
    alert("Debes rellenar todos los campos obligarorios");
    return false;
  } else {

    //creamos la nueva card de semanal
    cardsModal(modNombre.value, modDesc.value, modFecIni.value, modFecFin.value,  modColor.value);
 
    // Limpiamos los valores del formulario

    modNombre.value = "";
    modDesc.value = "";
    modFecIni.value = "";
    modFecFin.value = "";
    modColor.value = DEFAULT_COLOR; 
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









