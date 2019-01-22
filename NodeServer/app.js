const keys = require('./config.js');

const accountSid = keys.account_sid;
const authToken = keys.auth_token;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: keys.account_phoneNumber,
     to: '+19258951162'
   })
  .then(message => console.log(message.sid))
  .done();

