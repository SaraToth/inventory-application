const pool = require("../pool");

async function getBranches() {
    const results = await pool.query("SELECT name FROM branches ORDER BY name");
    const rows = results.rows;
    const columns = results.fields.map(field => field.name);
    return { rows, columns};
}

module.exports = { getBranches };