# SMSPythonBot
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
  