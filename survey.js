const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Why did the chicken cross the road? ', (answer) => {
  console.log(`The chicken crossed the road to: ${answer}`);

  rl.close();
});