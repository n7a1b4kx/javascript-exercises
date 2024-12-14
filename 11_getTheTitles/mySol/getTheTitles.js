const getTheTitles = function(books) {
    let title = [];
    let size = books.length;
    for (let i = 0; i < size; i++) {
        let book = books[i]['title'];
        title.push(book);
    }
    return title;
}

// Do not edit below this line
module.exports = getTheTitles;
