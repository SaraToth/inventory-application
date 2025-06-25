const pool = require("../pool");

async function getGenres() {
    const results = await pool.query("SELECT genre FROM genres ORDER BY genre");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return { rows, columns};
}

module.exports = { getGenres };