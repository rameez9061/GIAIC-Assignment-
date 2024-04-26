var magician_names = ["Josh", "Henry", "Charles", "William"];
var make_great = function (magicians) {
    var great_magician = [];
    magicians.forEach(function (element) {
        great_magician.push("Great ".concat(element));
    });
    return great_magician;
};
var func = function (element) {
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var names = element_1[_i];
        console.log(names);
    }
};
var great_magician = make_great(magician_names.slice());
func(magician_names);
func(great_magician);
