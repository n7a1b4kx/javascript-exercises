const findTheOldest = function(peoples) {
    const date = new Date();
    const currentYear = date.getFullYear();
    peoples.map((people) => {
        return (people.yearOfDeath === undefined) ? people.yearOfDeath = currentYear: people.yearOfDeath;
    });

    peoples.map((people) => {
        return people.age = people.yearOfDeath - people.yearOfBirth;
    });

    return peoples;
}

// Do not edit below this line
module.exports = findTheOldest;
