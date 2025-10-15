const resultDiv=
document.getElementById('results');
const scoreDiv=
document.getElementById('score')

let round=0;
let youScore=0;
let compScore=0;
let tieScore=0;

const buttons={
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissors: document.getElementById('scissors'),
};

for (let key in buttons){
    buttons[key].addEventListener('click',()=> {
        play(key.charAt(0).toUpperCase()+
        key.slice(1));
    });
}

function play(userChoice){
    const options= ['Rock','Paper','Scissors'];
    const compChoice = options[Math.floor(Math.random()*3)];
    let result="";

    if(userChoice === compChoice){
        result ='Tie';
        tieScore++;
    }else if(
    (userChoice==='Rock'&& compChoice === 'Scissors') ||   
    (userChoice ==='Paper'&& compChoice==='Rock') ||
    (userChoice==='Scissors'&& compChoice==='Paper')
    ){
        result ='You Win';
        youScore++;
    }else{
        result='Computer wins';
        compScore++;
    } 
      round++;
  const newLine = document.createElement('div');
  newLine.innerHTML = `${round}. You - ${userChoice}, Computer - ${compChoice} (${result})`;
  resultDiv.appendChild(newLine);

  scoreDiv.innerHTML = `Score: You - ${youScore}, Computer - ${compScore}, Tie - ${tieScore}`;
}

    



