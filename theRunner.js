"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var studentActionImplementation_1 = require("./studentActionImplementation");
var fs = require("fs");
var studentService = new studentActionImplementation_1.studentImplementations();
var filePath = 'output.json';
function writeData(data) {
    var str = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, str);
    console.log("Written to file successfuly");
}
function readData() {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    var dataRead = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dataRead);
}
function addNewStudents(newStudents) {
    var existingData = readData();
    var updatedData = __spreadArray(__spreadArray([], existingData, true), newStudents, true);
    writeData(updatedData);
    console.log("Data succesfully updated", newStudents);
}
var sdt1 = { id: 1, firstName: "Kelly", lastName: "Achara", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
var sdt2 = { id: 2, firstName: "Alejandro", lastName: "Garnacho", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };
var sdt3 = { id: 3, firstName: "Kobbie", lastName: "Mainoo", laptop: "Alienware", teacher: "Mr Henshaw", course: "Front-end" };
var initialStudents = [sdt1, sdt2, sdt3];
writeData(initialStudents);
var sdt4 = { id: 4, firstName: "Johnson", lastName: "Cama", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
var sdt5 = { id: 5, firstName: "Rafael", lastName: "Santos", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };
var updatedObjects = [sdt4, sdt5];
addNewStudents(updatedObjects);
// console.log("-------FIND STUDENT BY ID---------");
// console.log(studentService.findStudentById(30));
// console.log(studentService.getAllStudent());
// studentService.updateStudent(1, {laptop: "MacBook", course: "ADSE"});
// console.log("-------UPDATE STUDENT------");
// console.log(studentService.getAllStudent());
// studentService.removeStudent(20);
// console.log("-----------ALL STUDENT AFTER REMOVAL----------");
// console.log(studentService.getAllStudent());
