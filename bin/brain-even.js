import readlineSync from "readline-sync";

const generateNumber = () => {
  Math.ceil(Math.random() * 100);
};

const checkEven = () => {
  let randomNumber = generateNumber();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log("Question: " + randomNumber);
  const answer = readlineSync.question("Your answer: ");

  let i = 0;
  while (i < 3) {
    if (
      (randomNumber % 2 === 0) & (answer === "yes") ||
      (randomNumber % 2 != 0) & (answer === "no")
    ) {
      console.log("Correct!");
      console.log("Question: " + generateNumber());
      const answer = readlineSync.question("Your answer: ");
      i++;
    } else {
      console.log(answer + " is wrong answer ;(. Correct answer was no");
    }
  }
};

checkEven();
