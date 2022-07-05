// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
// console.dir은 consile.log와는 달리 함수 객체의 프로퍼티까지 출력된다.
console.dir(add) // add(x,y)

// 함수 호출
console.log(add(2, 5)); // 7