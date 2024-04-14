let guestList = ["Bilawal","Waqas","Abid","Khizar"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Ahh Skta");

guestList.splice(0, 1, "Samad");

guestList.forEach(guest => console.log(`Salam! ${guest}, Would you like to dinner with me?`));