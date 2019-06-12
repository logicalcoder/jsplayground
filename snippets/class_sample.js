class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('John', 'Doe', '12-5-1988');
const person2 = new Person('Jane', 'Smit', '9-10-1985');

console.log('person1 :', person1);
console.log('person2.getFullName :', person2.getFullName());