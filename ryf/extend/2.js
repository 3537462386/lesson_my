let cai = {
    nickname: '大帅哥',
    sayHi() {
        console.log('Hi');
    }
}
let aTao = {
    // nickname: '帅哥'
};
aTao.__proto__ = cai
console.log(aTao.nickname);