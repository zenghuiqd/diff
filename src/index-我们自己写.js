import h from "./mysnabbdom/h";
console.log(
  h("div", {}, [
    h("div", {}, "嘻嘻"),
    h("div", {}, "哈哈"),
    h("div", {}, "嘻嘻"),
  ])
);