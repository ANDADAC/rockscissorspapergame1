function rand_enum(num) {
    return Math.floor(Math.random()*num);
}

let comhand = ''

function init(){
    let re = rand_enum(3);
    switch (re) {
        case 0 : comhand = 'rock';
        break;
        case 1 : comhand = 'scissors';
        break;
        case 2 : comhand = 'paper';
        break;
    }
    
}

function checkWin(input1) {
    switch (input1) {
        case ('rock') : 
            if (input1 == comhand) return 'tie';
            else if (comhand == 'scissors') return 'you win';
            else return 'you lose'
        break;
        case ('scissors') : 
            if (input1 == comhand) return 'tie';
            else if (comhand == 'paper') return 'you win';
            else return 'you lose'
        break;
        case ('paper') : 
            if (input1 == comhand) return 'tie';
            else if (comhand == 'rock') return 'you win';
            else return 'you lose'
        break;
    }    
}

const selectList = document.querySelector("select");
const initButton = document.querySelector(".init");
const checkButton = document.querySelector("#checkWin");
const resultShow = document.querySelector("p");

initButton.addEventListener('click', init);
checkButton.addEventListener('click', () => {
    console.log(`your hand = ${selectList.value}`)
    console.log(`com hand = ${comhand}`)
    console.log(checkWin(selectList.value))
});

