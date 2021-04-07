var num1 = prompt("input a value", "7");
var num2 = prompt("input second value", "3");
var sign =prompt("input a sign +, -, *, /, %");

switch(sign)
{
    // if (sign == "+")
    case "+":
        var result = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
        default:
            console.log("Invalid operator")
}

alert(result);