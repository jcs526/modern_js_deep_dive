function add(x, y) {
    console.log(arguments);
    // Arguments(3) { '0': 2, '1': 5, '2': 10 }

    return x + y;
};

console.log(add(2, 5, 10)); // 7