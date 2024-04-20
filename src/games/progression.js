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
    const progressionStart = getRandomNumber(10) + 1;
    const progressionLength = getRandomNumber(10) + 5;
    const progressionInterval = getRandomNumber(6) + 5;
    const arrProgression = getArrProgression(progressionStart, progressionLength, progressionInterval);
    const progressionHidenIndex = getRandomNumber(progressionLength);
    const correctAnswer = arrProgression[progressionHidenIndex].toString();
    arrProgression[progressionHidenIndex] = '..';

    const question = `${arrProgression.join(' ')}`;

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playProgressionGame;
