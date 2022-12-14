export default function createElement (vnode){
    // console.log('目的是把虚拟节点',vnode,'真正变为DOM');
//创建一个节点 这个节点现在还是孤儿节点
let domNode = document.createElement(vnode.sel);

//判断有子节点还是文本
if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    //说明内部是文字
    domNode.innerText = vnode.text;
    
} else if (Array.isArray(vnode.children) &&  vnode.children.length > 0) {
    //说明内部是子节点 就要递归创建子节点
    for(let i = 0; i < vnode.children.length; i++){
        //得到当前这个children
        let ch = vnode.children[i];
        // console.log(ch);
        //创建出它的dom  一旦调用createElement 意味着: 创建出dom了 并且它的elm属性指向了创建出的DOM,但是还没有上树 是一个孤儿节点
        let chDOM = createElement(ch);
        // console.log(chDOM);
        //上树
        domNode.appendChild(chDOM)
    }
}
// 补充elm属性
vnode.elm = domNode;
//返回elm,elm属性是一个纯dom对象
// console.log(domNode);
return domNode;
}