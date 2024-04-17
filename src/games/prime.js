import { getRandomNumber, runGame } from "../../index.js";

// Проверяем четное ли число
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
};

const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(100);
    const correctAnswer = isPrime(question) ? "yes" : "no";

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playPrimeGame;
