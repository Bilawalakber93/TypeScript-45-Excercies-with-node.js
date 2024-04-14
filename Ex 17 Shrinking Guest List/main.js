//Creating a Guest List Array
var guestList = ["Bilawal", "Waqas", "Abid", "Khizar"];
//Making Variable for those guest cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osman");
//Print msg of updated list
console.log("updated List of your guest");
//Sending Invitation
guestList.forEach(function (guest) { return console.log("Salam! ".concat(guest, ", Would you like to dinner with me?")); });
//inform that only two guest can be invites for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two Guests to dinner with me");
//using while.loop to remove guests from the array untill only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " I can't invite you to dinnare"));
}
//sending a invitation to the last two guest on the list
console.log("invitations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two Guest from the List
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
