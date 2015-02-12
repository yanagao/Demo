// 用apply强制改变函数的调用对象
var x = 0;
function test5(){
  alert(this.x);
}
var o={};
o.x = 1;
o.m = test5;
o.m.apply(); //0
o.m.apply(o); //1
