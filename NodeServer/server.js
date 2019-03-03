const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const yargs = require('yargs');
const sendSMS = require('./sendSMS.js');

const axios =require('axios');
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

  if(req.body.Body == 'yes'){
    twiml.message('hello');
    //sendSMS.sendMessage('hello world',9258951162);
  }else if(req.body.Body == 'no'){
    twiml.message('you didnt say hi');
   // sendSMS.sendMessage('hello',9258951162);
  }else{
    //notify admin
  }
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.post('/createEvent',(req,res)=>{
  //console.log(req);
  let bodyData = JSON.parse(Object.keys(req.body)[0]);
  console.log(bodyData. message);
  //event name, message, phone numbers 
  sendSMS(bodyData.message,9258951162);
  res.send(bodyData);
});
/*
axios.get('/createEvent')
.then(function(response){
  console.log(response);
})
*/

http.createServer(app).listen(3000, () => {
  console.log('Express server listening on port 3000');
});