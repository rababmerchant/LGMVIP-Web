let char = 0;
let num1 = ""
let num2 = ""
const display = document.getElementById("display");
const input = document.getElementById("input");
let operationPressed = false;
let answer = 0;
let equalsPressed = false;
let op = ""
let opPressed = 0;

function allClear(){    
    input.innerText = "0"
    num1 = "0"
    num2 = "0"
    char = 0
}

function Clear(){

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
            num1 = key;
        }
        else{
            if (opPressed > 1){
                num1 = calculate();
                num2 = key;
            }
            else{
                num2 = key;
            }
        }
    }
}

function operations(n){
    operationPressed = true;
    opPressed += 1
    input.innerText = "0"; 
    op = n;
    char = 0;
}

function calculate(){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
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
        if (num2>0){
            return num1 / num2;
        }    
    }
}

function equals(){
    answer = calculate()
    input.innerText = answer;
    answer = 0;
    operationPressed = false;
    num1 = "0"
    num2 = "0"
    equalsPressed = true;
    opPressed = 0;
}