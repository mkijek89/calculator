// Mathematical operations
const add = function(a,b){
    return a+b;
}

const substract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(a, operator, b){
    switch(operator){
        case '+':
            return add(a,b);
            break;
        case '-':
            return substract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
}

const display = document.getElementById('display');

//Buttons

const printValue = function(a){
    let content = '';

    if(a != 'c' && a != '='){
        display.textContent += a;
        content += a;
    } else if (a == 'c') {
        display.textContent= '';
        content = '';
    }
    
    
}

const btns = document.querySelectorAll('.btn');
const equalizer = document.getElementById('equals');

btns.forEach(btn => {
    btn.addEventListener('click', function(){
        printValue(btn.value);
    })
    
});

equalizer.addEventListener('click', function(){
    let result;
    let arr = display.textContent.split(' ')
    arr = arr.join(" ").trim().split(' ');
    result = operate(parseInt(arr[0]),arr[1],parseInt(arr[2]));
    display.textContent = result;
})
/* } else if (a == '=') {
    arr = content.split(' ');
    display.textContent = operate(arr[0],arr[1],arr[2]);
    console.log(arr);
} */
parseInt