const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        return calcAge(personB) - calcAge(personA);
    });

    return people.at(0);
}

function calcAge(person) {
    // Nullish coalescing assignment operator if yearOfDeath is empty
    person.yearOfDeath ??= new Date().getFullYear();

    return person.yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;