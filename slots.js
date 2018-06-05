"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to Codecademy. What do you think is Codecademy's most popular language?").listen("Tell me what you think is Codecademy's most popular language.");
    this.emit(':responseReady');
  },

  'LanguageIntent': function () {
    var myLanguage = this.event.request.intent.slots.language.value;
    if (myLanguage == "python") {
        this.response.speak("Correct! Python is the most popular language.");
    }
    else {
        this.response.speak("You guessed that " + myLanguage + " is the most popular. Actually, Python is our most popular language");
    }
    this.emit(':responseReady');
  }
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
