const Dotenv = require('dotenv-webpack');

module.exports = {
  
  plugins: [
    new Dotenv({
    path: './.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
     
      
    })
  ]
  
};