// 월을 영어로 변환한다. (11 => 'November')
var month = 11;
var monthName;

switch (month) {

    case 1: monthName = 'January';
        return;
    case 2: monthName = 'February';
        return;
    case 3: monthName = 'March';
        return;
    case 4: monthName = 'April';
        return;
    case 5: monthName = 'May';
        return;
    case 6: monthName = 'June';
        return;
    case 7: monthName = 'July';
        return;
    case 8: monthName = 'August';
        return;
    case 9: monthName = 'September';
        return;
    case 10: monthName = 'October';
        return;
    case 11: monthName = 'November';
        return;
    case 12: monthName = 'December';
        return;
    default: monthName = 'Invalid month';
}

console.log(monthName); // November