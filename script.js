import { evaluate } from 'https://cdn.jsdelivr.net/npm/mathjs/lib/esm/index.js';

const expression = "2 + 3 * (4 - 1)";
const result = evaluate(expression);
console.log(result);  // Output: 11