// set a variable holding an array of strings, the usernames.

let usernames = [`Crash`, `Spiro`, `winner_Coco`, `Aku Aku`, `winner_Nitro`];

// my access into the array to count through individually
let counter = 0;

// while statement will only count while the counter is less than the length of items inside username array.
while (counter < usernames.length) {
//this variable will us the toLowerCase function to change the upper case characters into a lower case 
  let lowerCaseName = usernames[counter].toLowerCase();
// this variable with us the includes function to check if the string has the characters winner in it  
  let doesInclude = lowerCaseName.includes(`winner`);
// this if statement will make sure that the string DOES include the characters winner
  if (doesInclude === true) {
    console.log(`We have a winner ${usernames[counter]}`);
    
  }
//   the counter++ will keep the loop going until it hits the max amount determined in the while
  counter++;
}
