const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

//refactored services from controller
module.exports = class ProfileService {
  static async create({ name }) {
    //fetch the data from the API and assign it to const response
    const response = await fetch(
      'https://futuramaapi.herokuapp.com/api/quotes/1'
    );
    //turn that returned data into a json object
    const data = await response.json();
    //extract the quote from the object and assign it to the quote const
    const quote = data[0].quote;
    //pass in the quote, along with the name we got from req.body (destructured above), to the model
    const profile = await Profile.insert({ name, quote });
    return profile;
  }
};
