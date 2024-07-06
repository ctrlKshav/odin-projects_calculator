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

let operand1,operand2,operator;
function operation(op1,op2,opr){
    if(opr==='+')
        addTwoNumbers(op1,op2)
    else if(opr==='-')
        subtractTwoNumbers(op1,op2)
    else if(opr==='*')
        multiplyTwoNumbers(op1,op2)
    else if(opr==='/')
        divideTwoNumbers(op1,op2)
    else
        return 'invalid'
}


display=document.querySelector('.display')
buttons=document.querySelectorAll('.btn')
let value;
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        value=e.target.textContent
        display.textContent=value
    })
    
});
