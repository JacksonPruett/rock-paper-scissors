// create a function called getComputerChoice
const getComputerChoice = () => {
  // variable 'choices' is equal to 'Rock', 'Paper', 'Scissors'
  var choices = ["Rock", "Paper", "Scissors"];
  // variable randomIndex is equal to Math.floor to return a number less than or equal to the length of the array, at random.
  var randomIndex = Math.floor(Math.random() * choices.length);
  // return choices at a random index
  return choices[randomIndex];
};
// console.log(getComputerChoice(1))


const playGame = () => {
  var choices = ["Rock", "Paper", "Scissors"];
  const gameCount = [];
  const playerInput = input("Please enture your choice:").toLowerCase();
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  // create a function called singleRound with parameters playerSelection and computerSelection
  const singleRound = (playerSelection, computerSelection) => {
    //   for (let i = 0; i < choices.length; i++) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "Player wins! Rock beats Scissors!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "Computer wins! Rock beats Scissors!";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "Player wins! Paper beats Rock!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "Computer wins! Paper beats Rock!";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "Player wins! Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "Computer wins! Scissors beats paper!";
    } else {
      return "It's a tie!";
    }
  };
  return singleRound(playerInput, computerInput)
};

console.log(playGame())
// }
// use string interpolation to return  "You lose! (choice) beats (choice)!" or "You win! (choice) beats (choice)!"
// make playerSelection case insensitive so users can input choices in any format they choose

// paper beats rock
// rock beats scissors
// scissors beat paper
//.toLowerCase() makes everything lowercase - gonna have to add this to input
