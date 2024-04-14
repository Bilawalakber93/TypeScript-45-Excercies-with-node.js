//Creating a Guest List Array
let guestList = ["Bilawal","Waqas","Abid","Khizar"];

//Making Variable for those guest cant come
let dontCome = guestList[0];

//print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Skta");

//Adda or remove values from Guest list Array
guestList.splice(0, 1, "Samad");

//Message Print for Bigger Table
console.log("Good News! We have Found a Bigger Table for a Dinner");

//Adding a new value at starting index of array
guestList.unshift("Sheroz");

//Adding a new value at ending index of array
guestList.push("Mubeen");

//Adding a new guest at middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osman")

//Print msg of updated list
console.log("updated List of your guest")

//Sending Invitation
guestList.forEach(guest => console.log(`Salam! ${guest}, Would you like to dinner with me?`));