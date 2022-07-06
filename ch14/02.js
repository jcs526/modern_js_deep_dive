var x = 'global';

function foo() {
    console.log(x); // global(x) / undefined(o)
    var x = 'local';
}

foo();
console.log(x); // global