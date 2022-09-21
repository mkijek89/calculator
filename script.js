const btns = document.querySelectorAll('.btn');
const equalizer = document.getElementById('equals');
const previous = document.getElementById('previous');
const current = document.getElementById('current');
const dot = document.getElementById('dot');

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
    if (b == '0'){
        return 'no way';
    }
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


/*const equalize = function(){
    let result;
    let arr = current.textContent.split(' ')
    arr = arr.join(" ").trim().split(' ');
    result = operate(arr[0],arr[1],arr[2]);
    current.textContent = result;
    result = result * 100000;
    result = Math.round(result);
    result = result / 100000;
    
    console.log(arr)
} */

const equalize = function(){
    let result;
    let arr = previous.textContent.split(' ');
    arr = arr.join(" ").trim().split(' ');
    result = operate(parseFloat(arr[0]),arr[1],parseFloat(current.textContent));
    result = result * 100000;
    result = Math.round(result);
    result = result / 100000;
    current.textContent = result;
    previous.textContent = '';
    
}



//Buttons



const printValue = function(a){
    

    if(a != 'ac' && a != '='){
        current.textContent += a;
        if (a == ' + ' || a == ' - ' || a == ' * ' || a == ' / '){
            if (previous.textContent != ''){
                equalize();
                previous.textContent = current.textContent + a;
                current.textContent = '';
            } else {
                previous.textContent = current.textContent;
                current.textContent = '';
            }
            
        } else if (a == '.' && current.textContent.split('.').length > 2){
                 current.textContent = current.textContent.slice(0,-1);
        }
   
    
    } else if (a == 'ac') {
        current.textContent = '';
        previous.textContent ='';
        
    }
    
}



btns.forEach(btn => {
    btn.addEventListener('click', function(){
        printValue(btn.value);
    })
    
});

equalizer.addEventListener('click', equalize);

/* TO DO
-fix pressing operator after one operator is already selected
-split to arr instead of string at the beginning of typing
*/