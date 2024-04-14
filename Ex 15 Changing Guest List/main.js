var guestList = ["Bilawal", "Waqas", "Abid", "Khizar"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Ahh Skta");
guestList.splice(0, 1, "Samad");
guestList.forEach(function (guest) { return console.log("Salam! ".concat(guest, ", Would you like to dinner with me?")); });
