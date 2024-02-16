/*Rules*/
const rulesBtn = document.getElementById('rules'),
      closeBtn = document.getElementById('closeBtn'),
      modal = document.getElementById('modal'),
      overlay = document.querySelector('.js-overlay-modal');

rulesBtn.addEventListener('click', openRules);
closeBtn.addEventListener('click', closeRules);
overlay.addEventListener('click', closeRules);

function openRules(){
  modal.classList.add('open');
  overlay.classList.add('active')
}

function closeRules(){
  modal.classList.remove('open');
  overlay.classList.remove('active')
}

/*Game*/
const paper = document.getElementById('paper'),
      scissors = document.getElementById('scissors'),
      rock = document.getElementById('rock');
      choices = [paper, scissors, rock];  
      // userChoice = document.getElementById('userChoice');
      // waitChoice = document.getElementById('waitChoice');
      // computerChoice = document.getElementById('cpuChoice');
      blocked = false;

//После выбора объекта заблокировать пользователю возможность снова нажимать на него, доступна только кнопки RULES и Play again. Затем объекты снова доступны для нажатия
function paperChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');

  let playerChoice = document.createElement('div');
  playerChoice.className = "playerChoice";
  playerChoice.setAttribute('id', 'userChoice');
  document.querySelector('.user').append(playerChoice);
  playerChoice.append(choices[0].cloneNode(true));
  playerChoice.setAttribute('data-index', 0);

  cpuChoice();
}

function scissorsChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');

  let playerChoice = document.createElement('div');
  playerChoice.className = "playerChoice";
  playerChoice.setAttribute('id', 'userChoice');
  document.querySelector('.user').append(playerChoice);
  playerChoice.append(choices[1].cloneNode(true));
  playerChoice.setAttribute('data-index', 1);

  cpuChoice();
}

function rockChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');

  let playerChoice = document.createElement('div');
  playerChoice.className = "playerChoice";
  playerChoice.setAttribute('id', 'userChoice');
  document.querySelector('.user').append(playerChoice);
  playerChoice.append(choices[2].cloneNode(true));
  playerChoice.setAttribute('data-index', 2);

  cpuChoice();
}

paper.addEventListener('click', paperChosen);
scissors.addEventListener('click', scissorsChosen);
rock.addEventListener('click', rockChosen);

//ВЫбор компьютера:
let indexCpu;
function cpuChoice(){
  indexCpu = Math.floor(Math.random() * 3);
  
  let waiting = document.createElement('div');
  waiting.className = "waitChoice";
  document.querySelector('.cpu').append(waiting);
  setTimeout(() => waiting.remove(), 1500);

  let cpuChoice = document.createElement('div');
  cpuChoice.className = "playerChoice";
  cpuChoice.setAttribute('id', 'cpuChoice');
  document.querySelector('.cpu').append(cpuChoice);
  setTimeout(() => cpuChoice.append(choices[indexCpu].cloneNode(true)),1500);

  setTimeout(checkResult, 2500);
}

//Проверка победителя, получение результата игры:
let score = 0;
const scoreCell = document.getElementById('score');

function checkResult(){
  let indexUser = +document.getElementById('userChoice').getAttribute('data-index');
  document.querySelector('.user').classList.add('active');
  document.querySelector('.cpu').classList.add('active');
  if( (indexUser === 0 && indexCpu === 2) || (indexUser === 2 && indexCpu === 1) || (indexUser === 1 && indexCpu === 0) ){
    document.getElementById('result').innerHTML = 'You win';
    document.querySelector('.gameResult').classList.add('active');
    score++;
  } else if ((indexUser === 2 && indexCpu === 0) ||
  (indexUser === 1 && indexCpu === 2) ||
  (indexUser === 0 && indexCpu === 1)){
    document.getElementById('result').innerHTML = 'You lose';
    document.querySelector('.gameResult').classList.add('active');
    score--;
  } else {
    document.getElementById('result').innerHTML = 'Draw';
    document.querySelector('.gameResult').classList.add('active');
    score;
  }

  if (score >= 0){
    scoreCell.innerHTML = score;
  } else{
    score = 0;
    scoreCell.innerHTML = score;
  }
}

/*Начать сначала*/
let restartBtn = document.querySelector('.btn-restart');

restartBtn.addEventListener('click', restart);
function restart(){
  document.getElementById('playField').classList.remove('inactive');
  document.getElementById('startsGame').classList.remove('active');
  document.querySelector('.gameResult').classList.remove('active');
  document.querySelector('.user').classList.remove('active');
  document.querySelector('.cpu').classList.remove('active');
  document.getElementById('userChoice').remove();
  document.getElementById('cpuChoice').remove();
}
