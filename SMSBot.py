from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from twilio import twiml
import config
from flask import Flask, request

# Your Account Sid and Auth Token from twilio.com/console
account_sid = config.account_sid
auth_token = config.auth_token
client = Client(account_sid, auth_token) #rest client

app = Flask(__name__) # start a Flask application 


#userInputMenu = input("What would you like to do today: sendSMS, viewSMS, editContact\n")
userInputMenu="sendSMS"
if(userInputMenu == "sendSMS"):
    userInputPhoneNumber = input ("What phone number would you like to send this message to \n")
    userInputMessage = input("What message would you like to send?\n") 
if(userInputMenu == "viewSMS"):
    print("viewSMS is not avaiable at this time. :(")
    
#send SMS message 
def sendSMSMessage():
    messagesSend = client.messages \
    .create(
    body = userInputMessage,
    from_ = '+15109014776',
    to = userInputPhoneNumber
    )
sendSMSMessage()
#response text message 
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
def contacts(): 
    # ask user if they would like to either like to edit a existing contact or make a new one 
    # if(editContact())
        pass in the dict
        print(dict)
        userEditContactInputPhoneNumber = input("Whos phone number would you like to edit)
        print(dict )
        userEditContactInputName = input("What phone number would you like to add")
    # if(makeNewContact)
        pass in the dict

    #
def addNewContact(): 
    # pass 
    # 
def editContact():
    # 
    #
    # to go back and edit the phone number / Name  of saveContact 
    # or to delete a contact 

def listContacts():
    # list all the keys in the dict 
    # user types in the contacts he would like to 


def messagesSending():
    #call the sendSMS function to send a message to all the messages you would like to send to. 


def viewSMS():
    # have the admin view all conversations made by the bot

"""