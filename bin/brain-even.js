import readlineSync from "readline-sync";
import { userName } from "../src/cli.js";

const generateNumber = () => {
  Math.ceil(Math.random() * 100);
};

const checkEven = () => {
  let randomNumber = generateNumber();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log("Question: " + randomNumber);
  const answer = readlineSync.question("Your answer: ");
  console.log("Your answer: " + answer);

  let i = 0;
  while (i < 3) {
    if (
      (randomNumber % 2 === 0) & (answer === "yes") ||
      (randomNumber % 2 != 0) & (answer === "no")
    ) {
      console.log("Correct!");
      //console.log("Question: " + generateNumber());

      i = i++;
    } else {
      console.log(answer + " is wrong answer ;(. Correct answer was no");
      console.log("Let's try again, " + userName + "!");
    }
    if (i === 2) {
      console.log("Congratulations, " + userName + "!");
    }
  }
};

checkEven();
