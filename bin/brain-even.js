import readlineSync from "readline-sync";

let userName;
const askName = () => {
  userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return userName;
};

let answer;
const roundCount = 3;
const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => !(number % 2);

const checkAnswer = () => {
  let randomNumber = getRandomNumber();

  console.log("Question: " + randomNumber);
  answer = readlineSync.question("Your answer: ");

  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  if (answer && answer.toLowerCase().trim() === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(answer + " is wrong answer ;(. Correct answer was no");
    console.log("Let's try again, " + userName + "!");
    return false;
  }
};

const checkEven = () => {
  for (let i = 0; i < roundCount; i++) {
    const isCorrect = checkAnswer();
    if (isCorrect && i === 2) {
      console.log("Congratulations, " + userName);
      break;
    } else if (!isCorrect) {
      break;
    }
  }
};

const playGame = () => {
  askName();
  checkEven();
};

playGame();
