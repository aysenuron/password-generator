const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];

const basicCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9"];

const generateBtn = document.querySelector("button");
const passwordFieldOne = document.getElementById("password-1");
const passwordFieldTwo = document.getElementById("password-2");

const selectElement = document.getElementById("length");

const checkbox = document.getElementById("special-char");


function isCheckboxChecked() {
    return checkbox.checked; // Return true if checked, false otherwise
}

function generatePassword(field) {
    field.textContent = "";
    const selectedValue = parseInt(selectElement.value);
    const useSpecialChars = isCheckboxChecked();
    const charSet = useSpecialChars ? characters : basicCharacters;

        for (let i = 0; i < selectedValue; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            const randomCharacter = charSet[randomIndex];
            let password = [];
            password.push(randomCharacter);
            console.log(password);
            field.textContent += password;
    }
    
}
generateBtn.addEventListener("click", () => {
    generatePassword(passwordFieldOne);
    generatePassword(passwordFieldTwo);
});

passwordFieldOne.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordFieldOne.innerHTML)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy password.", err);
    });
});

passwordFieldTwo.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordFieldTwo.innerHTML)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy password.", err);
    });
});