const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters[52])
console.log(characters[62])
console.log(characters.length)

let firstPassword = document.getElementById("first-password")
copyPasswordOnClick("first-password")
let secondPassword = document.getElementById("second-password")
copyPasswordOnClick("second-password")

//default password length
let passwordLength = 15;
//user altered password length to be used
var inputPasswordLength = document.getElementById("password-length")

var generateBtn = document.getElementById("generate-btn")

let symbolsChecked = false;
let numbersChecked = false;

passwordSpecification("symbol-checkbox")
passwordSpecification("numbers-checkbox")

function passwordSpecification(checkboxID){
    var checkBoxEl = document.getElementById(checkboxID)
    
    checkBoxEl.addEventListener('change', function(){
        if(checkBoxEl.checked){
            if(checkBoxEl.value === "symbol"){
                symbolsChecked = true;
            }
            else{
                numbersChecked = true;
            }
        }
        else{
            if(checkBoxEl.value === "symbol"){
                symbolsChecked = false;
            }
            else{
                numbersChecked = false;
            }
        }
    })
    
}

inputPasswordLength.addEventListener('input', function(event){
    passwordLength = event.target.value
})

generateBtn.addEventListener('click', function(){
    firstPassword.textContent = getRandomPassword();
    secondPassword.textContent = getRandomPassword();
});

function copyPasswordOnClick(passwordElementID){
    var copyTextEl = document.getElementById(passwordElementID)
    
     copyTextEl.addEventListener('click', function() {
        var textToCopy = copyTextEl.textContent;

        var tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = textToCopy;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyTextEl.textContent = 'Password copied!';

        setTimeout(function() {
            copyTextEl.textContent = textToCopy;
        }, 2000);
    });
}



function getRandomPassword(){
    let generatedPassword = ""
    let randomCharValue = -1;
    
    for(let i = 0; i < passwordLength; i++){
        
        if(symbolsChecked && numbersChecked){
             randomCharValue = Math.floor(Math.random()*characters.length)
        }
        else if(numbersChecked){
             randomCharValue = Math.floor(Math.random()*(characters.length - 30))
        }
        else if(symbolsChecked){
            randomCharValue = Math.floor(Math.random()*characters.length)
            let i = 0;
            while(true){
                if(randomCharValue < 62 && randomCharValue > 51){
                    randomCharValue = Math.floor(Math.random()*characters.length)
                }
                else{
                    break;
                } 
            }
        }
        else{
            randomCharValue = Math.floor(Math.random()*(characters.length - 40))
        }
        
        generatedPassword += characters[randomCharValue]
    }
    return generatedPassword
}




