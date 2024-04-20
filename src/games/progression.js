import { getRandomNumber, runGame } from '../../index.js';

// Создаем арифметискию прогрессию

const gameRules = 'What number is missing in the progression?';
const getArrProgression = (start, length, interval) => {
  const arrProgression = [];
  let numStart = start;

  for (let i = 0; i <= length; i += 1) {
    arrProgression.push(numStart);
    numStart += interval;
  }

  return arrProgression;
};

const playProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const start = getRandomNumber(10) + 1;
    const length = getRandomNumber(10) + 5;
    const interval = getRandomNumber(6) + 5;
    const arrProgression = getArrProgression(start, length, interval);
    const hidenIndex = getRandomNumber(length);
    const correctAnswer = arrProgression[hidenIndex].toString();
    arrProgression[hidenIndex] = '..';

    const question = `${arrProgression.join(' ')}`;

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playProgressionGame;
