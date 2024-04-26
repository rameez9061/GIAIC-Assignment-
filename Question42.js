var magician_names = ["Josh", "Henry", "Charles", "William"];
var make_great = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
};
var func = function (element) {
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var names = element_1[_i];
        console.log(names);
    }
};
make_great(magician_names);
func(magician_names);
