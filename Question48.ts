let laptop_price1 = [1200,4000,3500];
let laptop_price2 = [3200,2000,5000];

let sorted = [...laptop_price1,...laptop_price2].sort((a,b)=> a-b);

console.log(sorted)