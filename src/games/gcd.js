import { getRandomNumber, runGame } from "../../index.js";

// Находим НОД
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const gameRules = "Find the greatest common divisor of given numbers.";

const playGcdGame = () => {
  const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);
    const question = `${num1} ${num2}`;
    const correctAnswer = findGCD(num1, num2).toString();

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playGcdGame;
