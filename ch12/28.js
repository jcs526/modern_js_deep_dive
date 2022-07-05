function multiple(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
}

// 함수 호출은 반환값으로 평가된다.
var result = multiple(3, 5);
console.log(result); // 15