var employeeScrumPts =  {
    employeeScrumPts: function (min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
};

module.exports = employeeScrumPts;