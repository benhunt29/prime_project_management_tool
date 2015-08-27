var express = require('express');
var employee = require('./controllers/employee');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var index = require('./routes/index.js');
app.use('/', index);
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/employee', function(req,res,next){
    //res.send("Name: " + employee.name + '\n');
    //res.send("Skills: " + employee.skills + '\n');
    //res.send("Scrum Points: " + employee.scrumPts + '\n');
	res.send(JSON.stringify({"name": employee.name, "skills": employee.skills, "points": employee.scrumPts}));
});

app.post('/employee',function(req,res,next){
    //var assignedSkills = req.params;
	//console.log(req.params);
	console.log("skills test", req.body.skills);
	var assignedSkills = ["Server Side"];
	//var assignedSkills = req.body.skills;
    //res.send("Name: " + employee.name + '\n');
    //res.send("Skills: " + employee.skills(assignedSkills) + '\n');
    //res.send("Scrum Points: " + employee.scrumPts + '\n');
	console.log("var", assignedSkills);
	//console.log("property", employee.employeeSkill);
	res.send({"name": employee.name, "skills": employee.employeeSkill(assignedSkills), "points": employee.scrumPts});
	//res.send(JSON.stringify({"name": employee.name, "skills": employee.skills(assignedSkills), "points": employee.scrumPts}));
});

app.use(express.static(path.join(__dirname,'/public')));
//app.use('/', index);
//app.use('/users', users);
app.use('/assets',express.static(__dirname + '/node_modules/adj-noun/'));
app.use('/assets',express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/assets',express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/assets',express.static(__dirname + '/node_modules/adj-noun/'));
app.use('/assets',express.static(__dirname + '/node_modules/chance/'));
var server = app.listen(process.env.PORT || 3000, function(){
    //var port = controllers.address().port;
    //console.log('App listening on ',);
});