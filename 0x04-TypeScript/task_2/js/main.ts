interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

// interface of teachers
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorsInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher Class
class Tewacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting work';
  }
}

function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
  if (salary as number && salary < 500) return new Teacher();
  else return new Director();
}

console.log(createEmployee('Javier', 'Batista', 550));
console.log(createEmployee('Esther', 'Kurtis', 300));
console.log(createEmployee('Bob', 'Jurgon', '$450'));

function executeWork (employee: Director | Teacher): string {
  return (employee instanceof Director) ? true: false;
}

//function executeWork
function executeWork (employee: Director | Teacher): string {
  return IsDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee('Guillaume', 'Salva', 200)));
console.log(executeWork(createEmployee('Julien', 'Barbier', 1000)));

// Subjects
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string{
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
