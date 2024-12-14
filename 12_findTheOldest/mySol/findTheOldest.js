const findTheOldest = function(peoples) {
    const date = new Date();
    const currentYear = date.getFullYear();
    peoples.forEach((people) => {
        return (people.yearOfDeath === undefined) ? people.yearOfDeath = currentYear: people.yearOfDeath;
    });

    peoples.forEach((people) => {
        return people.age = people.yearOfDeath - people.yearOfBirth;
    });

    peoples.forEach((people) => {
        console.log(people);
    });

    return currentYear;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
    },
]

findTheOldest(people)

// Do not edit below this line
module.exports = findTheOldest;
