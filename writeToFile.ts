import { Istudent } from "./student.interface";
import { studentActions } from "./studentActions";
import { studentImplementations } from "./studentActionImplementation";
import * as fs from 'fs';
import { error } from "console";

const studentService = new studentImplementations();


const sdt1: Istudent = {id: 1, firstName: "Kelly", lastName: "Achara", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
const sdt2: Istudent = {id: 2, firstName: "Alejandro", lastName: "Garnacho", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };
const sdt3: Istudent = {id: 3, firstName: "Kobbie", lastName: "Mainoo", laptop: "Alienware", teacher: "Mr Henshaw", course: "Front-end" };

const pupils = [sdt1, sdt2, sdt3];
studentService.addStudent(pupils[0 && 1 && 2]);
// studentService.addStudent(sdt1);
// studentService.addStudent(sdt2);
// studentService.addStudent(sdt3);

const strFy = JSON.stringify(pupils, null, 2);

fs.writeFile("test2.JSON", strFy, (err) => {
    if(err){
        console.error("Shit");
        return;
    }console.log("Successfull");

});


// console.log("-------FIND STUDENT BY ID---------");
// console.log(studentService.findStudentById(30));
// console.log(studentService.getAllStudent());

