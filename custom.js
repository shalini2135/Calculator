
document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#display").value = " ";
});

const backspace = () => {
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
};

const numberInput = (num) => {
    if (document.querySelector("#display").value == " ") {
        document.querySelector("#display").value = num;
    } else {
        document.querySelector("#display").value += num;
    }
};

const point = () => {
    const displayValue = document.querySelector("#display").value;
    if (displayValue.indexOf('.') === -1) {
        document.querySelector("#display").value += '.';
    }
};
function evaluate(expression) {
    return eval(expression); 
}
function evaluateExpression() {
    var expression = document.calculator.display.value;
    var result = evaluate(expression);
    document.calculator.display.value = result;
}

