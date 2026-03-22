function convert(){
let convert_inp = document.getElementById('convert-input').value; 
let result = document.getElementById('result');
const convertor = document.getElementById('converter').value;

if(convertor =="Fahrenheit"){
    
    let con = (convert_inp * 1.8) + 32;
    result.textContent = con; 
} else if(convertor == "Celsius"){
    let con = (convert_inp - 32) / 1.8;
    result.textContent = con;
}

}