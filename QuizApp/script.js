const questions=[
    {question:"which is largest animal in the word?",
    answer:[
        {text:"elephant",correct:false},
        {text:"blue whale",correct:true},
        {text:"shark",correct:false},
        {text:"Giraffe",correct:false}
    ]
},
{question:"which is smallest country in the word?",
answer:[
    {text:"vatican city",correct:ture},
    {text:"bhutan",correct:false},
    {text:"Napal",correct:false},
    {text:"Shri Lanka",correct:false}
]
},
{question:"which is largest desert in the word?",
answer:[
    {text:"Kalahari",correct:false},
    {text:"Gopi",correct:true},
    {text:"Sahara",correct:false},
    {text:"Antarctica",correct:ture}
]
},
{question:"which is smallest continent in the word?",
answer:[
    {text:"Asia",correct:false},
    {text:"Australia",correct:true},
    {text:"Arctic",correct:false},
    {text:"Africa",correct:false}
]
},

]
const questionElement=document.getElementById("question")
const answerbutton=document.getElementById("answer-buttons")
const nextbutton=document.getElementById("next-btn")


let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
}
currentQuestion.answer.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);
    button.addEventListener("click",selectAnswer)
})


function resetState(){
    nextbutton.style.display="none";
    while(answerbutton){
        answerbutton.removeChild(answerbutton.firstChild)
    }
}
startQuiz()