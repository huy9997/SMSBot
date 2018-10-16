from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from flask import Flask, request
from twilio import twiml
import config

# Your Account Sid and Auth Token from twilio.com/console
account_sid = config.account_sid
auth_token = config.auth_token
client = Client(account_sid, auth_token)

# gather user input: 
# phone numbers and message

suserInputPhoneNumber = input("What phone number would you like to contact")
userInputMessage = input("What message would you like to send?")

  
messagesSend = client.messages \
  .create(
  body = userInputMessage,
  from_ = '+15109014776',
  to = '+19258951162'
  )

@app.route('/sms', methods=['POST'])
def sms():
    number = request.form['From']
    message_body = request.form['Body']

    resp = twiml.Response()
    resp.message('Hello {}, you said: {}'.format(number, message_body))
    return str(resp)

if __name__ == '__main__':
    app.run()


  #To Do List: 
  #- get Flask properly installed 
  #- flask to make a web app 