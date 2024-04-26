
let hobby = (...hobbies:string[])=>{

    hobbies.forEach((element)=>{
           
          console.log(`So you like ${element}`)
    })

}

hobby("cricket","football","gardening");