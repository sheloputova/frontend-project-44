import readlineSync from "readline-sync";

import { askName, userName } from "../src/cli.js";
import { getRandomNumber, randomNumber, roundCount } from "../index.js";

let answer;

const calculate = (numOne, numTwo, operator) => {
  switch (operator) {
    case "-":
      return numOne - numTwo;
    case "+":
      return numOne + numTwo;
    case "*":
      return numOne * numTwo;
    default:
      return "Something went wrong. Try again and again!";
  }
};

const gameCalcQuestion = "What is the result of the expression?";

const checkAnswer = () => {
  const numOne = getRandomNumber(100);
  const numTwo = getRandomNumber(100);
  const operations = ["+", "-", "*"];

  const operation = operations[getRandomNumber(operations.length)];
  console.log("Question: " + randomNumber);
  const question = `${numOne} ${operation} ${numTwo}`;
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
