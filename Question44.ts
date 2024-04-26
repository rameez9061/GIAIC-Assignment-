

let order_sandwich=(...ingredients:string[])=>{
       
    let order:string = `Make a Sandwich with ${ingredients.join(",")}.`
    console.log(order);
}

order_sandwich("BBQ","cheese");
order_sandwich("meat","onion","pickle")
order_sandwich("sauce","crumbs","patty");