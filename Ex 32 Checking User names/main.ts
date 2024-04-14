// Array of current users
let current_users = ["Khizar", "Ali", "Zeeshan", "Zain", "usama"]

// Array of New Uers
let new_users = [ "Bilawal", "Zain", "Kamal", "Ali", "Maaz"]

// Loop through new_users to check yor user name avaliblity
new_users.forEach(new_one_user =>{

    //Making a condition for username already exist & save in our_Conditions variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    
    //Print Different message using if-Else Statments
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is avalible`)
    }
})