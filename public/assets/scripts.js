 /* Created by Shawn on 8/26/15.
 */
var chance = new Chance();
var projectInfo;

// generates random company name
function generateName() {
	//adjNoun = new adjNoun();// adjective noun generator for company name
	//// adding in a random number (seed number) further randomizes the name generation
	//adjNoun.seed(chance.integer({min: 0, max: 1000}));
	//// proper capitalization for company name
	//return adjNoun[0].charAt(0).toUpperCase() +" "+ adjNoun[1].charAt(1).toUpperCase();
	////return adjNoun().join(' ');
	//console.log("Some Awesome Company");
	return "Some Awesome Company";
}

var Project = function() {
	this.compName = generateName();
	// generates random point requirements for project
	this.fePts = chance.integer({min: 10, max: 60});
	this.csPts = chance.integer({min: 10, max: 60});
	this.ssPts = chance.integer({min: 10, max: 60});
	this.assignedSkills = [];// skill sets assigned to project (ss, cs, fe)
	this.sprints = 0;// number of sprints needed for completion
	this.showProjectInfo();// calls the show function, so as soon as the project is created, it is shown
};

// displays project info onto DOM after generation
Project.prototype.showProjectInfo = function () {
	$('#compName, #compHeader').text(this.compName);
	$('#feReqPts').text(this.fePts);
	$('#csReqPts').text(this.csPts);
	$('#ssReqPts').text(this.ssPts);
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
	projectInfo.assignedSkills.push(employee.skills);// push the skills to the object for referencing
	//console.log(abbr +'Pts');
	$('#'+ abbr +'Name').text(employee.name);
	$('#'+ abbr +'Pts').text(employee.scrumPts);
	//console.log("$('#"+ abbr +"Pts').text("+ employee.scrumPts +")");
};

// gets a random employee, only called for first iteration, as there is nothing needed to post
var getEmployee = function () {
	$.ajax (
	{
		type: "GET",
		url: '/employee',
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
		url: '/employee',
		data: {skills: JSON.stringify(projectInfo.assignedSkills)},
		dataType: 'json'
	}).done(function (res) {
		addEmployee(res);
		// run until 3 employees are created (last call is when there's 2)
		if(projectInfo.assignedSkills.length < 3) {
			postEmployee();
		}
	});
};

$(document).ready(function () {
	// generate new project
	$('#generate').click(function() {
		projectInfo = new Project();
		$('#genSection').addClass('hidden');// hide top section
		$('#projSection').removeClass('hidden');// show project section
	});

	// add employees to project (only need to click once
	$('#assignEmp').click(function () {
		// only allow it to be clicked when no employees have been created
		if(projectInfo.assignedSkills.length == 0)
		{
			getEmployee();
		}
		$('#sprintsSection').removeClass('hidden');
	});

	// reset project generator
	$('#reset').click(function () {
		$('#genSection').removeClass('hidden');// show top section
		$('#projSection').addClass('hidden');// hide project section
		$('#sprintsSection').addClass('hidden');
		$('#feName, #csName, #ssName, #fePts, #csPts, #ssPts').text('');
		projectInfo.length = 0;// clear out object for new one
	});
});