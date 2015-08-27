var Chance = require('chance');
var chance = new Chance();

var employeeName = {
    employeeName: function (){
        return chance.name();
    }
};

module.exports = employeeName;