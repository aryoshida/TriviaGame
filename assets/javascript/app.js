$("#start").on("click", function(){

    game.start();

    $("#quizBody").append("<br>");

})

$(document).on("click", "#end", function(){
    game.done();
})

const triviaQuestions = [
    {
        question: "In the Lion King, where does Mufasa and his family live??",
        choices: [
            "By the Lazy River", "Mountains Shadow", "Pride Rock"
        ],
        correctAnswer: "Pride Rock"
    },
    {
        question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
        choices: [
            "Left", "Neither", "Right"
        ],
        correctAnswer: "Left"
    },
    {
        question: "In what full length animated feature would you find a villain named Sykes? ",
        choices: [
            "Bug's Life", "Oliver and Company", "Toy Story"
        ],
        correctAnswer: "Oliver and Company"
    },
    {
        question: "What was the name of the dragon (god wanna be) in Mulan?",
        choices: [
            "Kahn", "Mushu", "Po"
        ],
        correctAnswer: "Mushu"
    }
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter==0){
            alert("Time is up!!!");
            game.done();
        }
    },
    start: function(){

        timer = setInterval(game.countdown,1000);

        $("#quizBody").prepend("<h2><b>Time Remaining: <span id='counter'>30</span> Seconds</b></h2><hr>");
        
        $("#start").remove();

        for(var i = 0; i < triviaQuestions.length; i++){
    
            $("#quizBody").append("<h2>" + triviaQuestions[i].question + "<h2>");
            for(var j = 0; j < triviaQuestions[i].choices.length; j++){
                $("#quizBody").append("<input type='radio' name='question-"+i+"' value='"+triviaQuestions[i].choices[j]+"'>"+triviaQuestions[i].choices[j]);
            }

        } 
        
        $("#quizBody").append("<br><button id='end'>Submit</button>");
    },
    done: function(){
        clearTimeout(timer);
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() == triviaQuestions[0].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val() == triviaQuestions[1].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val() == triviaQuestions[2].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() == triviaQuestions[3].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
        });             

        this.results();

    },

    results: function(){
        clearInterval(timer);
        $("#quizBody h2").remove();

        $("#quizBody").html("<h2>Done!</h2>");
        $("#quizBody").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#quizBody").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#quizBody").append("<h3>Unanswered: " + (triviaQuestions.length-(this.incorrect + this.correct)) + "</h3>");

    }
}





