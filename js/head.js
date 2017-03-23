//recursos:
//http://smarchal.com/
//http://jscolor.com/
//http://www.cssmatic.com/

function Globals(){
  this.canvas;
  this.body;
  this.grid;
  this.sidePanne;
  this.scale = 30;
  this.options;
  this.colors = new Queue;



  this.Globals = function() {
    this.colors = pushCollors();
    this.canvas = document.getElementById('myCanvas');
    this.body = document.body;
    this.grid = document.getElementById('Grid');
    this.sidePanne= $(".scrolable-pannel");
    this.plotts= document.getElementsByClassName('plotter');
    this.options=$('#options');
    console.log('globals set...');
    return true;
  };

  this.Globals();

  function pushCollors(){
    var col = new Queue;
    col.add("#2196F3");
    col.add("#4CAF50");
    col.add("#F44336");
    col.add("#E91E63");
    col.add("#9C27B0");
    col.add("#673AB7");
    col.add("#3F51B5");
    col.add("#03A9F4");
    col.add("#00BCD4");
    col.add("#009688");
    col.add("#8BC34A");
    col.add("#CDDC39");
    col.add("#FFEB3B");
    col.add("#FFC107");
    col.add("#FF9800");
    col.add("#FF5722");
    col.add("#795548");

    return col;
  }

};
//Fin del encabezado
