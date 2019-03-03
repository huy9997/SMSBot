const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const yargs = require('yargs');
const sendSMS = require('./sendSMS.js');

const keys =require('./config/config.js');
const app = express();
const accountSid = keys.account_sid;
const authToken = keys.auth_token;

app.use(bodyParser.urlencoded({ extended: false }));
yargs.options({
  a: {
    demand: true,
    alias: 'body',
    describe: 'Enter a message to send ',
    string: true
  }
});

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  if(req.body.Body == 'yes'){
    twiml.message('See you there! ');
  }else if(req.body.Body == 'no'){
    twiml.message('too bad :(');
  }else{
    //notify admin
  }
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.post('/createEvent',(req,res)=>{

  let bodyData = JSON.parse(Object.keys(req.body)[0]);
  console.log(bodyData. message);
  sendSMS(bodyData.message,9258951162);
  res.send(req.body);
});

app.get('/createEventData' ,(req,res)=>{
  events = [{'id': 1,'name': 'Bonfire'},{'id':2,'name':'birthday'}];
  //{'id':id++,'name':global}

  res.send(JSON.stringify(events));
});

app.get('/twilio' ,(req,res)=>{
  events = [{'id': 1,'name': 'Huy', 'recentMessage':'Yes I can come','status':'yes'},{'id': 2,'name': 'Huy', 'recentMessage':'Yes I can come','status':'yes'}];
  res.send(JSON.stringify(events));
});

app.get('/messageList',(req,res)=>{
  events = [{'id': 1,'name': 'Huy', 'body':'Yes I can come'},{'id': 2,'name': 'Huy', 'body':'Yes I can come'}];
  res.send(JSON.stringify(events))
});

app.get('/getSMS',(req,res)=>{
  const client = require('twilio')(accountSid, authToken);
  client.chat.services(keys.sid)
           .channels(keys.channelID)
           .messages
           .each(messages => console.log(messages.body));
 // res.send(data);
 console.log(res);
 res.status(200);
});



http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});