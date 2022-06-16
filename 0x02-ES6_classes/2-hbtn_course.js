/*
Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.

*/

export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string") {
            throw TypeError("Name must be a string");
        }
        this._name = newName;
    }

    get length() {
        return this._length; 
    }

    set length(newLength) {
        if (typeof newLength !== "number") {
            throw TypeError("Length must be a number");
        }
        this._length = newLength;
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents) 
            || this.students.every((student) => typeof student !== "string")) {
                throw TypeError("Students must be an array of strings");
            }
            this._students = newStudents;  
        }
}