function Employee(name, id, email)
this.name = name;
this.id = id;
this.email = email;
this.getSchool = school;
this.getRole = getrole;

Employee.prototype.getName = function () {
  return `${this.name} 'John'`;
};

test

Employee.prototype.getId = function () {
  return `${this.id} is ${this.5}`;
};

test

Employee.prototype.getEmail = function() {
  return `${ this.email } is ${ this.john@fakemail.com }`;
};

test

Employee.prototype.getSchool = function() {
  return `${ this.school } is ${ 2University }`;
};

test

Employee.prototype.getRole = function() {
// Overridden to return 'Intern'
  return this.Intern = "This method overrides the default constructor of Employee class.";
};

test
