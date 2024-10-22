import { Istudent } from "./student.interface";
import { studentActions } from "./studentActions";
import { studentImplementations } from "./studentActionImplementation";
import { json } from "stream/consumers";
import * as fs from 'fs';
import { log } from "console";

const studentService = new studentImplementations();

const filePath = 'output.json';

function writeData(data: any[]): void{
    const str = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, str);
    console.log("Written to file successfuly");
}

function readData(): any[]{
    if(!fs.existsSync(filePath)){
        return [];
    }
    const dataRead = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(dataRead);
}

function addNewStudents(newStudents: {id: number, firstName: string, lastName: string, laptop: string, teacher: string, course: string}[]){
    const existingData = readData();
    const updatedData = [...existingData, ...newStudents];
    writeData(updatedData);
    console.log("Data succesfully updated", newStudents);
    
}

const sdt1: Istudent = {id: 1, firstName: "Kelly", lastName: "Achara", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
const sdt2: Istudent = {id: 2, firstName: "Alejandro", lastName: "Garnacho", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };
const sdt3: Istudent = {id: 3, firstName: "Kobbie", lastName: "Mainoo", laptop: "Alienware", teacher: "Mr Henshaw", course: "Front-end" };

const initialStudents = [sdt1, sdt2, sdt3];

writeData(initialStudents);


const sdt4 = {id: 4, firstName: "Johnson", lastName: "Cama", laptop: "HP", teacher: "Mr Mike", course: "Back-end" };
const sdt5 = {id: 5, firstName: "Rafael", lastName: "Santos", laptop: "MacBook", teacher: "Mr Richmond", course: "Cyber-security" };

const addedStudents = [sdt4, sdt5];

addNewStudents(addedStudents);