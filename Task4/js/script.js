let char = 0;
let num1 = ""
let num2 = ""
const display = document.getElementById("display");
const input = document.getElementById("input");
let operationPressed = false;
let answer = 0;
let equalsPressed = false;
let newOp = ""
let oldOp = ""
let opPressed = 0;

function allClear(){    
    input.innerText = "0"
    num1 = "0"
    num2 = "0"
    char = 0
}

function onClear(){
    console.log("hello")
    if (!operationPressed){
        num1 = num1.slice(0,num1.length-1);
        input.innerText = input.innerText.slice(0,input.innerText.length-1);
    }
    else{
        num2 = num2.slice(1,num2.length);
    }
}

function keys(n){
    const key = document.getElementById(n).value;
    if (equalsPressed){
        input.innerText = "0"
        num1 = "0"
        num2 = "0"
        char = 0
        equalsPressed = false;
    }
    if (input.innerText == "0"){
        input.innerText = ""
    }
    if (char != 10){
        input.append(key)
        display.append(input)
        char+=1
        if(!operationPressed){    
            num1 += key;
        }
        else{
            if (opPressed > 1){
                num1 = parseInt(num1)
                num2 = parseInt(num2)
                num1 = calculate(oldOp);
                num2 = "0"
                num2 += key;
                opPressed = 1
            }
            else{
                num2 += key;
            }
        }
    }
}

function operations(n){
    operationPressed = true;
    opPressed += 1
    input.innerText = "0"; 
    oldOp = newOp;
    newOp = n;
    char = 0;
    console.log("old: " + oldOp)
    console.log("new: " + newOp)
    console.log("---------------")
}

function calculate(op){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    console.log(num1 + " " + num2 + op)
    if(op == "+"){
        return num1 + num2;
    }
    else if(op == "-"){
        return num1 - num2;    
    }
    else if(op == "*"){
        return num1 * num2;    
    }
    else if(op == "/"){
        if (num2 == 0){
            return undefined
        } 
        else {
            quotient = (num1 / num2)
            quotient = quotient.toFixed(2)
            return quotient;
        }   
    }
}

function equals(){
    answer = calculate(newOp)
    if (answer < 999999999){
        input.innerText = answer;
    }
    else{
        input.innerText = undefined
    }
    answer = 0;
    operationPressed = false;
    num1 = "0"
    num2 = "0"
    equalsPressed = true;
    opPressed = 0;
}