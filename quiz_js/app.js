//Create a quiz class
class Quiz {
    /**
     * The constructor function is used to create a new object
     * @param questions - An array of questions.
     */
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    /**
     * The function getQuestionIndex() returns the question at the current index of the questions array
     * @returns The current question object.
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)){    //Gets the questions index and returns yes if it is the correct answer.
            this.score++;
        }
        this.questionIndex++;
    }

    /**
     * If the question index is equal to the length of the questions array, then the quiz is over
     * @returns The question object
     */
    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

//Create a question class
class Question {
    /**
     * The constructor function is a special function that is used to create new objects
     * @param text - The question text
     * @param choices - an array of strings
     * @param answer - The correct answer to the question.
     */
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

   /**
    * The function isCorrectAnswer() takes in a choice and returns true if the choice is equal to the
    * answer
    * @param choice - The choice that the user has selected.
    * @returns The answer to the question.
    */
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

// Display question
function displayQuestion() {
    if(quiz.isEnded()){  //If the quiz ends then check the score.
        showScores(); //function to be created.
    }else {
        let questionElement = document.getElementById("question"); //gets the question.
        /* Getting the question element and setting the innerHTML to the quiz.getQuestionIndex().text. */
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;  //create an array of objects.
        for(let i = 0; i < choices.length;i++){
            /* Getting the choice element and setting the innerHTML to the
            quiz.getQuestionIndex().text. */
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
          /* Getting the choice element and setting the innerHTML to the quiz.getQuestionIndex().text. */
            guess("btn" + i,choices[i]);
        }

       /* Showing the progress of the quiz. */
        showProgress();
    }
};

//Guess function
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

//Show Quiz progress
function showProgress() {
    let currentQuestionNumber  = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    ProgreessElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//Show score
function showScores() {
    let quizEndHTML = `<h1>Quiz completed </h1>
                        <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
                           <div class="quiz-repeat"><a href="index.html">Take Quiz Again</a></div>`;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

//Create quiz Questions
let questions = [
    new Question("When Was The Last Time Manchester United Won The Champions League?",["2008", "2018","2017","2020"],"2008"),
    new Question("When Was The Last Time Manchester United Won a Trophy",["2019", "2017","2007","2009"],"2017"),
    new Question("Whose The Highest Paid player In The Manchester United Team?",["Cristiano Ronaldo", "Rashford","De Gea","Bruno"],"Cristiano Ronaldo"),
    new Question("Whose The Best Midfielder In Manchester United History?",["Bruno", "Paul Ince","Scholes","Anderson"],"Scholes"),
    new Question("When Did Manchester United Resign Cristiano Ronaldo ,For The 2nd Time?",["2019", "2009","2010","2021"],"2021"),
    new Question("Whose the Best Manager In Manchester United History?",["Sir Alex Ferguson", "Mourinho","Solskjær","Carrick"],"Sir Alex Ferguson"),

]//Array stores the Quiz Questions.

/* Creating a new instance of the Quiz class. */
let quiz = new Quiz(questions);

//display question
displayQuestion();

//Add A countdown
/* Setting the time for the quiz. */
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

/* Getting the count-down element and setting it to the counting variable. */
let counting = document.getElementById("count-down");
/* The function is setting the time for the quiz. */
function startCountdown() {
    let quizTimer = setInterval(function(){
        if(quizTime <= 0){
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

startCountdown(); //calls the function.