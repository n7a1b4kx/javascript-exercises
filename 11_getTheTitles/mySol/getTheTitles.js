const getTheTitles = function(books) {
    let title = [];
    let size = books.length;
    for (let i = 0; i < size; i++) {
        let book = books[i]['title'];
        title.push(book);
    }
    return title;
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(getTheTitles(books));

// Do not edit below this line
//module.exports = getTheTitles;
