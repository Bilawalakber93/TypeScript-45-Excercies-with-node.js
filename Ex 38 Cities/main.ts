// Describe a function
function describe_city (city: string, country: string = "pakistan"){
    console.log(`${city} is in ${country}`);
}

// Calling the function
describe_city("Karachi");

describe_city("Lahour");

describe_city("Berlin", "Germany");