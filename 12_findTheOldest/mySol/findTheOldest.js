const findTheOldest = function(peoples) {
    const date = new Date();
    const currentYear = date.getFullYear();
    peoples.map((people) => {
        return (people.yearOfDeath === undefined) ? people.yearOfDeath = currentYear: people.yearOfDeath;
    });

    peoples.map((people) => {
        return people.age = people.yearOfDeath - people.yearOfBirth;
    });

    let eldest = peoples.reduce((oldest, currentValue) => {
        if (oldest.age < currentValue.age) {
            return currentValue;
        } else {
            return oldest;
        }
    });

    return eldest;
}

// Do not edit below this line
module.exports = findTheOldest;
