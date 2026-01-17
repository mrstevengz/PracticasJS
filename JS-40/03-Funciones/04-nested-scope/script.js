function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    second();
}

first();

if (true) {
    const x = 100;

    if (x === 100) {
        const y = 200;
        console.log(x + y);
    }
}

//Function Declaration vs Expression

function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100));

//Function Expression

const addPlusSign = function(value) {
    return '+' + value
}

console.log(addPlusSign(200));