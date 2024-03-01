const name = "dheraj";
const rpocount = 50;

//  console.log(name + " " + rpocount + " value");  old fasion syntax...

console.log(`hello my name is ${name} and my repo count is ${rpocount}`)

// another way to declare string

const gameName = new String('dheraj-singh');

console.log(name.length);
console.log(gameName.__proto__); //open in browser console..

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

const newStringOne = "  dheraj singh   ";
console.log(newStringOne);
console.log(newStringOne.trim());  // remove whitespace extra space strt end..


const  url = "https://dheraj.com/dheraj%20singh";

console.log(url.replace('%20', '-'));

console.log(url.includes('dheraj'));

console.log(gameName.split("-"));



