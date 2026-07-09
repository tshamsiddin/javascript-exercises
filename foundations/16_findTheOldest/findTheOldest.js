const findTheOldest = function(arr) {
    const currentYear=new Date().getFullYear();
    const ordered=arr.sort((a, b) => {
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return ageB-ageA;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
