import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";


export default function patch (oldVnode, newVnode) {
  //判断传入的第一个参数是DOM节点还是虚拟节点
  if (oldVnode.sel == "" || oldVnode.sel == undefined) {
    //说明传入的第一个参数是DOM节点 那么接下来将DOM节点包装为虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }

  //判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
    patchVnode(oldVnode, newVnode);
  } else {
    // console.log('不是同一个节点,暴力拆除旧的,插入新的');
    let newVnodeElm = createElement(newVnode);
    //插入到老节点之前
    if (oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    }
    //删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
