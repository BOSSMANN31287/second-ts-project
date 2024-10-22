import { Istudent } from "./student.interface";

export interface studentActions{
    addStudent(student: Istudent): void;
    findStudentById(id: number): Istudent | string;
    getAllStudent(): Istudent[];
    updateStudent(id: number, updatedData: Partial<Istudent>): void;
    removeStudent(id: number): void;
}