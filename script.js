import { evaluate } from 'mathjs';

const expression = "2 + 3 * (4 - 1)";
const result = evaluate(expression);
console.log(result);  // Output: 11