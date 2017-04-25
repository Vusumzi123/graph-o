
function Plotter(can, color, form){
  this.setCanvas(can);
  this.setColor(color);
  this.setFormula(form);

}

Plotter.inherits(PlotterModel);

Plotter.method('plott',function(){
  var x = 0;

  console.log("starting plotter...");

  this.canvas.clearCanvas();
  this.canvas.strokeWeight(3);
  this.canvas.fill(this.color);
  this.canvas.stroke(this.color);

  function anim(draw){
    var draws = draw();
    draws();
    window.requestAnimationFrame(anim);
  };

  this.draw = function(){

  //for(var i = 0;i<1000; i++){
    console.log("x = "+ x + "; y = "+this.funct(x));
    this.canvas.point(this.canvas.centerW+(x*globals.scale),this.canvas.centerH+this.funct(x)*globals.scale);
    this.canvas.point(this.canvas.centerW-(x*globals.scale),this.canvas.centerH+this.funct(-x)*globals.scale);

    x+=globals.presition;
  };





  console.log(this.draw.toString());
  //eval("("+this.draw.toString()+")()");
  new anim(this.draw);
});
