"use strict";

// Include the Alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
var handlers = {
  "HelloIntent": function () {
		//Create speech output. This is what Alexa will speak back when the user says "Ask code academy to say hello"
      this.response.speak("Hello, Codecademy");
      this.emit(":responseReady");
   },
  //Our skill will receive a LaunchRequest when the user invokes the skill with the invocation name, but does not provide any command mapping to an intent. For example, "Open code academy"
  "LaunchRequest": function () {
    this.response.speak("Welcome to Codecademy"); 
    this.emit(":responseReady");
   }

};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
var alexa=Alexa.handler(event, context);
alexa.registerHandlers(handlers);
  alexa.execute();
  // Set up the Alexa object

  
  // Register Handlers
  

  // Start our Alexa code
  
};
