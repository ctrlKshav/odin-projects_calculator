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
let temp;

const digitClicked=function(event){
    temp=event.target.textContent
    display.textContent=temp

    if(operand1!==undefined)
        operand2=Number(temp)
    else
        operand1=Number(temp)
}
const operatorClicked=function(event){
    temp=event.target.textContent
    
    if(temp==='='){
        // console.log(operand1,operand2,operator);
        // console.log(operation(operand1,operand2,operator));
        ans=operation(operand1,operand2,operator)
        display.textContent=ans
        operand1=undefined,operand2=undefined,operator=undefined;
    }
    else
        display.textContent=temp
        operator=temp

}

digitBtns.forEach(button => {
    button.addEventListener('click',digitClicked);
});

operatorBtns.forEach(button => {
    button.addEventListener('click',operatorClicked);
});

