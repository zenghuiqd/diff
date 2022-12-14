import h from "./mysnabbdom/h";
import patch from "./mysnabbdom/patch";

//创建虚拟节点
// var myVnode1 = h("h1",{},"你好");

var myVnode1 = h("ul", {}, [
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'C'},'C'),
]);

//得到盒子和按钮
const container = document.getElementById("container");
const btn = document.getElementById("btn");
//第一次上树
patch(container, myVnode1);

 const myVnode2 =h("ul", {}, [
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'M'},'M'),
  h('li',{key:'N'},'N'),
  h('li',{key:'C'},'C'),
]);

const myVnode3 =h("ul", {}, [
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'M'},'M'),
  h('li',{key:'N'},'N'),
  h('li',{key:'C'},'C'),
]);

const myVnode4 =h("ul", {}, [
  h('li',{key:'A'},'A'),
  h('li',{key:'B'},'B'),
  h('li',{key:'M'},'M'),
  h('li',{key:'N'},'N'),
  h('li',{key:'C'},'C'),
]);

 btn.onclick = function(){
  //第二次上树
  patch(myVnode1, myVnode2);
 }