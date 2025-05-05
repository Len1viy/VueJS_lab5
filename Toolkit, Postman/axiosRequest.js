const axios = require('axios');

axios.get('https://vk.com')
    .then(response => {
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    }); 
