var chalk = require('chalk');

const log = console.log;

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message = log(chalk.yellow('hi'))

log(chalk `Howdy: ${chalk.magenta('90%')}`)

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
  'I am a green line ' +
  chalk.blue.underline.bold('with a blue substring') +
  ' that becomes green again!'
));

log(chalk.magenta("I'm going to be a multi")+chalk.magentaBright.bold.bgGreenBright('-')+chalk.cyan.dim.underline('color line') );