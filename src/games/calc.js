import { getRandomNumber, runGame } from "../../index.js";

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

const gameRules = "What is the result of the expression?";

const playCalcGame = () => {
  const getQuestionAndAnswer = () => {
    const numOne = getRandomNumber(10);
    const numTwo = getRandomNumber(10);
    const operations = ["+", "-", "*"];
    const operation = operations[getRandomNumber(operations.length)];
    const question = `${numOne} ${operation} ${numTwo}`;

    const answer = calculate(numOne, numTwo, operation).toString();

    // Показываем вопрос и проверяем ответ пользователя
    return { question, answer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playCalcGame;
