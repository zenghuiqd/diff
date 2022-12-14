import vnode from "./vnode";

//编写一个低配版的h函数  这个函数必须接受三个参数  缺一不可
//相当于它的重载功能较弱
//也就是说 调用的时候形态必须是下面的三种之一
//h('div',{},'文字)
//h('div',{},[])
//h('div',{},h())

export default function (sel, data, c) {
  //判断参数的个数
  if (arguments.length != 3)
    throw new Error("对不起,h函数必须传入三个参数,我们是低配版h函数");
  //判断参数c的类型
  if (typeof c == "string" || typeof c == "number") {
    //说明现在调用h函数是形态①
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    //说明现在调用h函数是形态②
    let children = [];
    //遍历c
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel")))
        throw new Error("传入的第三个参数有项不是h函数");
        //这里不用执行c[i],因为你的测试语句中已经有了执行
        //此时只需要收集好就可以了
      children.push(c[i]);  
    }
    //循环结束了 就说明children手机完毕了 此时可以返回虚拟节点了 它有children属性的
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
    //说明现在调用h函数是形态②
    let children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("传入的第三个参数类型不对");
  }
}
