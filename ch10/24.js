// ES6
var obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! Lee