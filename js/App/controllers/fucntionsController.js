app.controller('fucntionsController', function(){
  this.counter = 0;
  this.activeIsnt = 0;
  this.functions = functions;
  this.newInstance = function(){
    functions.add(new functInstance(this.counter++));
    globals.debugLog("instance added");
  };
  this.deleteInstance=function(index){
    functions.del(index);
  };
  this.setAsActive=function(index){
    this.activeIsnt=index;
  };
  this.newInstance();

});

var functInstance = function(number){
  this.name="function "+ (number+1);
  this.id="funct"+number;
  this.formula="";
  this.W=window.innerWidth-40;
  this.H=window.innerHeight-40;
  this.index;
  this.color="";
  this.isConic;
  this.setColor=function(){
    this.color=globals.colors.cycle();
  };
  this.isActive = function(active,index){
    return (index==active);
  };
  this.plott = function(){
    try {
      var plotts = new Plotter(document.getElementById(this.id), this.color, this.formula);
      globals.debugLog("plotting: " + plotts.formula);

      if(this.isConic){
        plotts.plottConic();
      }else{
        plotts.plott();
      }
    } catch (e) {
        alert(e.name+" in: "+this.name+ " " + e.message);
        globals.debugLog(e.name+" in: "+this.name+ " " + e.message);
        return false;
    }
  }
  this.setColor();
};
