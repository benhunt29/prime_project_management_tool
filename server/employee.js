var employeeName = require('./employeeName');
var employeeScrumPts = require('./employeeScrumPts');
var employeeSkill = require('./employeeSkill');

var employee = {
    name: employeeName.employeeName(),
    skills: employeeSkill.employeeSkill(),
    scrumPts: employeeScrumPts.employeeScrumPts(1,9)
};

module.exports = employee;