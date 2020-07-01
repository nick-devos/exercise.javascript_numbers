function compute(expression) {
    // TODO - write method definition here
    //10-2*12
    var array = expression.split("");
    
    //extrapolates numbers from expression and stores them in an array
    var digits = "";
    for (let x = 0; x < array.length; x++) {
        if(array[x] != "*" && array[x] != "/" && array[x] != "+" && array[x] != "-") {
            digits += array[x];
        }
        else {
            digits += " ";
        }
    }
    var numbers = digits.split(" ");
    //console.log(numbers);

    //extrapolates operators in their respective order
    var operators = [];
    for (let x = 0; x < array.length; x++) {
        if(array[x] == "*" || array[x] == "/" || array[x] == "+" || array[x] == "-") {
            operators.push(array[x]);
        }
    } //console.log(operators);
    
    var value;  

    for(let x = 0; x < operators.length; x++) {
        if(operators[x] == "*") {
            value = numbers[x] * numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
        if (operators[x] == "/") {
            value = numbers[x] / numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
    }

    for(let x = 0; x < operators.length; x++) {
        if (operators[x] == "-") {
            value = numbers[x] - numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
        if(operators[x] == "+") {
            value = parseFloat(numbers[x]) + parseFloat(numbers[x+1]);
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
    }


    //cleanup -- without this again some are stopping one short, others are fine
    for(let x = 0; x < operators.length; x++) {
        if(operators[x] == "*") {
            value = numbers[x] * numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
        if (operators[x] == "/") {
            value = numbers[x] / numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
    }
    for(let x = 0; x < operators.length; x++) {
        if(operators[x] == "+") {
            value = parseFloat(numbers[x]) + parseFloat(numbers[x+1]);
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
        if (operators[x] == "-") {
            value = numbers[x] - numbers[x+1];
            operators.splice(x, 1);

            console.log(operators);
            numbers[x] = value;
            numbers.splice(x+1, 1);

            console.log(numbers);
        }
    }

    return numbers[0];
}