// 함수 표현식
var factorial = function foo(n) {
    // 탈출 조건: n이 1 이하일때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    return n * factorial(n - 1);

    // 함수 이름을 자기 자신으로 재귀호출할 수 있다.
    // console.log(factorial === foo) // true
    // return n * foo(n-1);
};

console.log(factorial(5)); // 120