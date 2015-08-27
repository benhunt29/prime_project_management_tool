express = require('express');
employee = require('./controllers/employee');

var app = express();

app.get('/', function(req,res,next){
    res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
});

app.post('/',function(req,res,next){
    var assignedSkills = req.params;

    res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills(assignedSkills) + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
});

//app.use('/', index);
//app.use('/users', users);
app.use('/assets',express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/assets',express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/assets',express.static(__dirname + '/node_modules/adj-noun/'));
app.use('/assets',express.static(__dirname + '/node_modules/chance/'));
var server = app.listen(process.env.PORT || 3000, function(){
    //var port = controllers.address().port;
    //console.log('App listening on ',);
});