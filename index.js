import readlineSync from 'readline-sync';
import askName from './src/cli.js';

export const getRandomNumber = (max) => Math.round(Math.random() * max);

export const runGame = (gameRules, getQuestionAndAnswer) => {
  const userName = askName();
  console.log(gameRules);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
