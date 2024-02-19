// create a function called getComputerChoice
const getComputerChoice = () => {
    // variable 'choices' is equal to 'Rock', 'Paper', 'Scissors'
    var choices = ['Rock', 'Paper', 'Scissors']
    // variable randomIndex is equal to Math.floor to return a number less than or equal to the length of the array, at random.
    var randomIndex = Math.floor(Math.random() * choices.length)
    // return choices at a random index
    return choices[randomIndex]
}
// console.log(getComputerChoice(1))