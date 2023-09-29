const fs = require("fs");

// Read homework.log file synchronously
const homeworkLogText = fs.readFileSync('./homework.log', 'utf-8');

// Then write it as .txt file extension 
fs.writeFileSync('./log.txt', homeworkLogText)
console.log("File log.txt has been written!");

