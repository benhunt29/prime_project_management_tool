var employeeSkill = {
    employeeSkill: function (){
        var skills = ['Front End','Server Side','Client Side'];
        function randomInt(min,max){
            return Math.floor(Math.random() * (1 + max - min) + min);
        };
        var randomIndex = randomInt(0,2);
        console.log(randomIndex);
        return skills[randomIndex];
    }
};

module.exports = employeeSkill;