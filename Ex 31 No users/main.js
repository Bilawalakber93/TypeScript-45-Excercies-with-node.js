var userName = ["Khizar", "Ali", "Fahad", "Farhan", "Admin"];
userName = [];
if (userName.length === 0) {
    console.log("Your array in Empty we need finf some users!");
}
else {
    // Using ForEach Loop on Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for loggoing in again."));
        }
    });
}
