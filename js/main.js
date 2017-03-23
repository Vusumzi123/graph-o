
var main = function(vars) {
  var scale = vars.scale;

    scaleChart();


  var resize = new Arrange(vars);
  var grid = new Grid(vars ,vars.grid, scale);
  var plotts = new Plotter(vars,vars.plotts[0]);
  var axis = new Axis(vars, vars.canvas);
  var options = new Options(vars);
  var steps = 1;
  var plotbtn = $("#Graficar1");


  function resz(){
    grid = new Grid(vars ,vars.grid, scale);
    plotts = new Plotter(vars,vars.plotts[0]);
    axis = new Axis(vars, vars.canvas);
    scaleChart();
    resize.Arrange();
    grid.drawGrid();
    axis.drawPlane();
  };


  function scaleChart(){
    var h = window.innerHeight-40;
    var w = window.innerWidth-40;
    vars.canvas.width=w;
    vars.canvas.height=h;
    vars.grid.width=w;
    vars.grid.height=h;
    vars.plotts[0].width=w;
    vars.plotts[0].height=h;
  };


  function getFormula(){
    var text = $('#formula1').val();
    //console.log(text); //debug text
    return text;
  };

  function test(){
    var c1 = new curve(2,vars);

    plotts.update();
    $("#formula").children(".pannel-containner").children(".collection").append(c1.canvas);
  };


  grid.drawGrid();
  axis.drawPlane();

  $('.function-inst').click(function(){plotts.handleInst($(this))});

  options.gridOpt.click(function(){grid.isActive(options.gridIsChecked())})
  //$(window).resize(resz);
  $(window).bind('resize',resz);
  plotbtn.click(function(){var formula = getFormula();plotts.plot(formula);});

  test();
}
