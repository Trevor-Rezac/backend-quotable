const pool = require('../utils/pool');

module.exports = class Profile {
  id;
  name;
  quote;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.quote = row.quote;
  }

  //refactored SQL query from controller
  static async insert({ name, quote }) {
    //make a SQL query where were insert a row with the provided name and quote
    const { rows } = await pool.query(
      'INSERT INTO profiles(name, quote) VALUES($1, $2) RETURNING *;',
      [name, quote]
    );
    //create a new instance of our Profile
    const profile = new Profile(rows[0]);
    return profile;
  }
};
