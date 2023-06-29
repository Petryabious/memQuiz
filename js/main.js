const startBtn = document.querySelector('[data-start-btn]');
const popupInfo= document.getElementById('popup-info');
const exitBtn = document.querySelector('[data-exit-btn]');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.popup-info__btn-continue');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');

const tryAgainBtn = document.querySelector('[data-try-btn]');
const homeBtn = document.querySelector('[data-home]');

const nextBtn = document.querySelector('[data-next-btn]');
const quizBody = document.getElementById('quiz-body');

let questionCount = 0;
let questionNum = 1;
let userScore = 0;

startBtn.addEventListener('click', ()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
})

exitBtn.addEventListener('click', ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
})


// рендер карточки с вопросом и ответами
function showQuestions(index){
    const questionText = document.querySelector('.quiz-box__question');
    questionText.textContent = questions[index].question;

    let quizBodyMarkup = `<div class="quiz-box__img">
								<img src="./img/${questions[index].img}.webp" alt="${questions[index].img}">
							</div>
							<ul class="quiz-box__options">
								<li class="quiz-box__option">${questions[index].options[0]}</li>
								<li class="quiz-box__option">${questions[index].options[1]}</li>
								<li class="quiz-box__option">${questions[index].options[2]}</li>
								<li class="quiz-box__option">${questions[index].options[3]}</li>

							</ul>`

    quizBody.innerHTML = quizBodyMarkup;
    selectedOption(index);

}
// выбор правильного ответа и добавление класса 'active' на кнопку
function selectedOption(index){

    const options = document.querySelectorAll('.quiz-box__option');
    options.forEach(option =>{
        option.addEventListener('click', function(){
            const correctAnswer = questions[index].answer;

            if (correctAnswer === this.textContent) {
                this.classList.add('correct');
                userScore++;
                headerScore();
                nextBtn.classList.add('active');
            } else {
                this.classList.add('incorrect');
                nextBtn.classList.add('active');
                // если ответ неверен, то автоматически выбрать правильный ответ
                options.forEach(option => {
                    option.classList.add('disabled')
                    if (option.textContent == correctAnswer) {
                        option.classList.add('correct');
                    } 
                });
            }
        })
    })

    
}

// рендер количество вопросов
function questionCounter(index){
    const questionTotal = document.querySelector('.quiz-box__total');
    questionTotal.textContent = `${index} из ${questions.length} вопросов`;
}
// рендер правильных ответов
function headerScore(){
    const headerScoreText = document.querySelector('.quiz-box__score');
    headerScoreText.textContent = `Счёт ${userScore} / ${questions.length}`;
}



// кнопка для вывода окна квиза
continueBtn.addEventListener('click', ()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
    
    
})



nextBtn.addEventListener('click', ()=>{
    if(questionCount < questions.length-1){
        questionCount++;
        showQuestions(questionCount);
        questionNum++;
        questionCounter(questionNum);
        
        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
    
})





// показ финального окна и формирования круга результата
function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.result-box__score');
    scoreText.textContent = `Ваш результат ${userScore} из ${questions.length}`;


    const circularProgress= document.querySelector('.result-box__circular-progress');
    const progressValue= document.querySelector('.result-box__progress-value');

    let progressStartValue = -1;
    let progressEndValue = Math.round((userScore  / questions.length) * 100);
    let speed = 20;

    let progress = setInterval(()=>{
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }

    }, speed)
    
}

// кнопка снова
tryAgainBtn.addEventListener('click', ()=>{
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');
    
    questionCount = 0;
    questionNum = 1;
    userScore = 0;
    mixQuestions();
    showQuestions(questionCount);
    questionCounter(questionNum);
    headerScore();
})
// кнопка выход на первую страницу
homeBtn.addEventListener('click', ()=>{
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');
    
    questionCount = 0;
    questionNum = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNum);

})