//var model = function(){
var colors = pushCollors();

(function(){
app = angular.module('graphO', []);

app.controller('PlotterController',function(){
  this.counter = 0;
  this.graphs = functions;
});

app.controller('fucntionsController', function(){
  this.counter = 0;
  this.activeIsnt = 0;
  this.functions = functions;
  this.newInstance = function(){
    functions.add(new functInstance(this.counter++));
  };
  this.deleteInstance=function(index){
    functions.del(index);
  };
  this.setAsActive=function(index){
    this.activeIsnt=index;
  };

  this.newInstance();
});
})();

var functions = new Queue;

var functInstance = function(number){
  this.name="fuction "+ (number+1);
  this.id="funct"+number;
  this.formula="";
  this.W=window.innerWidth-40;
  this.H=window.innerHeight-40;
  this.plotts;
  this.index;
  this.color="";
  this.setColor=function(){
    this.color=colors.cycle();
  };
  this.setFormula=function(formula){
    this.formula = formula;
  };
  this.isActive = function(active,index){
    return (index==active);
  };
  this.plott = function(){
    var plotts= new Plotter(document.getElementById(this.id), this.color, this.formula);
    plotts.plot();
  }
  this.setColor();
};