import { Istudent } from "./student.interface";
import { studentActions } from "./studentActions";

export class studentImplementations implements studentActions {

    private students: Istudent[] = [];

    addStudent(student: Istudent): void {
        this.students.push(student);
    }
    findStudentById(id: Number): Istudent | string {
        const sdt = this.students.find((student) => student.id === id);
        if(!sdt){
            return `The student with ID:${id} ain't ours`
        }else{
            return sdt;
        }
    }
    public getAllStudent(): Istudent[] {
        return this.students;
    }
    updateStudent(id: number, updatedData: Partial<Istudent>): void {
        const student = this.findStudentById(id);
        if(student){
            Object.assign(student, updatedData);
        }console.log("Cannot update date");
    }
    removeStudent(id: number): void {
        const index = this.students.findIndex((student) => student.id === id);
        if(index >= 0){
            this.students.splice(index, 1);
        }console.error(`Student with ID: ${id} doesn't exist`);
    }

}