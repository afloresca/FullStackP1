/**
 * JS funciones generales de control del FrontEnd
 */

function weekTasks(a){
  console.log(a);
    var button = document.getElementById('acceder');
    location.assign('/public/weektasks.html');
  }
  
  Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };

  // función que cargará las tarjetas obtenidas de la lectura de datos
  function loadWeeks(jsonWeek){
    jsonWeek.forEach(weekCard => {
      cards(weekCard);
    });
  }

  // incorpora los datos, en principio de un fichero json
  function fetchWeeks(){
    fetch('../data/mock.json')
    .then((response) => response.json())
    .then((json) => {
      loadWeeks(json);
    });
  }

//carga las semanas.
document.onload = fetchWeeks();