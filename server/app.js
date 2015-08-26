express = require('express');
employee = require('./employee');
http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Name: " + employee.name + '\n');
    res.write("Skills: " + employee.skills + '\n');
    res.write("Scrum Points: " + employee.scrumPts + '\n');
    res.end();
}).listen(process.env.PORT || 3000);