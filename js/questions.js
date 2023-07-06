let questionsOrigin = [
    {
        question:'Что один из них показал?',
        img: '1',
        answer:'Писюн',
        options:[
            'Фокус',
            'Мультик',
            'Писюн',
            'Как надо бить'
        ]
    },
    {
        question:'Какой сегодня обед?',
        img: '2',
        answer:'Котлетки с пюрешкой',
        options:[
            'Котлетки с макарошками',
            'Котлетки с пюрешкой',
            'Котлетки с гречкой',
            'Котлетки с рисом'
        ]
    },
    {
        question:'Чувак, это - ...',
        img: '3',
        answer:'Рэпчик',
        options:[
            'Джазик',
            'Шансончик',
            'Рэпчик',
            'Рок-н-кольчик'
        ]
    },
    {
        question:'С чем эта женщина перепутала камеру?',
        img: 'sova',
        answer:'Сова',
        options:[
            'Попугай',
            'Сова',
            'Пистолет',
            'Булочка'
        ]
    },
    {
        question:'Про какую пушку говорит этот молодой человек?',
        img: 'gun',
        answer:'Анигиляторная',
        options:[
            'Массового поражения',
            'Водяная',
            'Анигиляторная',
            'Двойная'
        ]
    },
    {
        question:'Он ничего не понял, но - ...',
        img: 'understand',
        answer:'Ему очень интересно',
        options:[
            'Ему нормально',
            'Ему понятно',
            'Ему очень интересно',
            'Ему до лампочки'
        ]
    },
    {
        question:'Что сказал оператор видео, когда собака упала с бревна?',
        img: 'dog',
        answer:'Это фиаско братан',
        options:[
            'Это фиаско братан',
            'Тотальное поражение',
            'Ну ты даешь',
            'Как всегда'
        ]
    },
    {
        question:'Что вы делаете в моём ... ?',
        img: 'fridge',
        answer:'Холодильнике',
        options:[
            'Телевизоре',
            'В подвале',
            'Доме',
            'Холодильнике'
        ]
    },
    {
        question:'Какую фразу говорит персонаж этого мема?',
        img: 'camera',
        answer:'Камеру вырубай',
        options:[
            'Камеру вырубай',
            'Денег дай',
            'Предоставь удостоверение',
            'Уходи отсюда'
        ]
    },
    {
        question:'Фамилия, имя и отчество этого персонажа?',
        img: 'mafia',
        answer:'Зубенко Михаил Петрович',
        options:[
            'Зубенко Василий Владимирович',
            'Зубенко Владислав Петрович',
            'Зубенко Михаил Петрович',
            'Зубенко Максим Викторович'
        ]
    },
    {
        question:'Как зовут эту бабушку?',
        img: 'grandma',
        answer:'Наталья',
        options:[
            'Зина',
            'Наталья',
            'Оксана',
            'Ольга'
        ]
    },
    {
        question:'Нет ничего важнее ...',
        img: 'VinDrosel',
        answer:'Семьи',
        options:[
            'Бизнеса',
            'Денег',
            'Семьи',
            'Мемов'
        ]
    },
    {
        question:'Что скрывает этот молодой человек?',
        img: 'garold',
        answer:'Боль',
        options:[
            'Счастье',
            'Возраст',
            'Боль',
            'Деньги'
        ]
    },
    {
        question:'Какой породы собаки с мема «Качок Доге и Чимс»?',
        img: 'Doge',
        answer:'Сиба-ину',
        options:[
            'Корги',
            'Сиба-ину',
            'Сараби',
            'Акита-ину'
        ]
    },
    {
        question:'Как зовут этого кота?',
        img: 'bender',
        answer:'Бендер',
        options:[
            'Степан',
            'Бендер',
            'Пушок',
            'Саша Белый'
        ]
    },
    {
        question:'Когда-то и меня вела дорога приключений... А потом мне прострелили ...',
        img: 'knee',
        answer:'Колено',
        options:[
            'Руку',
            'Бедро',
            'Колено',
            'Мозг'
        ]
    },
    {
        question:'Какую фразу он сказал?',
        img: 'fuckYou',
        answer:'Fuck you',
        options:[
            'Boy next door',
            'Fuck you',
            'Deep dark fantasy',
            'Boss of this gym'
        ]
    },
    {
        question:'Fisting is ...',
        img: '300',
        answer:'300 bucks',
        options:[
            '300 rubles',
            '300 dollars',
            '300 bucks',
            '300 tenge'
        ]
    },
    // {
    //     question:'Fisting is ...',
    //     img: '300',
    //     answer:'300 bucks',
    //     options:[
    //         '300 rubles',
    //         '300 dollars',
    //         '300 bucks',
    //         '300 tenge'
    //     ]
    // },
]


function randowNumber(maxValue){
    return Math.floor(Math.random() * maxValue);
}


let questions = [];


function mixArray(currentArr, lenOfArray){
    let randomNum = randowNumber(lenOfArray);
    let newArray = [];

    while(newArray.length< currentArr.length){
        if (!newArray.includes(currentArr[randomNum])) {
            newArray.push(currentArr[randomNum])
        }
    randomNum = randowNumber(lenOfArray);
}
    return newArray;

}

function mixQuestions(){
    clearQuestions();

    questions = mixArray(questionsOrigin, questionsOrigin.length)

    questions = questions.map(item =>{
        return {
            ...item,
            options: [...mixArray(item.options, item.options.length)],
        }
    })
}

function clearQuestions(){
    questions.splice(0, questions.length);
}

mixQuestions()




