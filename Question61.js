var vehicles;
(function (vehicles) {
    vehicles[vehicles["bike"] = 0] = "bike";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["Jeep"] = 2] = "Jeep";
})(vehicles || (vehicles = {}));
console.log(vehicles[2]);
