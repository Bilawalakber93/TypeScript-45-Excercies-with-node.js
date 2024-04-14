// Array of current users
var current_users = ["Khizar", "Ali", "Zeeshan", "Zain", "usama"];
// Array of New Uers
var new_users = ["Bilawal", "Zain", "Kamal", "Ali", "Maaz"];
// Loop through new_users to check yor user name avaliblity
new_users.forEach(function (new_one_user) {
    //Making a condition for username already exist & save in our_Conditions variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print Different message using if-Else Statments
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is avalible"));
    }
});
