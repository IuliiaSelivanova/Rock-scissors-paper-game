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
      rock = document.getElementById('rock');
      choices = [paper, scissors, rock];
      userChoice = document.getElementById('userChoice');
      waitChoice = document.getElementById('waitChoice');
      computerChoice = document.getElementById('cpuChoice');

/*сделать отдельный сектор playField-active: после выбора пользователем будет отражаться эта секция, а секция playField убираться - display: none;

или сделать отдельный класс: при выборе бумаги будет отображаться бумага юзера и пустое поле компьютера, через некоторое время setTimeout отображается выбор компьютера*/

function paperChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(paper);
  setTimeout(cpuChoice, 2000);
}

function scissorsChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(scissors);
  setTimeout(cpuChoice, 2000);
}

function rockChosen() {
  document.getElementById('playField').classList.add('inactive');
  document.getElementById('startsGame').classList.add('active');
  userChoice.append(rock);
  setTimeout(cpuChoice, 2000);
}
//for each чтобы прослушать каждую кнопку и переключить поле, объединить одинаковые действия

paper.addEventListener('click', paperChosen);
scissors.addEventListener('click', scissorsChosen);
rock.addEventListener('click', rockChosen);

function cpuChoice(){
  waitChoice.classList.add('inactive');
  let indexCpu = Math.floor(Math.random() * 3); //В случае когда выбирается то же что и юзера, отображения выбранного объекта переносится к cpu, пропадает у юзера. Как копировать обеъкты, а не перемезать по DOM?
  computerChoice.append(choices[indexCpu]);
}

//Проверка победителя, получение результата игры
function checkResult(){
  
}