var current_users = ["Ahmed", "Umar", "Usama", "Zain", "Hadi"];
var new_users = ["Hussnain", "Ali", "Ahmed", "Zain", "Faizan"];
new_users.forEach(function (element) {
    if (current_users.some(function (element2) {
        return element2.toLowerCase() === element.toLowerCase();
    })) {
        console.log("".concat(element, " will need to enter a new user name"));
    }
    else {
        console.log("".concat(element, " is available to be used"));
    }
});
