const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const yargs = require('yargs');
const sendSMS = require('./sendSMS.js');

const app = express();

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

  if(req.body.Body == 'hi'){
    twiml.message('hello');
    //sendSMS.sendMessage('hello world',9258951162);
  }else{
    twiml.message('you didnt say hi');
   // sendSMS.sendMessage('hello',9258951162);
  }
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.post('/createEvent',(req,res)=>{
  //event name, message, phone numbers 
  let eventName; 
  let eventDetails; 
  let phoneNumbers;
  
});


http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});