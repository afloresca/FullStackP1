
 let  id = "";
 let  num_semana = -1;
 let  nombre = "";
 let  color = "";
 let  descripcion = "";
 let  year = -1;
 let  fechaInicio = "99-99-9999";
 let  cardParms ="";
 let vacaciones ="";


function cards(card) {
    this.id = card.id;
    this.num_semana = card.num_semana;
    this.nombre = card.nombre;
    this.color = card.color;
    this.descripcion = card.descripcion;
    this.year = card.year;
    this.fechaInicio = calculaPrimerDiaSemana(this.year, this.num_semana).toLocaleDateString("es-ES");
    this.vacaciones = card.vacaciones;
    this.cardParms = JSON.stringify(card).replaceAll('"', "'"); 
    createDomCard();
}



function getDivIdCard(){
    return "card" + this.id;
}
/**
 * crea el contenedor de semanas
 */
function createDomCard(){
    let weekContainer = document.getElementById("weekContainer");
    let newCard = document.createElement("div");
    newCard.classList.add("col-sm-4");
    newCard.setAttribute("id", getDivIdCard());
    newCard.innerHTML = getHtmlCard()
    weekContainer.appendChild(newCard);
}

/**
 * retorna el codigo html para las cards de semana
 * @returns html
 */
function getHtmlCard(){
    let html = 
    `<div  class="card mb-3 p-2" style="background-color: ${this.color}; border: 1px solid DEE2E6;  border-radius: 18px">
        <div class="card-body">
            <div class="d-flex justify-content-between">
            <h5 class="card-title "><strong>${this.nombre}</strong></h5>`+  ((this.vacaciones === "S") ? `<strong>¡VACACIONES!</strong>` : ``) + 
            `</div> <p class="card-text">${this.descripcion}</p>
                    <p class="card-text"><strong>Semana Número: </strong>${this.num_semana}</p>
                    <p class="card-text"><strong>Año: </strong>${this.year}</p>
                    <p class="card-text"><strong>Fecha Inicio Semana: </strong>${this.fechaInicio}</p>
                    <button class="btn btn-primary" onclick="weekTasks(${this.cardParms}, )"> Acceder </button>
                    <button class="btn btn-danger" onclick="deleteCardById('${this.getDivIdCard()}')"> Eliminar </button>
                </div>
            </div>`;
    return html;
}


/**
 * Funcion que abre el modal de confirmación de eliminar
 * @param {*} id 
 */

function deleteCardById(id){
    deleteModal.showModal();
    deleteBtn.addEventListener('click', function(){
        const week= document.getElementById(id);
        week.remove();
        deleteModal.close();
    })
    closeDeleteButton.addEventListener('click', function(){
        deleteModal.close();
    })
  }