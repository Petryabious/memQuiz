let questions = [
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
]

let questions2 = [];

function randowNumber(){
    return Math.floor(Math.random() * questions.length);
}

// while(true){

//     if(questions2.length===questions.length){
//         break;
//     }

//     if (!questions2.includes(questions[randowNumber()])) {
//         questions2.push(questions[randowNumber()]);
//     }
// }

while(questions2.length < questions.length){
    let randomNum = randowNumber();

    if(questions2.indexOf(questions[randomNum])===-1){
        questions2.push(questions[randomNum]);
    }
}

questions = [...questions2];

