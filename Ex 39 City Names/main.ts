// Creating a Function with parameters which return a value in sting
function city_country(city: string, country: string) : string{
    return `${city} , ${country}`;
}

// Calling a function & Print the returned value

console.log(city_country("Islamabad", "Pakistan"));

console.log(city_country("Delhi", "india"));

console.log(city_country("Tokyo", "Japan"));