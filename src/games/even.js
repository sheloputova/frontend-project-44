import { getRandomNumber, runGame } from "../../index.js";

// Проверяем четное ли число
const isEven = (number) => !(number % 2);

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const playEvenGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(100);
    const correctAnswer = isEven(question) ? "yes" : "no";

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playEvenGame;
