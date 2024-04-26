var order_sandwich = function () {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    var order = "Make a Sandwich with ".concat(ingredients.join(","), ".");
    console.log(order);
};
order_sandwich("BBQ", "cheese");
order_sandwich("meat", "onion", "pickle");
order_sandwich("sauce", "crumbs", "patty");
