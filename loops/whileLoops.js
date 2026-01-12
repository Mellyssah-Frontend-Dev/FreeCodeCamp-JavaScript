let num = 1;

while (num <= 5) {
  console.log(num);
  num++;
}

//explanation
//Start at 1
//Print the number
//Increase by 1
//Stop when number becomes 6


let total = 0;

while (total < 20) {
  total += 5;
  console.log("Current total:", total);
}

//Add 5 each time
//Loop stops when total becomes 20 or more

//loop through an array of strings
let fruits = ["apple", "banana", "mango"];
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}


//looping through an array of numbers
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
let index = 0;

while (sum < 120) {
    sum += numbers[i];
    console.log(sum);
    index++;
}

