/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk'); 

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.32a278f9-8a64-4d57-8e7b-ef2774b1a8ac';

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data =  'tanvi is bakchodniiii'

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () 
    {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function ()
    {
   
        this.response.speak(data);
        this.emit(':responseReady');
    },
    'introduction': function ()
    {
   
        this.response.speak("Welcome to Maker's Space");
        this.response.speak("The centre hall is Genral Development Lab");
        this.response.speak("Testing and soldering room is used for soldering equipments and debugging them");
        this.response.speak("Advance computing and robotics lab has dedicated laptops and drones");
        this.response.speak("You can Ask details of each room to know more details");
        this.emit(':responseReady');
    },
    
    'EquipmentsLocation': function () 
    {
   var slot = this.event.request.intent.slots.equipment.value;
    if((slot=='soldering rod')||(slot=='wire cutter')||(slot=='double side tape')||(slot=='insulation tape'))
       { 
        this.response.speak("the "+slot+" is in drawer D1");
        this.emit(':responseReady');
       }
       if((slot=='ir sensors')||(slot=='motion sensor')||(slot=='arduino'))
       { 
        this.response.speak("the "+slot+" is in drawer D2");
        this.emit(':responseReady');
       }
    },
    'AMAZON.HelpIntent': function ()
    {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () 
    {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () 
    {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
