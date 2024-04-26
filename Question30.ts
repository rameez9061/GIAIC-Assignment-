// Question 30

let user_names = ["Rameez","Umar","Zohaib","Khalid","admin"];

user_names.forEach((username)=>{
    if(username=="admin"){
        console.log("Hello admin , would you like to see the status report");
    }
    else{
        console.log(`hello ${username} thank you for logging in again.`)
    }
})