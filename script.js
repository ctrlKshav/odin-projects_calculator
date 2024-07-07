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
        return addTwoNumbers(op1,op2)
    else if(opr==='-')
        return subtractTwoNumbers(op1,op2)
    else if(opr==='*')
        return multiplyTwoNumbers(op1,op2)
    else if(opr==='/')
        return divideTwoNumbers(op1,op2)
    else
        return 'Syntax Error'
}

display=document.querySelector('.display')
digitBtns=document.querySelectorAll('.numbers .btn')
operatorBtns=document.querySelectorAll('.operators .btn')
let operand1='',operand2='',operator;
let opTemp,ansTemp;
let eqFlag=false,opFlag=false

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
    }

    else if(opTemp==='='){
        // console.log(operand1,operand2,operator);
        // console.log(operate(operand1,operand2,operator));
        ansTemp=operate(operand1,operand2,operator)
        display.textContent=ansTemp
        operand1="",operand2="",operator=undefined;
        eqFlag=true
    }
    else if(opTemp==='.'){
        if(opFlag){
            operand2+='.'
            display.textContent=operand2
        }
        else {
            operand1+='.'
            display.textContent=operand1
        }
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

    }
    // console.log(eqFlag);
    
}

digitBtns.forEach(button => {
    button.addEventListener('click',digitClicked);
});

operatorBtns.forEach(button => {
    button.addEventListener('click',operatorClicked);
});

