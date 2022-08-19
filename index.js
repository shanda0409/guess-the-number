console.log('Welcome to the GUESS NUMBER GAME 🤞🤞\n\nPlease enter a number between 1 to 100 👊\n\n');
let number = Number.parseInt(Math.random() + 4 * 15);
let chances = 0;
let userNumber;
do {
  userNumber = Number.parseInt(prompt("Guess the number 🤔:"));

  if (userNumber < number) {
    console.log("😬", userNumber, "is smaller than the NUMBER. Please try again😀\n");
    chances++;
  } else if (userNumber > number) {
    console.log("😬", userNumber, "is larger than the NUMBER. Please try again😀\n");
    chances++;
  } else {
    console.log("👍Congratulations!!! 😱You guessed the right number.\n");
    chances++;

    let score = 100 - chances;
    console.log('Your tried for 👉', chances, 'times.');
    console.log('Your score is:', score);
    console.log('And as you already know, the correct number is', number, '\n\n');

    break;
  }
} while (userNumber == number || userNumber != number);
console.log('Hopefully, you enjoyed the game.\nThanks for playing the game😀');