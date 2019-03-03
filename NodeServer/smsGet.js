const keys = require('/Users/user/Desktop/SMSBot/NodeServer/config/config.js');

console.log(keys);
const accountSid = keys.account_sid;
const authToken = keys.auth_token;
const client = require('twilio')(accountSid, authToken);

/*
client.chat.services(keys.sid)
           .channels
           .create({friendlyName: 'SMSChannel'})
           .then(channel => console.log(channel.sid));
*/
client.chat.services(keys.sid)
           .channels(keys.channelID)
           .messages
           .each(messages => console.log(messages.sid));


console.log();

client.chat.services(keys.account_sid)
           .channels(keys.channelID)
           .messages()
           .fetch()
           .then(message => console.log(message.body));


module.exports = {};