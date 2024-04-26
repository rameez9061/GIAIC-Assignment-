var grades = [56, 34, 76, 52, 88, 44];
var mapped = function (element, element1) {
    return element + element1;
};
var total_grade = grades.reduce(mapped, 0);
console.log(total_grade);
var average = total_grade / grades.length;
console.log(average);
