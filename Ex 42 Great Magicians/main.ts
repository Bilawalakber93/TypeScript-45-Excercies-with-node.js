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

// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// Call show_magicians Function that show modify list of magicians
show_magicians(great_magicians);
