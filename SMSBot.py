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
    user_input_menu = input("What would you like to do today: sendSMS, viewSMS, editContact")
    if user_input_menu == "sendSMS":
        recipient_number = input ("What phone number would you like to send this message to")
        outgoing_message = input("What message would you like to send?")
        list_contacts()
        messages_sending()
    if user_input_menu == "viewSMS":
        print("viewSMS is not available at this time. :(")
        view_sms()
    
        # user input in the text message


def save_contact():
    contacts = dict()

    # save the contacts in dictionary Key= name Value = phone number


def edit_contact():
    print("This function is used to edit contacts")
    # to go back and edit the phone number / Name  of saveContact 
    # or to delete a contact 


def list_contacts():
    print("This function will list all user contacts for them "
          "to choose from")
    # list all the keys in the dict 
    # user types in the contacts he would like to 


def messages_sending():
    print("This message calls the sendSMS function for each recipient in list")
    # call the sendSMS function to send a message to all the messages you would like to send to.


def view_sms():
    print("This message allows the administrator to view all conversations made by the bot")
    # have the admin view all conversations made by the bot


# send SMS message
def send_sms(outgoing_message, recipient):
    messages_send = client.messages \
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
