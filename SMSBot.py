import os
from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from twilio import twiml
import config
from flask import Flask, request

# Your Account Sid and Auth Token from twilio.com/console
account_sid = config.api_key
auth_token = config.access_token
client = Client(account_sid, auth_token)    # rest client
app = Flask(__name__)   # start a Flask application


def menu():
    userInputMenu = input("What would you like to do today: sendSMS, viewSMS, editContact")
    if userInputMenu == "sendSMS":
        userInputPhoneNumber = input ("What phone number would you like to send this message to")
        userInputMessage = input("What message would you like to send?") 
        listContacts()
        messagesSending()
    if userInputMenu == "viewSMS":
        print("viewSMS is not avaiable at this time. :(")
        viewSMS()
    
        # user input in the textmessage


def saveContact():
    contacts = dict()

    # save the contacts in dictionary Key= name Value = phone number

def editContact():
    print("This function is used to edit contacts")
    # to go back and edit the phone number / Name  of saveContact 
    # or to delete a contact 


def listContacts():
    print("This function will list all user contacts for them "
          "to choose from")
    # list all the keys in the dict 
    # user types in the contacts he would like to 


def messagesSending():
    print("This message calls the sendSMS function for each recipient in list")
    # call the sendSMS function to send a message to all the messages you would like to send to.


def viewSMS():
    print("This message allows the administrator to view all conversations made by the bot")
    # have the admin view all conversations made by the bot


# send SMS message
def sendSMS(outgoing_message, recipient):
    messagesSend = client.messages \
        .create(body=outgoing_message, from_='+15109014776', to=recipient)


# response text message
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
    elif body == 'Hashim':
        resp.message("Hashim has a big dick")
    else:
        resp.message("none of the above")

    return str(resp)


if __name__ == "__main__":
    app.run(debug=True)

    # To Do List:
    # work on getting the
    #
