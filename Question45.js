var car = function (maker, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var object = { maker: maker, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        object[key] = value;
    });
    return object;
};
console.log(car("Benz", "Mercedes", ["color", "blue"], ["year", 2022]));
