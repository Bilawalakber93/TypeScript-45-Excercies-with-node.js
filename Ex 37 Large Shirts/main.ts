// Making  a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a Function with by defult values
make_shirt();

// Calling a function now with Medium size & defult messsage
make_shirt("Medium");

// Calling a function now with Small size & also differnt message
make_shirt("Small", "I Love Javascript")
