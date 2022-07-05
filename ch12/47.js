
function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;

    // 함수 이름을 자기 자신으로 재귀호출할 수 있다.
    // console.log(factorial === foo) // true
    // return n * foo(n-1);
};

console.log(factorial(0)); // 0! = 0
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2
console.log(factorial(3)); // 3! = 6
console.log(factorial(4)); // 4! = 24
console.log(factorial(5)); // 5! = 120