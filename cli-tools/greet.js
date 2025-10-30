import chalk from "chalk";

const name = process.argv[2] || "Guest";
console.log(chalk.green.bold(`Hello, ${name}! 👋`));
