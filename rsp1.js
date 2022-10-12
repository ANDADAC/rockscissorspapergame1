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

function checkWin() {
    switch (input1) {
        case ('rock') : 
        if (input1 == comhand) return 'tie';
        else if (input1 == 'paper') return 'you win';
        else return 'you lose'
        break;
        case ('scissors') : 
        if (input1 == comhand) return 'tie';
        else if (input1 == 'rock') return 'you win';
        else return 'you lose'
        break;
        case ('paper') : 
        if (input1 == comhand) return 'tie';
        else if (input1 == 'paper') return 'you win';
        else return 'you lose'
        break;
    }    
}

 