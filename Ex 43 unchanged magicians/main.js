// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Harry Potter", "Khizar", "Bilawal"];
//Making a copy of original array through .slice{} function
var copy_great_names = magicians_names.slice();
// making a copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_great_names);
// show both array orignal & copied
// Original
console.log("Original Array \n");
show_magicians(magicians_names);
// Copied
console.log("\n Copied Arrar \n");
show_magicians(copy_great_magicians);
