var Stack = function(){
  this.elements = new Array;
  this.index = 0;
}

Stack.prototype.push = function (ob) {
  this.elements.push(ob);
  this.index++;
};

Stack.prototype.show = function () {
  if(this.element.length!=0){
    var str = "{"+elements[0];
    for(var i=0;i<this.elements.length;i++){
      str = str+", "+this.elements[i]
    }
    str = str+"}";
    return str;
  }else return "{}";
};
