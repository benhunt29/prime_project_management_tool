var employeeName = require('./employeeName');
var employeeScrumPts = require('./employeeScrumPts');
var employeeSkill = require('./employeeSkill');

var employee = {
    name: employeeName.employeeName(),
    skills: employeeSkill.employeeSkill(),
    scrumPts: employeeScrumPts.employeeScrumPts(1,9)
};

//var employee =  function (array) {
//	this.name = employeeName.employeeName();
//	this.skills = employeeSkill.employeeSkill(array);
//	this.employeeScrumPts = employeeScrumPts.employeeScrumPts(1,9);
//};

module.exports = employee;