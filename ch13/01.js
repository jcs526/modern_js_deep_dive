function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있따.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y); // 2 5

    add(2, 5);

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(x, y);
}