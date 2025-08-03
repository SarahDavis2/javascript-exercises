const findTheOldest = function(people) {
    people.sort((itemObjA, itemObjB) => {
        return calcAge(itemObjB) - calcAge(itemObjA);
    });

    return people.at(0);
}

function calcAge(obj) {
    let age = 0;
    if ("yearOfDeath" in obj) {
        age = obj.yearOfDeath - obj.yearOfBirth;
    } else {
        const curYr = new Date().getFullYear();
        age = curYr - obj.yearOfBirth;
    }
    return age;
}
// Do not edit below this line
module.exports = findTheOldest;