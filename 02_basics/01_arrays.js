// array 

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3]);

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[2]);

// array methods

// myArr.push(6)  // add new value end..
// myArr.push(7) 
// myArr.pop()  // remove last value..
//myArr.unshift(9)// add value in startimg..
//myArr.shift() // remove value from starting..


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join() //change type in string

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

console.log('A ', myArr);

const myn1 = myArr.slice(1,3)// index 1 se 2 tak print karega only 3 include ni karta
console.log(myn1);

console.log('b ', myArr);


const myn2 = myArr.splice(1,3)/* index 1 se 3 tak print karega only or original array
 change hogya uski value nikal gai jo range humne select kari thi...*/
console.log(myn2);
console.log('c ', myArr);
