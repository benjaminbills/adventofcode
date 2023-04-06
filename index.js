// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

const fs = require('fs'); // module to read file
const readline = require('readline'); //read line module

const file = readline.createInterface({
  input: fs.createReadStream('input.txt'), 
  output: process.stdout,
  terminal: false, 
});
const obj = {}; // Declare an object to store elves data
let index = 1; // Index to as key for data

// Add an event listener on file 
file.on('line', (line) => {
  // Execute on each line
  if (line !== '') { // check if line is empty
    if (!obj.hasOwnProperty(index)) { //check if index is already in obj
      obj[index] = []; // create new obj key as index and set value to empty array
    }
    obj[index].push(Number(line)); // save values on input file in an object array 
  }
  if (line === '') { // if line is empty increase index
    index++; 
  }
});

//add a close event listener on file
file.on('close', () => {
  let sum = [] // declare an sum array variable
  for (const key in obj) { // loop through object
    if (Object.hasOwnProperty.call(obj, key)) { // check if obj has property with the name specified by key
      const sumCurrent = obj[key].reduce((acc, val) => acc + val, 0); // get the sum of the array associated with the key
      sum.push(sumCurrent) // push the currentSum into sum array
    }
  }
  sum.sort((a,b) => b-a) // sort the sum array
  const highestCaloriesElf = sum[0]; // get the highest value in the sum array
  const topThreeCaloriesElf =sum[0] + sum[1] + sum[2]; // get the top three highest value in the array
  console.log(`Elf carrying the most Calories is carrying:${highestCaloriesElf} calories` );
  console.log(
    `Top three Elves carrying the most Calories are carrying:${topThreeCaloriesElf} calories`
  );
});


