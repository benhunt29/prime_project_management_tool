var employeeName = require('./employeeName');
var employeeScrumPts = require('./employeeScrumPts');
var employeeSkill = require('./employeeSkill');

function Employee (array) {
	this.name = employeeName.employeeName();
	this.skills = employeeSkill.employeeSkill(array);
	this.scrumPts = employeeScrumPts.employeeScrumPts(1,9);
};

module.exports = Employee;