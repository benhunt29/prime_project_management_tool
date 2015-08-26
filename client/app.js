 * Created by Shawn on 8/26/15.
 */
var chance = new Chance();
var projectInfo;

// generates random company name
function generateName() {
	var adjNoun = new adjNoun();
	adjNoun.seed(chance.integer({min: 0, max: 1000}));
	return adjNoun().join(' ');
}

var Project = function() {
	this.compName = generateName();
	this.fePts = chance.integer({min: 10, max: 60});
	this.csPts = chance.integer({min: 10, max: 60});
	this.ssPts = chance.integer({min: 10, max: 60});
	this.assignedSkills = [];
	this.sprints = 0;// number of sprints needed for completion
	this.showProjectInfo();
};

// displays project info onto DOM after generation
Project.prototype.showProjectInfo = function () {
	$('#compName').text(projectInfo.compName);
	$('#fePts').text(projectInfo.fePts);
	$('#csPts').text(projectInfo.csPts);
	$('#ssPts').text(projectInfo.ssPts);
};

// check if new employee skill set vs total points needed is greater than previously set (want highest count)
Project.prototype.calcSprint = function (scrumPts, abbr) {
	var totalPts = this[abbr +"Pts"];
	var newSprints = Math.ceil(totalPts / scrumPts);
	if(newSprints > this.sprints)
	{
		this.sprints = newSprints;
		$('#sprintsNum').text(newSprints);// update DOM with new sprint length
		$('#sprintsSection').removeClass('hidden');// show sprint section
	}
};

// adds employee to DOM and their info to Project
var addEmployee = function (employee) {
	var abbr;
	switch(employee.skills) {
		case "Client Side":
			abbr = "cs";
			break;
		case "Server Side":
			abbr = "ss";
			break;
		case "Front End":
			abbr = "fe";
			break;
	}
	projectInfo.calcSprint(employee.scrumPts, abbr);
	projectInfo.assignedSkills.push(abbr);// push the skills to the object for referencing

	$('#'+ abbr +'Name').val(employee.name);
	$('#'+ abbr +'Points').val(employee.scrumPts);
};

// gets a random employee, only called for first iteration, as there is nothing needed to post
var createEmployee = function () {
	$.ajax (
	{
		type: "GET",
		url: 'http://127.0.0.1:3000',
		data: 'employee',
		dataType: 'json'
	}).done(function (res) {
		addEmployee(res);
		postEmployee();
	});
};

// gets a random employee after the first, posting the filled positions for comparison for no overlap
var postEmployee = function () {
	$.ajax (
	{
		type: "POST",
		url: 'http://127.0.0.1:3000',
		data: JSON.stringify(projectInfo.assignedSkills),
		dataType: 'json'
	}).done(function (res) {
		addEmployee(res);
		if(projectInfo.assignedSkills.length < 3) {
			postEmployee();
		}
	});
};


$(document).ready(function () {

	$('#generate').click(function() {
		projectInfo = new Project();
		$('#genSection').addClass('hidden');
	});

	$('#assignEmp').click(function () {
		createEmployee();
	});
});