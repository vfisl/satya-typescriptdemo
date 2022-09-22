var Student = /** @class */ (function () {
    function Student(name, studentId, city, department, hobby) {
        if (hobby === void 0) { hobby = 'sports'; }
        var _this = this;
        this.name = name;
        this.studentId = studentId;
        this.city = city;
        this.department = department;
        this.hobby = hobby;
        this.printDetails = function () {
            console.log("Name : ".concat(_this.name));
            console.log("id : ".concat(_this.studentId));
            console.log("Department : ".concat(_this.department));
        };
        this.showCourses = function () {
            var course = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                course[_i] = arguments[_i];
            }
            course.forEach(function (course) { return console.log("".concat(course)); });
        };
    }
    return Student;
}());
var student = new Student('sadik', 100, 'assam', 'java');
console.log(student);
student.printDetails();
student.showCourses('java', 'c++');
