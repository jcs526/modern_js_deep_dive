var num = 2;
var kind;

// if문
if (num > 0) {
    kind = '양수';
}
console.log(kind); // 양수

// if ... else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind); // 양수

// if ... else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수;'
} else {
    kind = '영';
}
console.log(kind); // 양수