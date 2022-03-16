const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

//first step - RED
//hard code a "row" with key/values to get the controller passing TDD
// module.exports = Router().post('/', async (req, res, next) => {
//   res.send({ id: '1', name: 'Test User', quote: 'super cool quote' });
// });

//Second step, yellow refactor
//mock the api hit handled by the Services here
//also, create the model with constructor but mock the sql query here as well
// module.exports = Router().post('/', async (req, res, next) => {

//   //SERVICES
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
//the API hit should now happen in the services folder
//the SQL query will now happen in the model
module.exports = Router().post('/', async (req, res) => {
  //SERVICE - below code is refactored from above, into ProfileService
  // const response = await fetch(
  //   'https://futuramaapi.herokuapp.com/api/quotes/1'
  // );
  // const data = await response.json();
  // const quote = data[0].quote;

  //MODEL - below code is refactored from above, into Profile as the "insert" function
  // const { rows } = await pool.query(
  //   'INSERT INTO profiles(name, quote) VALUES($1, $2) RETURNING *;',
  //   [req.body.name, quote]
  // );
  // const profile = new Profile(rows[0]);

  //this is where I send the req.body to the services to hit the API
  //services will send the API info to the model to create the Profile,
  //the model will send back the response through Services
  //then we send the profile back to the front end through the controllers
  const profile = await ProfileService.create(req.body);
  res.send(profile);
});
