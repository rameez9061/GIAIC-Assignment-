var adding_number = function (value) {
    return function (number) {
        return number + value;
    };
};
var add10 = adding_number(10);
console.log(add10(20));
