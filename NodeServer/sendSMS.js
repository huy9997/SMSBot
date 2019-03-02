const keys = require('/Users/user/Desktop/SMSBot/NodeServer/config/config.js');
const accountSid = keys.account_sid;
const authToken = keys.auth_token;
const client = require('twilio')(accountSid,authToken);


let sendMessage = (message,phoneNumber)=>{
  client.messages
  .create({
     body: message,
     from: keys.account_phoneNumber,
     to: phoneNumber
   })
  .then(message => console.log(message.sid))
  .done();
}
module.export  ={sendMessage} ;