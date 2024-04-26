let magician_names:string[] = ["Josh","Henry","Charles","William"];

let make_great=(magicians:string[]):string[]=>{
      let great_magician:string[] = [];
      magicians.forEach((element)=>{
           
        great_magician.push(`Great ${element}`)
      })

      return great_magician;
}

let func=(element:string[])=>{
      
       for(let names of element){
        console.log(names)
       }
}

let  great_magician = make_great(magician_names.slice());

func(magician_names);
func(great_magician)