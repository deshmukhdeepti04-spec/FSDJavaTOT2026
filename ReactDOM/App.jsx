// console.log("Hiiii....")
const parent=document.getElementById('container')
const root=ReactDOM.createRoot(parent)
// const h2=React.createElement("h2",{style:{color:'red'}},"Welcome to React");
// const li1=React.createElement("li",{},"Java Programming");
// const li2=React.createElement("li",{},"C++ Programming");
// const li3=React.createElement("li",{},"Python Programming");
// const li4=React.createElement("li",{},"C Programming");

// const ul=React.createElement("ul",{},li1,li2,li3,li4);
// const img=React.createElement("img",{src:"panther.png",style:{height:'100', width:'100'}});
// const div=React.createElement("div",{},h2,img,ul);

const h2=<h2>Hello World of React</h2>;


root.render(h2);

