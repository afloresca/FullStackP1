    // instance private fields
 let  id = "";
 let  num_semana = -1;
 let  nombre = "";
 let  color = "";
 let  descripcion = "";
 let  year = -1;
 let  fechaInicio = "9999-99-99";
 let  cardParms ="";


function cards(card) {
    this.id = card.id;
    this.num_semana = card.num_semana;
    this.nombre = card.nombre;
    this.color = card.color;
    this.descripcion = card.descripcion;
    this.year = card.year;
    this.fechaInicio = card.fechaInicio;
    this.cardParms = JSON.stringify(card).replaceAll('"', "'"); 
    createDomCard();
}

function cardsModal(modNombre, modDesc, modFecIni, modColor){
    this.id = modNombre;
    this.num_semana =  modNombre
    this.nombre = modDesc;
    this.color = modColor;
    this.descripcion = modDesc;
    this.year = 0000;
    this.fechaInicio = modFecIni;
    this.cardParms = this.id  + ', "' + modNombre + '", "' + modDesc + '", "' + modFecIni  +  modColor + '"';
    createDomCard();
}

function getDivIdCard(){
    return "card" + this.id;
}

function createDomCard(){
    let weekContainer = document.getElementById("weekContainer");
    console.log(weekContainer);
    let newCard = document.createElement("div");
    newCard.classList.add("col-sm-4");
    newCard.setAttribute("id", getDivIdCard());
    newCard.innerHTML = getHtmlCard()
    weekContainer.appendChild(newCard);
}

function getHtmlCard(){
    const html = 
    `<div  class="card mb-3 p-2" style="background-color: ${this.color}; border: 1px solid DEE2E6;  border-radius: 18px">
        <div class="card-body">
            <h5 class="card-title"><strong>${this.nombre}</strong></h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text"><strong>Semana Número: </strong>${this.num_semana}</p>
            <p class="card-text"><strong>Año: </strong>${this.year}</p>
            <p class="card-text"><strong>Fecha Inicio Semana: </strong>${this.fechaInicio}</p>
            <button class="btn btn-primary" onclick="weekTasks(${this.cardParms}, )"> Acceder </button>
            <button class="btn btn-danger" onclick="deleteCardById('${this.getDivIdCard()}')"> Eliminar </button>
        </div>
    </div>`;
    return html;
}

//Funcion que abre el modal de confirmación de eliminar
//recogemos el id del botón de eliminar b{n}, 
//cambiamos al id por el del div del card c{n}, y lo eliminamos 

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