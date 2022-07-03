var circle = {
    radius: 5, // property

    // 원의 지름
    getDiameter: function () { // 메서드
        return 2 * this.radius; // this는 circle
    }
};

console.log(circle.getDiameter); // 10