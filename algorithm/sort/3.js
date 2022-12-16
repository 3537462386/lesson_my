let x =1 ,y=2; // 简单
let o = {name:'卢'};// 对象 引用
let z;
let b=o;    //值的拷贝，引用
b.name = '飞飞';
console.log(o.name);
z=x;
x=y;
y=z;
console.log(x,y);