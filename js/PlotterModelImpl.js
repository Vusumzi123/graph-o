
function Plotter(can, color, form){

  var canvas;
  this.formula;
  this.color;

  this.setColor = function(color){
    this.color = color;
  };

  this.setCanvas = function(canv){
    canvas = new CanvasHead(canv);
  };

  this.setFormula = function(formula){
    this.formula = formula;
  };

  this.getFormula = function(){
    return this.formula;
  };

  this.setCanvas(can);
  this.setColor(color);
  this.setFormula(form);
  var draw = function(){};
  function anim(){
    draw();
    window.requestAnimationFrame(anim);
  };


  this.plott = function(){
    var x = 0;
    var formula = this.formula;
    var x1;
    var x2;
    var y1;
    var y2;

    globals.debugLog("starting plotter...");

    canvas.clearCanvas();
    canvas.strokeWeight(3);
    canvas.fill(this.color);
    canvas.stroke(this.color);

    draw = function(){
      x1 = canvas.centerW+(x*globals.scale);
      x2 = canvas.centerW+((x+globals.presition)*globals.scale);
      y1 = canvas.centerH+funct(formula, x)*globals.scale;
      y2 = canvas.centerH+funct(formula, (x+globals.presition))*globals.scale;

      if(distance(x1,x2,y1,y2)<Math.abs(y1)){
        canvas.line(x1,y1,x2,y2);
        canvas.line(canvas.centerW-(x*globals.scale),canvas.centerH+funct(formula, -x)*globals.scale,canvas.centerW-((x+globals.presition)*globals.scale),canvas.centerH+funct(formula, -(x+globals.presition))*globals.scale)
      }

      //canvas.point(canvas.centerW+(x*globals.scale),canvas.centerH+funct(formula, x)*globals.scale);
      //canvas.point(canvas.centerW-(x*globals.scale),canvas.centerH+funct(formula, -x)*globals.scale);
      x+=globals.presition;
    };

    anim();
  };
};
