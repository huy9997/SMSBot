# SMS Bot Mobile App

## How to run:

### Prerequisites:

- Node
- Expo Cli
- ios or android simulator or expo app installed on mobile device

### Command Line Instructions:

- After cloning repository type the command "cd SMSBot/MobileApp/" to get into the mobile app folder
- Type the command "npm install" in terminal to install the dependencies
- Type the command "expo start" in terminal to start running the mobile app
- Type "i" for ios simulator or "a" for android simulator in terminal or open Expo app on mobile device and scan QR code on Expo CLI

## Mock ups:

![Mock Ups](./screenshots/mockup.png)

### [Demo - Try it on Expo](https://expo.io/@niszeto/SMSBotApp)

## Screenshots:

<div style={{display: flex; flex-direction: row}}>
  <img src="./screenshots/start.png" width="270" />
  <img src="./screenshots/login.png" width="270" />
  <img src="./screenshots/signup.png" width="270" />
  <img src="./screenshots/events.png" width="270" />
  <img src="./screenshots/createevent.png" width="270" />
  <img src="./screenshots/createeventexample.png" width="270" />
  <img src="./screenshots/eventdetails.png" width="270" />
  <img src="./screenshots/messages.png" width="270" />
  <img src="./screenshots/messagesexample.png" width="270" />
</div>

# SMS Bot Server (Work in progress)

-make sure flask is installed
-make sure your using python3
-install ngrok
-be a collaborator on twilio s

to run the program :

run python3 SMSBot.py
run ngrok
copy the http ngrok link to twilio
open the phone number in twilio and paste the ngrok link into the
manage phone numbers

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
