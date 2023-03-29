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
}


