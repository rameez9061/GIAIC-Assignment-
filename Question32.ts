let current_users:string[]=["Ahmed","Umar","Usama","Zain","Hadi"];
let new_users:string[]=["Hussnain","Ali","Ahmed","Zain","Faizan"];


new_users.forEach((element)=>{
    if(current_users.some((element2)=>{
        return element2.toLowerCase()===element.toLowerCase()
    })){
        console.log(`${element} will need to enter a new user name`);
    }
    else{
        console.log(`${element} is available to be used`);
    }
})