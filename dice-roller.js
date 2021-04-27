//extract the number of the input
let args = process.argv[2];
//convert input to a number
args = Number(args);
//create a for loop to repeat that number of times
let result = [];
for (let i = 0; i < args; i++) {
  let randomNum = Math.floor((Math.random() * 6 + 1));
  result.push(randomNum);
}
result = result.join(', ');
console.log(`Rolled ${args} dice: ${result}`);
