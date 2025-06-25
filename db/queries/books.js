const pool = require("../pool");

async function getBooks() {
    const results = await pool.query("SELECT title, author FROM books");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return {columns, rows};
};
async function getBooksWithGenre() {
    const { rows } = await pool.query(
        "SELECT books.id, title, author, genres.genre FROM books INNER JOIN genres ON books.genre_id = genres.id"
    );
    return rows;
}

//book is an object of all book info
async function insertBook(book) {
    // Look up the genre Id
    const genreResult = await pool.query("SELECT id FROM genre WHERE genre=$1", [book.genre]);
    const genreId = genreResult.rows[0]?.id;

    if (!genreId) {
        throw new Error(`Genre ${book.genre} does not exist`);
    }

    // Add the book to db
    await pool.query("INSERT INTO books (title, author, genre_id) VALUES ($1, $2, $3)", [book.title, book.author, genreId]);
}

module.exports = { getBooks, insertBook, getBooksWithGenre};
