express = require('express');
employee = require('./employee');

var app = express();

app.get('/', function(req,res,next){
    res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
});

app.post('/',function(req,res,next){
    var assignedSkills = req.params;
    //STOPPED HERE
    res.send("Name: " + employee.name + '\n');
    res.send("Skills: " + employee.skills + '\n');
    res.send("Scrum Points: " + employee.scrumPts + '\n');
})

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Name: " + employee.name + '\n');
    res.write("Skills: " + employee.skills + '\n');
    res.write("Scrum Points: " + employee.scrumPts + '\n');
    res.end();
}).listen(process.env.PORT || 3000);