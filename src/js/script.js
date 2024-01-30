/* Примитивная версия игры - без UI, без кнопки обновления и сохранения счета игроков. Игрок не выбирает, счет не сохраняется.

const choices = ["камень", "бумагу", "ножницы"];
let userChoice = Math.floor(Math.random() * 3);
let computerChoice = Math.floor(Math.random() * 3);
let scoreComputer = 0;
let scoreUser = 0;
alert(`Вы выбрали ${choices[userChoice]}`);
alert(`Компьютер выбрал ${choices[computerChoice]}`);
if (
  (userChoice === 0 && computerChoice === 2) ||
  (userChoice === 2 && computerChoice === 1) ||
  (userChoice === 1 && computerChoice === 0)
) {
  scoreUser++;
  alert(`You  win! \n User: ${scoreUser}  Computer: ${scoreComputer}`);
} else if (
  (userChoice === 2 && computerChoice === 0) ||
  (userChoice === 1 && computerChoice === 2) ||
  (userChoice === 0 && computerChoice === 1)
) {
  scoreComputer++;
  alert(`You  lost! \n User: ${scoreUser}  Computer: ${scoreComputer}`);
} else {
  alert(`Ничья \n User: ${scoreUser}  Computer: ${scoreComputer}`);
}*/


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
      rock = document.getElementById('rock'); //Подумать как создать объекты, чтобы они не были в одном экземпляре
      choices = [paper, scissors, rock];  
      userChoice = document.getElementById('userChoice');
      waitChoice = document.getElementById('waitChoice');
      computerChoice = document.getElementById('cpuChoice');

//После выбора объекта заблокировать пользователю возможность снова нажимать на него, доступна только кнопки RULES и Play again. Затем объекты снова доступны для нажатия
function paperChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(choices[0]);
  userChoice.setAttribute('data-index', 0)
  setTimeout(cpuChoice, 2000);
  setTimeout(checkResult, 3000);
}

function scissorsChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(choices[1]);
  userChoice.setAttribute('data-index', 1)
  setTimeout(cpuChoice, 2000);
  setTimeout(checkResult, 3000);
}

function rockChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(choices[2]);
  userChoice.setAttribute('data-index', 2)
  setTimeout(cpuChoice, 2000);
  setTimeout(checkResult, 3000);
}
//for each чтобы прослушать каждую кнопку и переключить поле, объединить одинаковые действия

paper.addEventListener('click', paperChosen);
scissors.addEventListener('click', scissorsChosen);
rock.addEventListener('click', rockChosen);

let indexCpu = Math.floor(Math.random() * 3);

function cpuChoice(){
  waitChoice.classList.add('inactive');
  //В случае когда выбирается то же что и юзера, отображения выбранного объекта переносится к cpu, пропадает у юзера. Как копировать обеъкты, а не перемещать по DOM?
  computerChoice.append(choices[indexCpu]);
  // console.log(userChoice.getAttribute('data-index'))
  // console.log(indexCpu)
}


//Проверка победителя, получение результата игры:
let score = 0;      //Как сохранить результат. И продолжать игру с сохраненным результатом?
const scoreCell = document.getElementById('score');
let restartBtn = document.querySelector('.btn-restart');

function checkResult(){
  let indexUser = +userChoice.getAttribute('data-index');
  document.querySelector('.user').classList.add('active');
  document.querySelector('.cpu').classList.add('active');
  if( (indexUser === 0 && indexCpu === 2) || (indexUser === 2 && indexCpu === 1) || (indexUser === 1 && indexCpu === 0) ){
    document.querySelector('.gameResult').classList.add('active');
    document.getElementById('result').innerHTML = 'You win';
    score++;
    scoreCell.append(score);
  } else if ((indexUser === 2 && indexCpu === 0) ||
  (indexUser === 1 && indexCpu === 2) ||
  (indexUser === 0 && indexCpu === 1)){
    document.querySelector('.gameResult').classList.add('active');
    document.getElementById('result').innerHTML = 'You lose';
    score--;
    scoreCell.append(score);
  } else {
    document.querySelector('.gameResult').classList.add('active');
    document.getElementById('result').innerHTML = 'Draw';
    score;
    scoreCell.append(score);
  }
}

/*Начать сначала*/
restartBtn.addEventListener('click', restart);
function restart(){
  document.getElementById('playField').classList.remove('inactive');
  document.getElementById('startsGame').classList.remove('active');
  document.querySelector('.gameResult').classList.remove('active');
}
