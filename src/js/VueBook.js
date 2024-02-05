// 전개연산자(spread 연산자) - 객체 및 배열에서 사용가능
let obj1 = {name: "박문수", age:20};
let obj2 = obj1;
let obj3 = {...obj1}; // 객체의 내부값은 동일하지만 바라보는 주소가 다른 객체가 된다. => spread 연산자
let obj4 = {...obj1, email: {email : "zxcvb1132@naver.com"}} // 기존 요소 그대로 사용하면서 새로운 요소 추가

obj2.age = 19;

let arr1 = [100, 200, 300];
let arr2 = ["hello", ...arr1, "world"]

console.log("arr2")


// Proxy 구조를 기반으로 vue.js가 구성되어 있다.

let obj = {name : "홍길동" , age : 20};

const proxy = new Proxy(obj, {
    get: function(target, key){
        console.log("##get :" + key);
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`);
        
        return target[key]
    },
    set: function(target, key, value){
        console.log("## set :" + key);
        if(!target[key]) throw new Error(`존재하지 않는 속성(${key}) 입니다.`);
        
        target[key] = value;

    }
})

console.log(proxy.name); //읽기 작업
proxy.name = "이몽룡";
proxy.age = 30;


console.log(proxy.name); //읽기 작업
console.log(proxy.age); //읽기 작업