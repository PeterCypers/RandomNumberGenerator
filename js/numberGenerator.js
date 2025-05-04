const aantalGetallen = document.getElementById("text1");
const scope1 = document.getElementById("scope1");
const scope2 = document.getElementById("scope2");
const scope3 = document.getElementById("scope3");
const scope4 = document.getElementById("scope4");
const button = document.getElementById("button1");
const button2 = document.getElementById("button2");
const output = document.getElementById("output");
const teken = document.getElementById("teken");
let feedback = "";

function generate(){
    let array = [];
    let aantal = parseInt(aantalGetallen.value);
    let checked = scope1.checked? 1 : scope2.checked? 2 : scope3.checked? 3 : 4;
    let tussenTeken = teken.value;
    let number;
    for (let i = 0; i < aantal; i++) {
        if(checked === 1){
            number = Math.floor(Math.random() * 9) + 1;
            array.push(number);
        }
        if(checked === 2){
            number = Math.floor(Math.random() * 99) + 1;
            array.push(number);
        }
        if(checked === 3){
            number = Math.floor(Math.random() * 999) + 1;
            array.push(number);
        }
        if(checked === 4){
            number = Math.floor(Math.random() * 9999) + 1;
            array.push(number);
        }
        
    }

    if(tussenTeken === " "){  
        feedback = array.join(" ");
    }else if(tussenTeken === "," || tussenTeken === "."){
        feedback = array.join(tussenTeken + " ");
    }else{
        feedback = array.join(tussenTeken);
    }
    
   if(tussenTeken === "," || tussenTeken === "." || tussenTeken === " " || tussenTeken === "-"){
        let originalString = feedback;
        let newString = "";
        for (let i = 0; i < originalString.length; i = i+29) {
            newString += originalString.substring(i, i+29);
            
        }
        output.innerHTML = newString;
        if(newString.length > 400){
            output.style.overflow = 'scroll';
        }else output.style.overflow = 'hidden';
        
    }
    if(tussenTeken === "+" || tussenTeken === "*" || tussenTeken === "/"){
        let originalString = feedback;
        let newString = "";
        for (let i = 0; i < originalString.length; i = i+20) {
            newString += originalString.substring(i, i+20)  + "<br/>";
            
        }
        output.innerHTML = newString;
        if(newString.length > 400){
            output.style.overflow = 'scroll';
        }else output.style.overflow = 'hidden';
    }
}

    button.onclick = () =>{
        generate();
    }

button2.onclick = () =>{
    if(feedback !== ""){
        navigator.clipboard.writeText(feedback);
    }
}


