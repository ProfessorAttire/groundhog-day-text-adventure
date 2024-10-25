const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  rl.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}! Welcome to the Groundhog Day adventure.`);
    // Add more game logic here
    rl.close();
  });
}

module.exports = { startGame };
