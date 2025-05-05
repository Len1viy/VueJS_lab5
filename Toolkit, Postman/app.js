const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${env}` });

console.log('API URL:', process.env.API_URL);
console.log('Debug Mode:', process.env.DEBUG); 
