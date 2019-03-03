const keys = require('./config/config.js');
const accountSid = keys.account_sid;
const authToken = keys.auth_token;
const client = require('twilio')(accountSid,authToken);


let sendMessage = (message,phoneNumber)=>{
  client.messages
  .create({
     body: message,
     from: 5109014776,
     to: phoneNumber
   })
  .then(message => console.log(message.sid))
  .done();
}
module.exports  =sendMessage ;