// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2)
        console.log(i);
};

repeat(5,logOdds);