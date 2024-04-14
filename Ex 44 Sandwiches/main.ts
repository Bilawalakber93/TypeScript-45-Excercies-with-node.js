// Define a function with a rest parameter that accept items arguments representing our sandwiches
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now Enjoy sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "mayo", "Butter", "Egg", "Tomato", "Chicken", "Cheese");