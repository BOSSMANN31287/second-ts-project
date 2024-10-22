"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentImplementations = void 0;
var studentImplementations = /** @class */ (function () {
    function studentImplementations() {
        this.students = [];
    }
    studentImplementations.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    studentImplementations.prototype.findStudentById = function (id) {
        var sdt = this.students.find(function (student) { return student.id === id; });
        if (!sdt) {
            return "The student with ID:".concat(id, " ain't ours");
        }
        else {
            return sdt;
        }
    };
    studentImplementations.prototype.getAllStudent = function () {
        return this.students;
    };
    studentImplementations.prototype.updateStudent = function (id, updatedData) {
        var student = this.findStudentById(id);
        if (student) {
            Object.assign(student, updatedData);
        }
        console.log("Cannot update date");
    };
    studentImplementations.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (student) { return student.id === id; });
        if (index >= 0) {
            this.students.splice(index, 1);
        }
        console.error("Student with ID: ".concat(id, " doesn't exist"));
    };
    return studentImplementations;
}());
exports.studentImplementations = studentImplementations;
