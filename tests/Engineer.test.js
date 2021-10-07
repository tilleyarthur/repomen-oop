function Employee(name, id, email)
this.name = name;
this.id = id;
this.email = email;
// github username
this.github = github;
this.getrole = getrole;

Employee.prototype.getName = function () {
  return `${this.name} 'Alec'`;
};

test

Employee.prototype.getId = function () {
  return `${this.id} is ${this.two};
}`;
};

test

Employee.prototype.getEmail = function() {
  return `${ this.email } is ${ this.alec@fakemail.com } `;
};

test

Employee.prototype.getGithub = function() {
  return `${ this.github } is ${ ibealec }`;
};

test

Employee.prototype.getRole = function() {
// Overridden to return 'Engineer'
  return this.Engineer = "This method overrides the default constructor of Employee class.";
};

test
