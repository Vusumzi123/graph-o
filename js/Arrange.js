var Arrange = function(vars){
  this.sidePanne=$(".scrolable-pannel");
  this.Arrange = function(){
    this.sidePanne=$(".scrolable-pannel");
    var h = window.innerHeight;
    h=h-112;
    h=h-70;
    this.sidePanne.css("max-height",h);
  }
  this.sidePanne.css("overflow-y", "auto");
  this.Arrange();
}
