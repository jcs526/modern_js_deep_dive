var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언되 전역 변수 i가 있으므로 중복 선언된다.
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치않게 i 변수의 값이 변경되었다.
console.log(i); // 5