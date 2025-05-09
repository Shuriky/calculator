

let display = document.querySelector(".output");
let outputContent = "";
let calculateContent = "";
let result = 0; // Latest answer
let scope = {ans: result}; // Support ANS

function updateDisplay() {
  display.textContent = outputContent;
  scope = {ans: result};
}

document.querySelector("#seven").addEventListener("click", function () {
  outputContent += "7";
  calculateContent += "7";
  updateDisplay();
});

document.querySelector("#eight").addEventListener("click", function () {
  outputContent += "8";
  calculateContent += "8";
  updateDisplay();
});

document.querySelector("#nine").addEventListener("click", function () {
  outputContent += "9";
  calculateContent += "9";
  updateDisplay();
});

document.querySelector("#left-bracket").addEventListener("click", function () {
  outputContent += "(";
  calculateContent += "(";
  updateDisplay();
});

document.querySelector("#right-bracket").addEventListener("click", function () {
  outputContent += ")";
  calculateContent += ")";
  updateDisplay();
});

document.querySelector("#ac").addEventListener("click", function () {
  outputContent = "0";
  calculateContent = "";
  updateDisplay();
  outputContent = "";
});

document.querySelector("#four").addEventListener("click", function () {
  outputContent += "4";
  calculateContent += "4";
  updateDisplay();
});

document.querySelector("#five").addEventListener("click", function () {
  outputContent += "5";
  calculateContent += "5";
  updateDisplay();
});

document.querySelector("#six").addEventListener("click", function () {
  outputContent += "6";
  calculateContent += "6";
  updateDisplay();
});

document.querySelector("#multiply").addEventListener("click", function () {
  outputContent += "x";
  calculateContent += "*";
  updateDisplay();
});

document.querySelector("#divide").addEventListener("click", function () {
  outputContent += "÷";
  calculateContent += "/";
  updateDisplay();
});

document.querySelector("#power").addEventListener("click", function () {
  outputContent += "^";
  calculateContent += "^";
  updateDisplay();
});

document.querySelector("#one").addEventListener("click", function () {
  outputContent += "1";
  calculateContent += "1";
  updateDisplay();
});

document.querySelector("#two").addEventListener("click", function () {
  outputContent += "2";
  calculateContent += "2";
  updateDisplay();
});

document.querySelector("#three").addEventListener("click", function () {
  outputContent += "3";
  calculateContent += "3";
  updateDisplay();
});

document.querySelector("#add").addEventListener("click", function () {
  outputContent += "+";
  calculateContent += "+";
  updateDisplay();
});

document.querySelector("#subtract").addEventListener("click", function () {
  outputContent += "-";
  calculateContent += "-";
  updateDisplay();
});

document.querySelector("#sqrt").addEventListener("click", function () {
  outputContent += "√(";
  calculateContent += "sqrt(";
  updateDisplay();
});

document.querySelector("#zero").addEventListener("click", function () {
  outputContent += "0";
  calculateContent += "0";
  updateDisplay();
});

document.querySelector("#dot").addEventListener("click", function () {
  outputContent += ".";
  calculateContent += ".";
  updateDisplay();
});

document.querySelector("#triplezero").addEventListener("click", function () {
  outputContent += "000";
  calculateContent += "000";
  updateDisplay();
});

// ts trippin
document.querySelector("#ans").addEventListener("click", function () {
  // You could store the previous result in a variable like `lastAnswer`
  outputContent += "ANS";
  calculateContent += "ans";
  updateDisplay();
});

document.querySelector("#delete").addEventListener("click", function () {
  outputContent = outputContent.slice(0, -1);
  calculateContent = calculateContent.slice(0, -1);
  console.log(calculateContent);
  console.log(outputContent);
  updateDisplay();
});

document.querySelector("#equal").addEventListener("click", function () {
    calculateContent = "(" + calculateContent + ")";
    console.log(calculateContent);
    console.log(outputContent);
  try {
    outputContent = math.evaluate(calculateContent, scope).toString(); // simple power support
    result = parseInt(outputContent); // Store result for ANS
    calculateContent = result.toString();
  } catch {
    outputContent = "Syntax Error";
  }
  updateDisplay();
});
