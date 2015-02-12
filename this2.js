// new 调用一个构造函数
var x = 2;
function test2(){
  this.x = 1;
}
var o = new test2();
alert(x); // 2
