// n만큼 어떤 일을 반복한다.
function repeat1(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}

repeat1(5); // 0 1 2 3 4

function repeat2(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) {
        if (i % 2) console.log(i);
    }
}

repeat2(5); // 1 3