const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0","1","2","3","4","5","6","7","8","9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const lengthSlider = document.getElementById("length-slider");
const lengthValueEl = document.getElementById("length-value");
const numbersToggle = document.getElementById("numbers-toggle");
const symbolsToggle = document.getElementById("symbols-toggle");
const generateBtn = document.getElementById("generate-btn");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const copyMsgEl = document.getElementById("copy-msg");


lengthSlider.addEventListener("input", function () {
    lengthValueEl.textContent = lengthSlider.value;
});


function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function generatePassword() {
    
    let characterPool = [...letters];

    if (numbersToggle.checked) {
        characterPool = characterPool.concat(numbers);
    }

    if (symbolsToggle.checked) {
        characterPool = characterPool.concat(symbols);
    }

    const length = Number(lengthSlider.value);
    let password = "";

    for (let i = 0; i < length; i++) {
        password += getRandomItem(characterPool);
    }

    return password;
}

// Generate two passwords and display them
function displayPasswords() {
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();
    copyMsgEl.textContent = "";
}

generateBtn.addEventListener("click", displayPasswords);

// Copy-on-click for each password box
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copyMsgEl.textContent = "Copied to clipboard!";
}

password1El.addEventListener("click", function () {
    copyToClipboard(password1El.textContent);
});

password2El.addEventListener("click", function () {
    copyToClipboard(password2El.textContent);
});


displayPasswords();
