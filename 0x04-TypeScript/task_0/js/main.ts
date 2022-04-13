// Student Interface

Interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Kean',
  age: 45,
  location: 'China',
}

const student2: Student = {
  firstName: 'George',
  lastName: 'Irvine',
  age: 50,
  location: 'Greece',
}

const studentList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row):
});

table.appendChild(tbody);
document.body.appendChild(table);
