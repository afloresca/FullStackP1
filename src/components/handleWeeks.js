/**
 * Componente dedicado princiaplmente a la manipulación de los datos del modal que se muestra
 * al pulsar el botón "+ Añadir Semana". Creación de nuevas tarjetas de semana y su eliminación.
 * Validación de los datos del formulario del modal, tratamiento de los mismos para incrustarlos
 * en el HTML de las tarjetas. 
 */


// Identificamos el botón "Añadir".
const btnAddWeek = document.getElementById('btnAddWeek');

// Identificamos el modal.
const modal = document.getElementById('addWeekModal');

// Recogemos todos los datos que añadimos en el modal.
let nombreSemana = document.getElementById("nombre-semana");
let descripcion = document.getElementById("descripcion");
let fechaInicio = document.getElementById("fecha-inicio");
let fechaFin = document.getElementById("fecha-fin");
let color = document.getElementById("color");

// Recogemos los datos relativos al modal de confirmación
let deleteBtn = document.getElementById("deleteBtn");
let confirmModal = document.getElementById("confirm-modal");
let confirmTrueBtn = document.getElementById("confirm-yes");
let confirmFalseBtn = document.getElementById("confirm-no");

// Añadimos el "listener" para que cada vez que se haga click enel botón "Añadir" se ejecute la siguiente funcion
btnAddWeek.addEventListener('click', function () {

    // Validacion de campos obligatorios
    if(nombreSemana.value === '' || color.value === '' || fechaInicio.value === '' || fechaFin.value === '') {
        alert('Debes rellenar todos los campos obligarorios');
        return false;
    } 
    
    else {

        // Crear un nuevo elemento de div para la tarjeta
        let nuevaTarjeta = document.createElement("div");

        // Agregar las clases necesarias para la organización de las mismas por pantalla
        nuevaTarjeta.classList.add("col-sm-4");

        // Crear el contenido de la tarjeta utilizando los valores del formulario y los estilos de bootstrap
        nuevaTarjeta.innerHTML = `
            <div class="card mb-3" style="background-color: ${color.value};">
                <div class="card-body">
                    <h5 class="card-title">${nombreSemana.value}</h5>
                    <p class="card-text">${descripcion.value}</p>
                    <p class="card-text"><strong>Fecha inicio:</strong> ${fechaInicio.value}</p>
                    <p class="card-text"><strong>Fecha fin:</strong> ${fechaFin.value}</p>
                    <button class="btn btn-primary"> Acceder </button>
                    <button class="btn btn-danger" onClick="deleteWeek(this.parentNode.parentNode.parentNode)"> Eliminar </button>
                </div>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        let contenedorSemanas = document.getElementById("weekContainer");
        contenedorSemanas.appendChild(nuevaTarjeta);

        // Limpiamos los valores del formulario
        nombreSemana.value = '';
        descripcion.value = '';
        fechaInicio.value = '';
        fechaFin.value = '';
        color.value = '';
    }
})

// Añadimos función para eliminar las tarejetas.
function deleteWeek(week) {
    week.remove();
    $('#confirmModal').modal('hide');
}
