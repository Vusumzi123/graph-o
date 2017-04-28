app.controller('optionsController',function(){
  this.devTools = new dev();
});

function dev(){
  this.debug=globals.debug;
  globals.debug = this.debug;
  this.debugIsChecked = function(){
    if(this.debug){
      console.log(globals.log);
    }
    globals.debug = this.debug;
  };

};
