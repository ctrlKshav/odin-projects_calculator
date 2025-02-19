﻿function addTwoNumbers(op1,op2){
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
let op1Pressed,op2Pressed,operatorPressed;

const digitClicked=function(event){
    if(event.key===undefined)
        opTemp=event.target.textContent
    else
        opTemp=event.key

    operatorPressed=false
    if(eqFlag){
        operand1='',operand2='',operator=undefined;
        ansTemp=undefined
        eqFlag=false;
        opFlag=false
        dot.disabled=false
    }
    
    if(operand1!=='' && opFlag){
        operand2+=(opTemp)
        display.textContent=operand2
        op2Pressed=true
    }
    else{
        operand1+=(opTemp)
        display.textContent=operand1
        op1Pressed=true
    }

}
const operatorClicked=function(event){
    if(event.key===undefined)
        opTemp=event.target.textContent
    else
        opTemp=event.key
    op1Pressed=false
    op2Pressed=false
    operatorPressed=true
    console.log(opTemp);
    
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
        eqFlag=false

    }
    // console.log(eqFlag);
    
}

digitBtns.forEach(button => {
    button.addEventListener('click',digitClicked);
});

operatorBtns.forEach(button => {
    button.addEventListener('click',operatorClicked);
});

backspace=document.querySelector('#bak')
backspace.addEventListener('click',(event)=>{
    
    if(op1Pressed){
        operand1=operand1.slice(0,-1)
        display.textContent=operand1
        // console.log('test1');
        
    }
    else if(op2Pressed){
       operand2= operand2.slice(0,-1)
       display.textContent=operand2

        // console.log('test2');

    }
    else if(operatorPressed){
        operator=operator.slice(0,-1)
        display.textContent=operator

        // console.log('test3');
    }
    else{
        display.innerHTML='&nbsp;'
    }
})

//Apparently keypress only detects printable keys that's why i have used keydown
document.addEventListener('keydown',(event)=>{
    console.log(event);
    operators=['+','-','*','/','.','=']
    digits=['0','1','2','3','4','5','6','7','8','9']
    
    keyPressed=event.key    
    if(digits.includes(keyPressed))
        digitClicked(event)
    else if(operators.includes(keyPressed))
        operatorClicked(event)
    else if(keyPressed==='Enter')
        operatorClicked({key:'AC'})//workaround
    
    else if(keyPressed==='Backspace')
        backspace.click()
    else
        console.log('move on');
        

});