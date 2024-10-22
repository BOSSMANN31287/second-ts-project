"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentActionImplementation_1 = require("./studentActionImplementation");
var fs = require("fs");
var studentService = new studentActionImplementation_1.studentImplementations();
var sdt1 = { id: 1, firstName: "Kelly", lastName: "Achara", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
var sdt2 = { id: 2, firstName: "Alejandro", lastName: "Garnacho", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };
var sdt3 = { id: 3, firstName: "Kobbie", lastName: "Mainoo", laptop: "Alienware", teacher: "Mr Henshaw", course: "Front-end" };
var pupils = [sdt1, sdt2, sdt3];
// studentService.addStudent(sdt1);
// studentService.addStudent(sdt2);
// studentService.addStudent(sdt3);
var strFy = JSON.stringify(pupils, null, 2);
// console.log("-------FIND STUDENT BY ID---------");
// console.log(studentService.findStudentById(30));
// console.log(studentService.getAllStudent());
fs.writeFile("test2.JSON", strFy, function (err) {
    if (err) {
        console.error("Shit");
        return;
    }
    console.log("Successfull");
});
