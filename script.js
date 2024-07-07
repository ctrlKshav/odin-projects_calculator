function addTwoNumbers(op1,op2){
    return Number(op1)+Number(op2);
}
function subtractTwoNumbers(op1,op2){
    return Number(op1)-Number(op2);
}
function multiplyTwoNumbers(op1,op2){
    return Number(op1)*Number(op2);
}
function divideTwoNumbers(op1,op2){
    return op2=='0'?'Congrats! You just broke the fabric of reality':Number(op1)/Number(op2);
}
function operate(op1,op2,opr){
    if(op1==='' || op2==='' || opr==='')
        return 'Syntax Error'
    if(opr==='+')
        return Number((addTwoNumbers(op1,op2)).toFixed(2))
    else if(opr==='-')
        return Number((subtractTwoNumbers(op1,op2)).toFixed(2))
    else if(opr==='*')
        return Number((multiplyTwoNumbers(op1,op2)).toFixed(2))
    else if(opr==='/')
        return Number((divideTwoNumbers(op1,op2)).toFixed(2))
    else
        return 'Syntax Error'
}
dot=document.querySelector('#dot')
const toggleDot=function(){
    if(dot.disabled)
        dot.disabled=false
    else
        dot.disabled=true
}

display=document.querySelector('.display')
digitBtns=document.querySelectorAll('.numbers .btn')
operatorBtns=document.querySelectorAll('.operators .btn')
let operand1='',operand2='',operator;
let opTemp,ansTemp;
let eqFlag=false,opFlag=false,dtFlag=false

const digitClicked=function(event){
    opTemp=event.target.textContent
    
    if(operand1!=='' && opFlag){
        operand2+=(opTemp)
        display.textContent=operand2
    }
    else{
        operand1+=(opTemp)
        display.textContent=operand1
    }

}
const operatorClicked=function(event){
    opTemp=event.target.textContent
    if(opTemp==='AC'){
        operand1='',operand2='',operator=undefined;
        opTemp=undefined,ansTemp=undefined
        eqFlag=false;
        display.innerHTML='&nbsp;'
        opFlag=false
        dot.disabled=false

    }

    else if(opTemp==='='){
        // console.log(operand1,operand2,operator);
        // console.log(operate(operand1,operand2,operator));
        ansTemp=operate(operand1,operand2,operator)
        display.textContent=ansTemp
        operand1="",operand2="",operator=undefined;
        eqFlag=true
        dot.disabled=true
    }
    else if(opTemp==='.'){
        dtFlag=true;
        if(opFlag){
            operand2+='.'
            display.textContent=operand2
        }
        else {
            operand1+='.'
            display.textContent=operand1
        }
        dot.disabled=true
    }

    else{
        if(eqFlag)
            operand1=ansTemp;
        else if(opFlag){
            ansTemp=operate(operand1,operand2,operator)
            display.textContent=ansTemp
            operand1=ansTemp
            operand2=''
        }
        // display.textContent=opTemp
        operator=opTemp
        opFlag=true
        dot.disabled=false

    }
    // console.log(eqFlag);
    
}

digitBtns.forEach(button => {
    button.addEventListener('click',digitClicked);
});

operatorBtns.forEach(button => {
    button.addEventListener('click',operatorClicked);
});

