console.log("Program started\ncheck the debug option for more detailed info");

var globals;
globals = new Globals();

$('document').ready(function (){
   globals.initGlobals();
   globals.update();
  //console.log(vars);
  main();
});
