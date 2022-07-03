// ES6
var prefix = 'prop';
var i = 0;

var obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적


console.log(obj);