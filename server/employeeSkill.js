function randomInt(min,max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
var employeeSkill = {
    employeeSkill: function (existingArray) {
        var skills = ['Front End', 'Server Side', 'Client Side'];
        if (typeof existingArray != 'undefined') {
            for (var i = 0; i < existingArray.length; i++) {
                //console.log(existingArray[i],skills[i]);
                skills.forEach(function(skill,index){
                    if (skill == existingArray[i]) {
                        //console.log(skill,existingArray[i],index);
                        skills.splice(index, 1);
                        //console.log('sliced skills',skills);
                    }
                })
            }
        }

        var randomIndex = randomInt(0,skills.length-1);
        //console.log(skills,randomIndex);
        return skills[randomIndex];
    }
};

module.exports = employeeSkill;