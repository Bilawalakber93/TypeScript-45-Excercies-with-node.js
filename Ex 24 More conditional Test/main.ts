// Define Variables
let fruit = "fruit";
let uppercasefruit = "FRUIT";
let ten = 10;
let twenty = 20;     
let cities = ["Karachi","Lahour","Islamabad"]

//Test for equality or inequality with string

console.log("is fruit is equal to fruit?");
console.log(fruit == fruit);

console.log("\nis fruit is notequal to fruit?");
console.log(fruit != fruit);

//Test using the LowerCase Function

console.log("\nIs FRUIT is equal to fruit after converting lowercase?");
console.log(uppercasefruit.toLowerCase()=="fruit");

console.log("\nIs FRUIT is not equal to fruit after converting lowercase?");
console.log(uppercasefruit.toLowerCase()!="fruit");

//Numerical tests 

//Equals to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not Equals to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than 
console.log("\nIs ten is greater than 0?");
console.log(ten > 0);
//Less than
console.log("\nIs twanty is less than 10?");
console.log(20 < 10);
//Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equals to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10); 

//Tests using "and" "&&"
console.log("\nIs twenty is not equal to 10 & twenty is greater than 10")
console.log(twenty != 10 && twenty > 10);

console.log("\nIs twenty is not equal to 10 & twenty is greater than 30")
console.log(twenty != 10 && twenty > 30);

//Test Using "OR" "||"
console.log("\nIs 20 is greater than 50 OR 20 is equals to 20");
console.log(20 > 50 || 20 == 20);

console.log("\nIs 20 is greater than 50 OR 20 is not equals to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in a array
console.log("\nIs Karachi include is in my city Array")
console.log(cities.includes("Karachi"));

//Test whether an item is not include in a array
console.log("\nIs Karachi include is in my city Array")
console.log(!cities.includes("Karachi"));
