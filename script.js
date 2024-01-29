'use strict'
const display = document.querySelector('.input'),
operations = document.querySelectorAll('.operation'),
btns = document.querySelectorAll('.js-btn');


btns.forEach((item) => {
    item.addEventListener('click', (e) =>{
        let itemText = e.target.textContent;
        if( itemText === "x"){
            itemText = "*";
        }
        if( itemText === "÷"){
            itemText = "/";
        }
        if( itemText === "C"){
            display.innerHTML ="";
        }
        if( itemText === "<"){
            display.innerHTML = display.innerHTML.slice(0, -1);
        }
        if(itemText !== "C" && itemText !== "<" && itemText !== "="){
            display.innerHTML += itemText;
        }
        if( itemText === "="){
            display.innerHTML = eval(display.innerHTML);

        }
    });
});
operations.forEach((item) => {
    item.addEventListener('click', (e) =>{
        let itemText = e.target.textContent;
        if( itemText === "log"){
            log();
        }
        if(itemText === "X²"){
            pow();
        }
        if(itemText === "√"){
            sqrt();
        }
        if(itemText === "+/-"){
            plusMinus();
        }

    });
});
const pow = () => {
display.innerHTML = Math.pow(display.innerHTML,2);
}

const log = () => {
    display.innerHTML = Math.log10(display.innerHTML);
}

const sqrt = () =>{
    display.innerHTML = Math.sqrt(display.innerHTML,2)
}

const plusMinus = () =>{
    display.innerHTML = display.innerHTML * -1;    
}