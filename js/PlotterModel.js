function PlotterModel(can, color, form){
  this.canvas;
  this.formula;
  this.color;

  this.setColor = function(color){
    this.color = color;
  };

  this.setCanvas = function(canv){
    this.canvas = new CanvasHead(canv);
  };

  this.setFormula = function(formula){
    this.formula = formula;
  };

  this.getFormula = function(){
    return this.formula;
  };

  this.draw = function(){console.log("drawing...");};


  /*this.Plotter = function(){
    this.setCanvas(can);
    this.setColor(color);
    this.setFormula(form);
    this.anim();
  };
  this.Plotter();*/
};

PlotterModel.method('funct',function(x,t){
 return eval(this.formula)*(-1);
});
