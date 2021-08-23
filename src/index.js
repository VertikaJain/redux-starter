import { compose, pipe } from "lodash/fp";

let input = "   JavaScript    ";
let output = "<div>" + input.trim() + "</div>"
// console.log(output);

const trim = (str) => str.trim()
// const wrapInDiv = str => `<div>${str}</div>`
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()
// console.log(wrapInDiv(toLowerCase(trim(input))));

// Using compose
// const transformRightToLeft = compose(wrapInDiv, toLowerCase, trim)
// console.log(transformRightToLeft(input));

// Easier and Better to use Pipe
// const transformLeftToRight = pipe(trim, toLowerCase, wrapInDiv)
// console.log(transformLeftToRight(input));

// Currying
const transformLeftToRightCurry = pipe(trim, toLowerCase, wrap("span"))
console.log(transformLeftToRightCurry(input));

// CURRYING - other example
function add(a) {
  return function (b) {
    return a + b
  }
}
const add1 = add(1)
console.log(add1(5)) // OR add(1)(5)

// Currying using Arrow function
const add2 = a => b => a + b
console.log(add2(2)(5));