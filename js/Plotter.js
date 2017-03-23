var Plotter = function(vars, can){
  var canvas = new CanvasHead(vars,can);
  var functions = $('.function-inst').toArray();


  this.handleInst = function(currentFunct){
    functions = $('.function-inst').toArray();
    for(var i=0;i<functions.length;i++){
      functions[i].classList.remove( "act" );
    }
    currentFunct.addClass('act');
  };

  function Draw(){};
  this.formula="x";
  this.steps;
  this.scale;

  this.Plotter=(function(){
    this.steps=0.01;
    this.scale=vars.scale;
    this.formula="";
    console.log("presition: "+this.steps);
  })();

  var setFormula=function(formula){
    this.formula=formula;
    console.log("formula is: "+this.formula);
    return false;
  };

  this.update = function(){
    console.log(canvas);
    console.log(functions);
    canvas = new CanvasHead(vars,can);
    functions = $('.function-inst').toArray();
    console.log(canvas);
    console.log(functions);
  };


  var anim = function(fps=60){
    Draw();
    //setTimeout(function(){
      window.requestAnimationFrame(anim);
    //},1000/fps);

  };

  function funct(formula,x,t){
    return eval(formula)*(-1);
  };

  function clearPlane(){
    canvas.clearCanvas();
    drawPlane();
  }

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

  this.plot=function(formula){

    console.log("plotting...");
    var x=0;
    canvas.clearCanvas();
    canvas.strokeWeight(3);
    //canvas.fill('rgba(255,255,255,0)')
    setFormula(formula);

    canvas.fill('rgba(33,6,243,0.0)');
    //canvas.fill('#0000ff');
    canvas.stroke('rgba(33,6,243,0.07)');

    //canvas.point(canvas.centerW+20,canvas.centerH+20);

    //setTimeout(function(){
      Draw = function(){

        //this.formula='x';
        canvas.point(canvas.centerW+(x*this.scale),canvas.centerH+funct(this.formula,x)*this.scale);
        canvas.point(canvas.centerW-(x*this.scale),canvas.centerH+funct(this.formula,-x)*this.scale);
        console.log("formula is: "+this.formula);
        x+=this.steps;
      };
    //},1000);
  };


  anim();
}


var curve = function(i,vars){
  this.index=i;
  this.canvas = "<li class=\"collection-item function-inst\"><a class=\"close-icon\" href=\"#\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></a><div><form class=\"col s12\"><div class=\"row\"><div class=\"col s2\"><div class=\"cir\" style=\"background-color: #2196F3;\">1</div></div><div class=\"input-field col s6\"><input id=\"formula1\" type=\"text\" class=\"validate\"><label for=\"last_name\">f(x)</label></div><div class=\"formula-name col s8\"><p class=\"formula-name\">formula 1</p></div><div class=\"col s4\"><a class=\"waves-effect waves-teal btn-flat\" id=\"Graficar1\">PLOTT</a></div></div></form></div></li>";

}
