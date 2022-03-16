const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const Profile = require('../models/Profile');
const fetch = require('cross-fetch');
const pool = require('../utils/pool');

//first step - RED
// module.exports = Router().post('/', async (req, res, next) => {
//   // TODO: Implement me!
//   res.send({ id: '1', name: 'Test User', quote: 'super cool quote' });
// });

//Second step, yellow refactor
// module.exports = Router().post('/', async (req, res, next) => {
//   // TODO: Implement me!

//   //SERVICE
//   const response = await fetch(
//     'https://futuramaapi.herokuapp.com/api/quotes/1'
//   );
//   const data = await response.json();
//   const quote = data[0].quote;

//   //MODEL
//   const { rows } = await pool.query(
//     'INSERT INTO profiles(name, quote) VALUES($1, $2) RETURNING *;',
//     [req.body.name, quote]
//   );
//   const profile = new Profile(rows[0]);
//   res.send(profile);
// });

//Final step - green refactor
module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!

  //SERVICE
  // const response = await fetch(
  //   'https://futuramaapi.herokuapp.com/api/quotes/1'
  // );
  // const data = await response.json();
  // const quote = data[0].quote;

  //MODEL
  // const { rows } = await pool.query(
  //   'INSERT INTO profiles(name, quote) VALUES($1, $2) RETURNING *;',
  //   [req.body.name, quote]
  // );
  // const profile = new Profile(rows[0]);
  const profile = await ProfileService.create(req.body);
  res.send(profile);
});
