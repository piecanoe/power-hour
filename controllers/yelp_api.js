require('dotenv').config();
const axios = require('axios')


module.exports = {
    searchBusiness: async function(term, location) {
      try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`
          },
          params: {
            term, location
          }
        });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
  
    searchByPhone: async function(phone) {
      try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search/phone', {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`
          },
          params: {
            phone
          }
        });
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  };
  
  (async () => {
    const businesses = await module.exports.searchBusiness('food', 'Newyork');
    console.log(businesses);
  })();