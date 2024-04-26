let adding_number = (value:number)=>{

      return (number:number)=>{
            return number +value;
      }
}

let add10 = adding_number(10);
console.log(add10(20))