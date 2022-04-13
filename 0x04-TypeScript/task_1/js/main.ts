// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher: Teacher = {
  firstName: 'Jane',
  lastName: 'Doe',
  location: 'Estonia',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher)

const director: Directors = {
  firstName: 'Esther',
  lastName: 'sneider',
  location = 'Estonia'
  fullEmployee = true,
  numberOfReports = 15,
};

console.log(director);

// returns a Teacher's name in this format: F. Esther
function print printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Kevin', 'Smith'));

// class description interface
interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

// creating class and constructor through interfaces
class StudentClass implements classsInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName: firstName;
    this.lastName: lastName;
  }

  workonHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentClasss: StudentClass = new StudentClass('Chavez', 'Figoroa');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
