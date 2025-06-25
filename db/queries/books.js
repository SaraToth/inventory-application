const pool = require("../pool");

async function getBooks() {
    const results = await pool.query("SELECT title, author FROM books");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return {columns, rows};
};

async function getBranches() {
    const results = await pool.query("SELECT name FROM branches ORDER BY name");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return { rows, columns};
}

async function getGenres() {
    const results = await pool.query("SELECT genre FROM genres ORDER BY genre");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return { rows, columns};
}


module.exports = { getBooks, getBranches, getGenres };
