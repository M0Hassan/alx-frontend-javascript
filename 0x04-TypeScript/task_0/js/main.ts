interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName: 'John',
    lastName: 'Valenzani',
    age: 19,
    location: 'Uruguay',
}

const student2 : Student = {
    firstName: 'George',
    lastName: 'Pacheco',
    age: 27,
    location: 'Earth',
}

const studentList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);