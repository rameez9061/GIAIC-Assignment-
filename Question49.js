var hobby = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (element) {
        console.log("So you like ".concat(element));
    });
};
hobby("cricket", "football", "gardening");
