const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numberSet='12345678';
const symbolSet='~!@#$%^&*()_+/';

// Selectors
const passrwordbox=document.getElementById('pass-box');
const totalChar=document.getElementById('total-char');
const upperinput=document.getElementById('upper-case');
const lowerinput=document.getElementById('lower-case');
const numberinput=document.getElementById('numbers');
const symbolinput=document.getElementById('symbols');
// Randomnumber
function getrandomdata(x){
  return x[Math.floor(Math.random()*x.length)]
}

function generatepassword(password=''){
if(upperinput.checked){
    password+=getrandomdata(uppercase);
    
}
if(lowerinput.checked){
    password+=getrandomdata(lowercase);
    
}
if(symbolinput.checked){
    password+=getrandomdata(symbolSet);
    
}
if(numberinput.checked){
    password+=getrandomdata(numberSet);
    
}
// Concating random numbers
if(password.length<totalChar.value){
    return generatepassword(password)
}

console.log(password);
// Random numbers with in radio input range
let trimmedpassword=truncateString(password,totalChar.value);
passrwordbox.innerHTML=trimmedpassword;

}
document.getElementById('btn').addEventListener('click',
function() {
    generatepassword();
    }
)

function truncateString(str,num){
    if(str.length>num){
        return substr=str.substring(0,num)
    }
    else{
        return str
    }
}




