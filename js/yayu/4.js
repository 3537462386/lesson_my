function a () {
    let c = 1
    return function b () {
        //作用域
    }
}
const funcB  = a();
funcB();// 运行时可以找到定义时上下文的环境的s变量