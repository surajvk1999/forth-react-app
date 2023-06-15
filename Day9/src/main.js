import {readFileSync,writeFileSync}from "node:fs";

let filePath = "C:\Users\Desktop\WPT23 CDAC\Day9\src\suraj.txt";
let data = `similar to .`;
writeFileSync(filePath,data);
console.log("write Sucess");