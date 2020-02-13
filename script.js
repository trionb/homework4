//Assign Code
let startBtn = document.getElementById("start");

let startText = document.getElementById("note");

let nextElement = document.getElementById("nextbtn")
//  let startQuiz=document.getElementById("start quiz");

// let choice0 = document.getElementById("choiceA");
// let choice1 = document.getElementById("choiceB");
// let choice2 = document.getElementById("choiceC");
// let choice3 = document.getElementById("choiceD");


//startQuiz.addEventListener("click", start);

// startBtn.addEventListener("click", function(event){console.log(event)});
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    //console.log("see if start works");
    startBtn.classList.add("hide")
    var x = document.getElementById("note");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}
let questionElement = document.getElementById("questions");
let timerElement = document.getElementById("time");

let timer = 60;
let stopTimer = 00
//console.log(questionElement);


startBtn.addEventListener("click", startClickHandler);

function startClickHandler(event) {
    //console.log(event.target);


    //make a function for questions to be shown

    let questions = [
        {
            question: " Who said, Ask any racer, any real racer,it doesn't matter if you win by an inch or a mile, winning is winning?",
            choiceA: "Vince",
            choiceB: "Leon",
            choiceC: "Hector",
            choiceD: "Dom",
            answer: "Dom"
        },
        {
            question: "Who drove the orange lamborghini mercielago on the ice?",
            choiceA: "The Rock",
            choiceB: "Jason Statham",
            choiceC: "VIn Disel",
            choiceD: "Tyrese",
            answer: "Tyrese"
        },
        {
            question: "What is the beer of choice in the movie?",
            choiceA: "Budweiser",
            choiceB: "Corona",
            choiceC: "Blue Moon",
            choiceD: "Coors Light",
            answer: "Corona"
        },
        {
            question: "What was the car of choice for Dom",
            choiceA: "Dodge Charger",
            choiceB: "Mustang gt350",
            choiceC: "Toyota Supra",
            choiceD: "Honda civi Si",
            answer: "Dodge Charger"
        },
        {
            question: "What is Brian's true profession?.",
            choiceA: "chef",
            choiceB: "accountant",
            choiceC: "cop",
            choiceD: "mechanic",
            answer: "cop"
        },
    ];

                for( let i = 0; i< questions.length; questions);


    let questionIndex = 0;

    function displayNextQuestions() {

        let currentQuestion = questions[questionIndex];

        let questionDiv = document.createElement('div');
        questionDiv.textContent = currentQuestion.question;

        let choiceADiv = document.createElement('button');
        choiceADiv.textContent = currentQuestion.choiceA;

        let choiceBDiv = document.createElement('button');
        choiceBDiv.textContent = currentQuestion.choiceB;

        let choiceCDiv = document.createElement('button');
        choiceCDiv.textContent = currentQuestion.choiceC;

        let choiceDDiv = document.createElement('button');
        choiceDDiv.textContent = currentQuestion.choiceD;

        // let answerDiv = document.createElement('div');
        // answerDiv.textContent = currentQuestion.answer;

        questionElement.appendChild(questionDiv);
        questionElement.appendChild(choiceADiv);
        questionElement.appendChild(choiceBDiv);
        questionElement.appendChild(choiceCDiv);
        questionElement.appendChild(choiceDDiv);

        choiceADiv.addEventListener("click", function () {
            if (questions[questionIndex].answer === this.textContent) {
                alert("correct")
            } else {
                alert("wrong");
            }
        });

        choiceBDiv.addEventListener("click", function () {
            if (questions[questionIndex].answer === this.textContent) {
                alert("correct")
            } else {
                alert("wrong");
            }
        });

        choiceCDiv.addEventListener("click", function () {
            if (questions[questionIndex].answer === this.textContent) {
                alert("correct")
            } else {
                alert("wrong");
            }
        });

        choiceDDiv.addEventListener("click", function () {
            if (questions[questionIndex].answer === this.textContent) {
                alert("correct")
            } else {
                alert("wrong");
            }
        });
        
        //set timer to countdown when quiz is started
        nextElement.addEventListener("click", nextQuiz);
        function nextQuiz() {
            nextElement.classList.add("hide")
            var x = document.getElementById("questions");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

    }
    displayNextQuestions()


    function startTimer() {
        var timerInterval = setInterval(function () {
            (timer--)
            timerElement.textContent = "0:" + timer;
        }, 1000);
        //if(timerInterval === stopTimer)

        // if ( minutes=== 0 && seconds === 0) {
        //     clearInterval(timerInterval);
        //     callback && callback();

    }

    startTimer();
}



















// // We start the game with a score of 0
// let score = 0;
// // question[0].questions
// // question[0].choiceA
// // question[0].choiceB
// // question[0].choiceC
// // question[0].choiceA 
// // question[0].correct 

// //console.log("started")
// //array for all questions

// //display question on container
// function showQuestion() {
//     questionElement.innerText = question.question
// }



// // //loop each question
// // for (let i = 0; i < questions.length; i++) {
// //     let response = (questions[i].q);
// //     if (response == questions[i].answer) { }
// // }
// // // Compare answers
// // if ((response === true && questions[i].a === "t") ||
// //     (response === false && questions[i].a === "t")) {
// //     // Increase score
// //     score++;
// //     alert("Correct!");
// // }
// // else {
// //     alert("Wrong!");
// // }

// let var1 = [];
// let var2 = JSON.parse(localStorage.getItem("score"));
// if (var2 !== null) {
//     var1 = var2;
// }
// localStorage.setItem("questions", score);
// console.log(localStorage);
