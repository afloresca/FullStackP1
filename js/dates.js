// Añadimos un nuevo método a la clase Date para calcular el número de semana de una fecha
Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };

//Añadimos funcion a la clase Date para que devuelva el número de semanas por año
Date.prototype.getMaxWeeksPerYear = function(){
    dateI = new Date(this.getFullYear(), '1', '1');
    dateF = new Date(this.getFullYear() +1, '1', '1');
    weeks = Math.ceil((((dateF - dateI) / 86400000) + 1)/7);
    return weeks;
};

Date.prototype.getFirstDayWeek = function(){
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())); 
  let numdia = this.getDay();
  if (numdia === 0) numdia = 7; //domingo
  let aLunes = numdia-1; //el dia 1 es lunes
  d.setDate(d.getDate() -  aLunes);
  return d;
};

//comprueba si numero semana es váldo paar un año
function  checkYearWeekNumber(modYear, modNumSem){
  let ok = false;
  try{
    let year = parseInt(modYear);
    let numSem = parseInt(modNumSem);
    d = new Date(year, 0, 1);
    ok = ((numSem < 0) || (numSem >d.getMaxWeeksPerYear()));
  }
  catch (e) {
    ok = false;
  }
  return ok;
} 

function addDaysToDate(date, days){
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}

//calcula primer dia de la semana
function calculaPrimerDiaSemana(modYear, modNumSem){
let d;
  try{
    let year = parseInt(modYear);
    let numSem = parseInt(modNumSem);
    let numdias = numSem * 7;
    d = addDaysToDate(new Date(2023, 0, 1), numdias).getFirstDayWeek();

  }
  catch (e) {
    console.log(e);
  }
  return d;
}

