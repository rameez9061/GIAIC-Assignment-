var average = function () {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var mapped = function (element, element1) {
        return element + element1;
    };
    var total_grade = marks.reduce(mapped, 0);
    var average = total_grade / marks.length;
    console.log(average);
};
average(23, 54, 66, 56, 87, 45);
