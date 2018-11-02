import os
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from twilio import twiml
import config
from flask import Flask, request

app = Flask(__name__)

# Your Account Sid and Auth Token from twilio.com/console
account_sid = config.account_sid
auth_token = config.auth_token

#rest client
client = Client(account_sid, auth_token)

app = Flask(__name__)

#userPrompt = input("What would you like to do today? Send, CheckMessages")
  
  #if userPrompt=="send" or userPrompt=="Send" :
    #userInputPhoneNumber = input("What phone number would you like to contact")
userInputMessage = input("What message would you like to send?") 
    #send message
messagesSend = client.messages \
    .create(
    body = userInputMessage,
    from_ = '+15109014776',
    to = '+19258951162'
    )
#respond

@app.route("/sms", methods=['GET', 'POST'])
def incoming_sms():
    """Send a dynamic reply to an incoming text message"""
    # Get the message the user sent our Twilio number
    body = request.values.get('Body', None)
    print(body, "this is the body" )
    # Start our TwiML response
    resp = MessagingResponse()
    
    # Determine the right reply for this message
    if body == 'Alvin':
        resp.message("alvin sucks!")
    elif body == 'Huy':
        resp.message("huy is way better than alvin ")
    else:
        resp.message("none of the above")

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)

  #To Do List: 
  # work on getting the 
  #
  
"""
Flow of application 

  ADMIN
  pick who to contact
  write what message to send them 

  USER
  recieve message
  respond to ADMIN
  parse through the response for a yes no yeah.
    yes or no  
      if yes 
        thank you 
      if no 
        ask why 
    maybe or unsure 
      forward message to huys phone 
  HUY 
    recieve unsure message from ADMIN
    respond to message send to ADMIN. Then ADMIN send to USER
  
"""