var Plotter = function(can, color, form){
  var canvas = new CanvasHead(can);

  function Draw(){};
  this.formula;
  this.steps;
  this.scale;

  this.Plotter=(function(){
    this.steps=0.01;
    this.scale=globals.scale;
    this.formula=form;
    console.log("presition: "+this.steps);
  })();

  var setFormula=function(formula){
    this.formula=formula;
    //console.log("formula is: "+this.formula);
  };


  var anim = function(){
    Draw();
    console.log("plotting: "+this.formula);
    //setTimeout(function(){
      window.requestAnimationFrame(anim);
    //},1000/fps);

  };

  function funct(formula,x,t){
    return eval(formula)*(-1);
  };


  this.fastPlot=function(x){
    var x1=canvas.centerW+x*this.scale, y1=canvas.centerH+funct(this.formula,x)*this.scale, x2=canvas.centerW+(x+this.steps)*this.scale, y2 = canvas.centerH+funct(this.formula,(x+this.steps))*this.scale;
    canvas.fill('rgba(33,6,243,0.06)');
    canvas.stroke('rgba(33,6,243,0.06)');
    canvas.strokeWeight(0.5);

    canvas.point(x1,y1);
    if(x>canvas.centerW){
      return true;
    }
    x+=this.steps;
    this.fastPlot(x);
  }

  this.plot=function(){

    var x=0;
    canvas.clearCanvas();
    canvas.strokeWeight(3);
    canvas.fill(color);
    canvas.stroke(color);

      Draw = function(){

        canvas.point(canvas.centerW+(x*this.scale),canvas.centerH+funct(this.formula,x)*this.scale);
        canvas.point(canvas.centerW-(x*this.scale),canvas.centerH+funct(this.formula,-x)*this.scale);
        x+=this.steps;
      };
  };

  //setFormula(form);
  anim();
};
