// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magicians_names = ["Harry Potter", "Khizar", "Bilawal"]

//Making a copy of original array through .slice{} function
let copy_great_names = magicians_names.slice();

// making a copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_great_names);

// show both array orignal & copied

// Original
console.log("Original Array \n")
show_magicians(magicians_names);

// Copied
console.log("\n Copied Array \n")
show_magicians(copy_great_magicians);
