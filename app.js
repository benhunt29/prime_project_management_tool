var express = require('express');
var employee = require('./controllers/employee');
var path = require('path');

var app = express();

app.get('/', function(req,res,next){
    //res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
});

app.post('/',function(req,res,next){
    var assignedSkills = req.params;

    res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills(assignedSkills) + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
});

app.use(express.static(path.join(__dirname,'./public')));
//app.use('/', index);
//app.use('/users', users);
app.use('./public/assets',express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/public/assets',express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/public/assets',express.static(__dirname + '/node_modules/adj-noun/'));
app.use('/public/assets',express.static(__dirname + '/node_modules/chance/'));
var server = app.listen(process.env.PORT || 3000, function(){
    //var port = controllers.address().port;
    //console.log('App listening on ',);
});