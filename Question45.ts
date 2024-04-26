let car=(maker:string , model:string , ...options:[string,any][]):Object=>{

    let object ={maker,model};
    options.forEach(([key,value])=>{
        
          object[key] = value;

    })

    return object;
    

}

console.log(car("Benz","Mercedes",["color","blue"],["year",2022]));