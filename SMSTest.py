from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client
import config

account_sid = config.api_key
auth_token = config.access_token
client = Client(account_sid, auth_token)


app = Flask(__name__)


@app.route("/sms", methods=['GET', 'POST'])
def incoming_sms():
    """Send a dynamic reply to an incoming text message"""
    # Get the message the user sent our Twilio number
    body = request.values.get('Body', None)
    print(body, "this is the body" )
    # Start our TwiML response
    resp = MessagingResponse()

    # Determine the right reply for this message
    if body == 'hello':
        resp.message("Hi!")
    elif body == 'bye':
        resp.message("Goodbye")

    return str(resp)


if __name__ == "__main__":
    app.run(debug=True)