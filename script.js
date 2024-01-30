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
        if(itemText !== "C" && itemText !== "<" && itemText !== "=" && itemText !== "π" 
        && itemText !== "e" && itemText !== "(" && itemText !== ")" && itemText !== "mod"){
            display.innerHTML += itemText;
        }
        if( itemText === "="){
            display.innerHTML = eval(display.innerHTML);

        }
        if( itemText === "π"){
            display.innerHTML +=Math.PI;

        }
        if( itemText === "e"){
            display.innerHTML +=Math.E;

        }
        if( itemText === "("){
            display.innerHTML += "(";

        }
        if( itemText === ")"){
            display.innerHTML += ")";

        }
        if( itemText === "mod"){
            display.innerHTML += "%";

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
        if(itemText === "exp"){
            exp();
        }
        if(itemText === "|X|"){
            abs();
        }
        if( itemText === "1/X"){
            dividedOne();
        }
        if( itemText === "xʸ"){
            powXY();
        }
        if( itemText === "n!"){
            notDefined();
        }
        if( itemText === "ln"){
            notDefined();
        }
        if( itemText === "2ⁿᵈ"){
            notDefined();
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
const exp = () => {
    display.innerHTML = Math.exp(display.innerHTML);
}
const abs = () => {
    display.innerHTML = Math.abs(display.innerHTML);
}
const dividedOne = () => {
    display.innerHTML = 1/display.innerHTML;
}
const powXY = () => {
    display.innerHTML += "**";
}
const notDefined = () => {
    alert('Button not defined');
}