function Employee(name, id, email)
this.name = name;
this.id = id;
this.email = email;
this.officeNumber = officeNumber;
this.getrole = getrole;

Employee.prototype.getName = function () {
  return `${this.name} 'Jared'`;
};

test

Employee.prototype.getId = function () {
  return `${this.id} is ${this.one}`;
};

test

Employee.prototype.getEmail = function() {
  return `${ this.email } is ${ this.jared@fakemail.com } `;
};

test

Employee.prototype.officeNumber = function() {
  return `${ this.number } is ${ 1 }`;
};

test

Employee.prototype.getRole = function() {
// Overridden to return 'Manager'
  return this.Manager = "This method overrides the default constructor of Employee class.";
};
