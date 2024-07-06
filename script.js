function addTwoNumbers(op1,op2){
    return op1+op2;
}
function subtractTwoNumbers(op1,op2){
    return op1-op2;
}
function multiplyTwoNumbers(op1,op2){
    return op1*op2;
}
function divideTwoNumbers(op1,op2){
    return op1/op2;
}
function operation(op1,op2,opr){
    if(opr==='+')
        return addTwoNumbers(op1,op2)
    else if(opr==='-')
        return subtractTwoNumbers(op1,op2)
    else if(opr==='*')
        return multiplyTwoNumbers(op1,op2)
    else if(opr==='/')
        return divideTwoNumbers(op1,op2)
    else
        return 'invalid'
}

display=document.querySelector('.display')
digitBtns=document.querySelectorAll('.numbers .btn')
operatorBtns=document.querySelectorAll('.operators .btn')
let operand1,operand2,operator;
let opTemp,ansTemp;
let flag=false

const digitClicked=function(event){
    opTemp=event.target.textContent
    display.textContent=opTemp

    if(operand1!==undefined)
        operand2=Number(opTemp)
    else
        operand1=Number(opTemp)
}
const operatorClicked=function(event){
    opTemp=event.target.textContent
    
    if(opTemp==='AC'){
        operand1=undefined,operand2=undefined,operator=undefined;
        opTemp=undefined,ansTemp=undefined
        flag=false;
        display.innerHTML='&nbsp;'
    }

    else if(opTemp==='='){
        // console.log(operand1,operand2,operator);
        // console.log(operation(operand1,operand2,operator));
        ansTemp=operation(operand1,operand2,operator)
        display.textContent=ansTemp
        operand1=undefined,operand2=undefined,operator=undefined;
        flag=true
    }
    else{
        if(flag)
            operand1=ansTemp;
        display.textContent=opTemp
        operator=opTemp
    }
    // console.log(flag);
    
}

digitBtns.forEach(button => {
    button.addEventListener('click',digitClicked);
});

operatorBtns.forEach(button => {
    button.addEventListener('click',operatorClicked);
});

