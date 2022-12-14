import createElement from "./createElement";
export default function patchVnode(oldVnode, newVnode) {
  console.log("是同一个节点");
  //判断新旧vnode是否是同一个对象
  //如果是同一个 则什么都不做
  if (oldVnode == newVnode) return;
  //判断newVnode有没有text属性
  if (
    (newVnode.text != undefined && newVnode.children == undefined) ||
    newVnode.children.length == 0
  ) {
    //新节点有text属性
    console.log("new有text属性");
    if (oldVnode.text !== newVnode.text) {
      //如果新虚拟节点中的text和老的虚拟节点的text不同 那么直接让新的text写入老的elm中即可  如果老的elm中的是children,那么也会立即消失掉
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    //新节点没有text属性 有children
    console.log("new没有text属性");
    //判断老节点有没有有children
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      //老的有children  此时就是最复杂的情况
      console.log("老的有children");
    //   //所有未处理的节点的开头
    //   let un = 0;
    //   for (let i = 0; i < newVnode.children.length; i++) {
    //     let ch = newVnode.children[i];
    //     //再次遍历  看看老节点中的有没有子节点和新节点的子节点是一样的
    //     let isexist = false;
    //     for (let j = 0; j < oldVnode.children.length; j++) {
    //       if (
    //         oldVnode.children[j].sel == ch.sel &&
    //         oldVnode.children[j].key == ch.key
    //       ) {
    //         isexist = true;
    //       }
    //     }
    //     if (!isexist) {
    //       console.log(ch);
    //       let dom = createElement(ch);
    //       ch.elm = dom;
    //       if (un < oldVnode.children.length) {
    //         oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm);
    //       } else {
    //         oldVnode.elm.appendChild(dom);
    //       }
    //     } else {
    //       //让处理的节点指针下移
    //       un++;
    //     }
    //   }
    } else {
      //老的没有children  新的有children
      //清空老节点的内容
      oldVnode.elm.innerHTML = "";
      //遍历新节点法人子节点  创建dom 上树
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(dom);
      }
    }
  }
}
