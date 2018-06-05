'use strict';

var Alexa = require('alexa-sdk');

var flashcardsDictionary = [
    {
      question: 'how do you find the length of a string?',
      rubyAnswer: 'length',
      pythonAnswer: 'Len',
      javascriptAnswer: 'length'
    },
    {
      question: 'how do you print to the console or terminal?',
      rubyAnswer: 'puts',
      pythonAnswer: 'print',
      javascriptAnswer:'console.log'
    },
    {
       question:'are boolean terms capitalized or not capitalized?',
       rubyAnswer: 'not capitalized',
       pythonAnswer: 'capitalized',
       javascriptAnswer: 'not capitalized'
     }];

var DECK_LENGTH = flashcardsDictionary.length;

var handlers = {
  // Open Codecademy Flashcards
  'LaunchRequest': function() {
    this.attributes['language'] = '';
    this.attributes['numberCorrect'] = 0;
    this.attributes['currentFlashcardIndex'] = 0;

    this.response
        .listen('Welcome to Flashcards. In this session, do you want to test' +
        ' your knowledge in Ruby, Python, or Javascript?').speak(
        'Which language would you like to practice?');
    this.emit(':responseReady');
  },

  'SetMyLanguageIntent': function() {
    this.attributes['language'] = this.event.request.intent.slots.languages.value;
    var language = this.attributes['language'];

    this.response
        .speak('Okay, I will ask you some questions about ' +
        language + '. Here is your first question.' + 
                this.AskQuestion).listen(this.AskQuestion);
    this.emit(':responseReady');
  },

  // User gives an answer
  'AnswerIntent': function() {
    var userAnswer = this.event.request.intent.slots.answer.value;
    var language = this.attributes['language'];
    var languageAnswer = language + 'Answer';
    var correctAnswer = flashcardsDictionary[this.attributes['currentFlashcardIndex']][languageAnswer];


    if (userAnswer === correctAnswer) {
      this.attributes['numberCorrect']++;
      var numberCorrect = this.attributes['numberCorrect'];

      this.response
          .speak('Nice job! The correct answer is ' + correctAnswer + '. You ' +
            'have gotten ' + numberCorrect + ' out of ' + DECK_LENGTH + ' ' +
            language + ' questions correct.' + this.AskQuestion)
          .listen(this.AskQuestion);


    } else {
      var numberCorrect = this.attributes['numberCorrect'];

      this.response
          .speak('Sorry, the correct answer is ' + correctAnswer + '. You ' +
          'have gotten ' + numberCorrect + ' out of ' + DECK_LENGTH + ' ' +
          language + ' questions correct. Here is your next question.' + 
                 this.AskQuestion).listen(this.AskQuestion);
    }

    this.attributes['currentFlashcardIndex']++;

    this.emit(':responseReady');
  },
  
    // Test my {language} knowledge
  'AskQuestion': function() {
    var language = this.attributes['language'];
    var currentQuestion = flashcardsDictionary[this.attributes['currentFlashcardIndex']].question;

    return 'In ' + language +', ' + currentQuestion;
  },

  // Stop
  'AMAZON.StopIntent': function() {
      this.response.speak('Ok, let\'s play again soon.');
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak('Ok, let\'s play again soon.');
      this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
