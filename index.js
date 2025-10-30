// index.js
import chalk from "chalk";
import figlet from "figlet";
import { execSync } from "child_process";

// Display Banner
figlet("Node Practice", (err, data) => {
  if (err) return console.log("Banner error", err);
  console.log(chalk.cyanBright(data));

  // Show menu
  console.log(chalk.yellow("\n📘 Select a module to run:"));
  console.log(chalk.green("1.") + " Basics");
  console.log(chalk.green("2.") + " Simple Server");
  console.log(chalk.green("3.") + " CLI Tools (Greet/Banner/To-Do)");
  console.log(chalk.green("4.") + " Exit\n");

  // Read user input
  process.stdout.write(chalk.blue("Enter your choice (1-4): "));

  process.stdin.on("data", (input) => {
    const choice = input.toString().trim();

    switch (choice) {
      case "1":
        console.log(chalk.magenta("▶ Running basics/hello.js ..."));
        execSync("node basics/hello.js", { stdio: "inherit" });
        break;

      case "2":
        console.log(chalk.magenta("▶ Starting simple server ..."));
        execSync("node server/simple-server.js", { stdio: "inherit" });
        break;

      case "3":
        console.log(chalk.magenta("▶ Running CLI tools menu ..."));
        execSync("node cli-tools/greet.js Priyabrata", { stdio: "inherit" });
        break;

      case "4":
        console.log(chalk.red("👋 Exiting..."));
        process.exit(0);

      default:
        console.log(chalk.red("❌ Invalid choice!"));
    }
  });
});
