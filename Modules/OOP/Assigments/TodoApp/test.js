const prompt=require("prompt-sync")({sigint:true});
var name = prompt("What is your name?");
console.log("Hello, " + name + "!");