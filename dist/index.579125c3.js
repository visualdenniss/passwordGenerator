const btnGenerate = document.querySelector("#generateBtn");
const textInput = document.querySelector(".inputText");
let letterChar = "jklzxcvbnm1234567890qwertyuiopasdfghQWERTYUIOPASD!@#$%^&*()_+<>?FGHJKLZXCVBNM";
textInput.value = "";
passLength.value = "";
btnGenerate.addEventListener("click", ()=>{
    let passLength1 = document.getElementById("passLength");
    textInput.value = "";
    if (passLength1.value == 0) alert("Please Input Password length");
    else if (passLength1.value >= 21) {
        alert("Max Password length is 20 letters");
        passLength1.value = "";
        passLength1.style.cssText = "border: 2px solid red";
    } else {
        for(i = 0; i < passLength1.value; i++){
            let generatePass = Math.floor(Math.random() * letterChar.length);
            textInput.value += letterChar[generatePass];
        }
        passLength1.style.border = "none";
    }
});

//# sourceMappingURL=index.579125c3.js.map
