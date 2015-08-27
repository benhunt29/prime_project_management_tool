function randomInt(min,max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var employeeSkill = {
    employeeSkill: function (existingArray) {
		var skills = ['Front End', 'Server Side', 'Client Side'];
		// if sent an array (if posted)
		if(typeof existingArray != 'undefined') {
			for(var i = 0; i < existingArray.length; i++) {// loop through array of placed skills
				var index = skills.indexOf(existingArray[i]);// index of used skill in the master skill array
				if(index != -1) {// if used
					skills.splice(index, 1);// remove from master array
				}
			}
		}
		var randomIndex = randomInt(0, skills.length - 1);
		return skills[randomIndex];
    }
};

module.exports = employeeSkill;