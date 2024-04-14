let userName = ["Khizar", "Ali", "Fahad", "Farhan", "Admin"]

userName = []

if (userName.length === 0){
    console.log("Your array in Empty we need find some users!")
}else{
    // Using ForEach Loop on Array
    userName.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, thankyou for loggoing in again.`)
        }
    })
}