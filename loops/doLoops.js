//do-while loops
let count = 0;
do{console.log(`Count: ${count}`); count++
}
while(count<6);

//It prints count
//Increases count
//Checks if count <= 6
//Repeats until condition is false


//A do...while loop executes the code block first and then checks the condition. It always runs at least once, even if the condition is false.


let password;

do {
    password = "1234"; // imagine user input here
    console.log("Checking password...");
}while (password !== "1234");
console.log("Access granted");

//note
//do {
   // code runs first
//}while (condition);

