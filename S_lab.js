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

const SKILL_NAME = 'Spade Labs';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can ask spade labs for any details about the maker space';
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
        this.emit('IntroductionToMakerSpace');
    },
    'GetNewFactIntent': function ()
    {
   
        this.response.speak(data);
        this.emit(':responseReady');
    },
    'IntroductionToMakerSpace': function ()
    {
   
        this.response.speak("Welcome to Maker's Space. The centre hall is Genral Development Lab. Testing and soldering room is used for soldering equipments and debugging them. Advance computing and robotics lab has dedicated laptops and drones. You can Ask details of each room to know more details");
        this.emit(':responseReady');
        this.response.speak("The centre hall is Genral Development Lab");
        this.response.speak("Testing and soldering room is used for soldering equipments and debugging them");
        this.response.speak("Advance computing and robotics lab has dedicated laptops and drones");
        this.response.speak("You can Ask details of each room to know more details");
        
    },
    'GenralDevelopmentLab': function ()
    {
   
        this.response.speak("The General lab. The centre hall is Genral Development Lab. Its equipped with Systems and Raspberry pi. All the systems are connected with each other. Even the printers are connected directly with raspberry pi. once can mirror their system screen to others using V N C");
        this.emit(':responseReady');
    },
        'TestingAndSolderingLab': function ()
    {
   
        this.response.speak("The testing and Soldering Lab. Its euipped with genuine soldering Rods. All materials required for the soldering and desoldering are available on the table. Its equipped with dedicated table and tools for debugging robots. You can also test line follower and table top robot in the same room");
        this.emit(':responseReady');
        this.response.speak("All materials required for the soldering and desoldering are available on the table");
        this.response.speak("Its equipped with dedicated table and tools for debugging robots");
        this.response.speak("You can also test line follower and table top robot in the same room");
        
    },
        'AdvanceRoboticsAndComputingLab': function ()
    {
   
        this.response.speak("The advance robotics and soldering lab. Its euipped with high configuration laptops. The systems has all the development tool preinstalled and configured. Drone Making. Features the hardware components required to make the drones ");
        this.emit(':responseReady');
        this.response.speak("Its euipped with high configuration laptops");
        this.response.speak("The systems has all the development tool preinstalled and configured");
        this.response.speak("Drone Making ");
        this.response.speak("Features the hardware components required to make the drones");
        this.emit(':responseReady');
    },
        'Kitchen': function ()
    {
   
        this.response.speak("The kitchen is on the other end of the hall. You can have snack and beverages. cofee machine is available for use.");
        this.emit(':responseReady');
        this.response.speak("You can have snack and beverages ");
        this.response.speak("cofee machine is available for use");
        
        
    },
      'Washroom': function ()
    {
   
        this.response.speak("There are two washrooms available. one is on the left of the kitchen. Second is in the soldering and testing lab")
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
