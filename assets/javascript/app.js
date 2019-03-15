// // GET THE HTML TAG THAT WE WANT TO CHANGE
// var quizBodyHTML = document.getElementById("quizBody");

// // DEFINE THE HTML THAT WE WANT TO SWITCH TO
// var questionHTMLText = '<div class="quizBody"></div>'
// var multipleChoiceHTMLText = '<form action="">' +
//     '<input type="radio" value="choice1"> <span id="choice1Text"></span><br>' +
//     '<input type="radio" value="choice2"> <span id="choice2Text"></span><br>' +
//     '<input type="radio" value="choice3"> <span id="choice3Text"></span>' +
//     '</form>';

// // SWAP THE HTML FOR THE HTML THAT WE WANT
// quizBodyHTML.innerHTML = questionHTMLText;

// // CREATE AN OBJECT TO REPRESENT A QUESTION
// var questionObject = {
//     questionText: "What is 2+2?",
//     correctIndex: 1,
//     choices: [ '1', '4', '5' ]
// }

// function loadQuestion(questObj) {
//     // get question header html tag
//     // set question headar html tag text = questObj.questionText
//     // get choice text html tags
//     // set choice text html tag text = questObj.choices[index]
// }

// const triviaQuestions = [
//     {
//         question: "What color is the sky durring the day?",
//         choices: {
//             a: "Yellow",
//             b: "Purple",
//             c: "Blue"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "How many genders are there?",
//         choices: {
//             a: "2",
//             b: "63",
//             c: "5"
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "What animal makes the 'moo' sound?",
//         choices: {
//             a: "cat",
//             b: "cow",
//             c: "snail"
//         },
//         correctAnswer: "b"
//     }
// ];

// var questionContainer = document.getElementById("quiz");
// var choicesContainer = document.getElementById("choices");
// var resultsContainer = document.getElementById("results");
// var submitButton = document.getElementById("submit");



// function displayQuestions(triviaQuestions){

//     var output = [];
//     var choices;
    
//     for(var i = 0; i < question.length; i++){

//         choices = [];

//         for(letter in triviaQuestions[i].choices){

//             choices.push(
//                 '<label>'
//                     + '<input type="radio" name="question '+i+' "value=" '+letter+' ">'
//                     + letter + ': '
//                     + triviaQuestions[i].choices[letter]
//                 + '</label>'
//             );
//         }

//         output.push(
//             '<div class="question">' + triviaQuestions[i].question + '</div>'
//             + '<div class="answers">' + choices.join('') + '</div>'
//         );

//     }

//     quizHolder.innerHTML = output.join('');

// }

// displayQuestions(questionContainer);


// function showResults(triviaQuestions, quizHolder, resultsHolder){

//     var answerHolder = quizHolder.querySelectorAll(".correctAnswer");
//     var userChoice = '';
//     var correct = 0;
//     var incorrect = 0;

//     for(var i = 0; i , question.length; i ++){
//         userChoice = (answerHolder[i].querySelector("input[name=question")||{}).value;

//         if(userChoice === triviaQuestions[i].correctAnswer){
//             correct++;
//             answerHolder[i].style.color = "lightgreen";
//         } else{
//             answerHolder[i].style.color = "red";
//             incorrect++;
//         }
//     }

//     resultsHolder.innerHTML = correct + ' out of ' + question.length;
// }

// submitButton.onclick = function(){
//     showResults(triviaQuestions, quizHolder, resultsHolder);
// }

    
// displayQuestions(triviaQuestions, quizHolder);

// createQuiz(triviaQuestions, quizHolder, resultsHolder, submitButton);


const triviaQuestions = [
    {
        question: "In the Lion King, where does Mufasa and his family live??",
        choices: [
            "By the Lazy River", "Mountains Shadow", "Pride Rock"
        ],
        correctAnswer: "c"
    },
    {
        question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
        choices: [
            "Left", "Neither", "Right"
        ],
        correctAnswer: "a"
    },
    {
        question: "In what full length animated feature would you find a villain named Sykes? ",
        choices: [
            "Bug's Life", "Oliver and Company", "Toy Story"
        ],
        correctAnswer: "b"
    },
    {
        question: "What was the name of the dragon (god wanna be) in Mulan?",
        choices: [
            "Kahn", "Mushu", "Po"
        ],
        correctAnswer: "b"
    }
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            alert("Time is up!!!");
            game.done();
        }
    },
    start: function(){

        timer = setInterval(game.countdown,1000);

        $("#quizBody").prepend("<h2><b>Time Remaining: <span id='counter'>60</span> Seconds</b></h2>");
        
        $("#start").remove();

        for(var i = 0; i < triviaQuestions.length; i++){
    
            $("#quizBody").append("<h2>" + triviaQuestions[i].question + "<h2>");
            for(var j = 0; j < triviaQuestions[i].choices.length; j++){
                $("#quizBody").append("<input type='radio' name='question-"+i+"' value='"+triviaQuestions[i].choices[j]+"'>"+triviaQuestions[i].choices[j]);
            }

        }        
    },
    done: function(){
        $.each($("input[name='question-1]':checked"))
    }
}



$("#start").on("click", function(){

    game.start();

    $("#quizBody").append("<br>");

    $("#quizBody").append("<button id='submit'>Submit</button>");

});



// $('#Submit').on('click', ...);




