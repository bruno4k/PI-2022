var list = document.getElementById('tips-list');
var inputElement = document.getElementById('input-element');

const getRandNum = () => {
    return Math.floor(Math.random() * 100 + 1);
}

const validateInput = () => inputElement.value.trim().length > 0;

var num = getRandNum();
console.log(num);
strikes = 1;
const verifyNum = (num, tip) => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return;
    }

    var li = document.createElement('li');
    var element;
    if(tip == num){
        element = `${tip} é o número correto`;
        document.getElementById('input-element').disabled = true;
        document.getElementById('send').disabled = true;
        document.getElementById('final-message').innerHTML = 'PARABÉNS, VOCÊ GANHOU!<br><br>';
    }else if(strikes == 5){
        element = `${num} era o número correto`;
        document.getElementById('input-element').disabled = true;
        document.getElementById('send').disabled = true;
        document.getElementById('final-message').innerHTML = 'VOCÊ PERDEU!<br><br>';
    }else{
        if(tip < num){
            element = `${tip} é muito baixo`;
    
        }else if(tip > num){
            element = `${tip} é muito alto`;
        }
    }
    
    li.appendChild(document.createTextNode(element));
    list.appendChild(li);
    strikes++;
}

document.getElementById("send").addEventListener("click", () => {
    var tip = document.getElementById('input-element').value;
    verifyNum(num, tip);
    document.getElementById('input-element').value = '';
})