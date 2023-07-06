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
        img: 'knee2',
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
    {
        question:'Кто это?',
        img: 'billy',
        answer:'Billy Herrington',
        options:[
            'Ricardo Milos',
            'Billy Herrington',
            'Steve Rambo',
            'Van Darkholme'
        ]
    },
    {
        question:'Кто зовут этого гениального танцора?',
        img: 'ricardo',
        answer:'Ricardo Milos',
        options:[
            'Milla Jovovich',
            'Ricardo Milos',
            'Raoul Max Trujillo',
            'Michael Jackson'
        ]
    },
    {
        question:'Что изображено на фотографии?',
        img: 'evolution',
        answer:'Я в ахуе',
        options:[
            'Теория эволюция Дарвина',
            'Теория большого взрыва',
            'Я в ахуе',
            'Теория о происхождении рептилоидов'
        ]
    },
    {
        question:'Какое заклинание изображено?',
        img: 'vvv',
        answer:'Вжух',
        options:[
            'Каве инимикум',
            'Вжух',
            'Квен',
            'Дореме интеримо адапаре дориме'
        ]
    },
    {
        question:'Omae wa mou shindeiru',
        img: 'nani',
        answer:'Nani?',
        options:[
            'Nani?',
            'Nine?',
            'Neun?',
            'Nico?'
        ]
    },
    {
        question:'Show Me Your ...',
        img: 'vergil',
        answer:'Motivation',
        options:[
            'Motivation',
            'Movement',
            'Move your body',
            'Вьетнамское телевидение'
        ]
    },
    {
        question:'Какую фразу он сказал, когда был в самолёте?',
        img: 'hereOfToilet',
        answer:'Я не умру в туалете',
        options:[
            'Я не умру в туалете',
            'Бургер кинг говно',
            'Павел Дуров верни стену',
            'Всего хорошего'
        ]
    },
    {
        question:'Легендарная фраза этого джентльмена?',
        img: 'casino',
        answer:'Ебаный рот этого казино',
        options:[
            'Ебаный рот этого казино',
            'Я в своем познании настолько преисполнился',
            'Русские Идут',
            'Дерни этот тапок'
        ]
    },
    {
        question:'Как называлась эта легендарная рок-группа?',
        img: 'ranetki',
        answer:'Ранетки',
        options:[
            'Ранетки',
            'Сектор газа',
            'Градусы',
            'Верните мне мой 2007'
        ]
    },
    {
        question:'Какое историческое событие изображено на картинке?',
        img: 'warVSlizards2',
        answer:'Война древних русов с ящерами',
        options:[
            'Война древних русов с ящерами',
            'Война древних русов с диназаврами',
            'Война древних русов с рептилоидами',
            'Война древних русов с русами'
        ]
    },
    {
        question:'Как его зовут?',
        img: 'Cumberbatch',
        answer:'Бенедикт Камбербэтч',
        options:[
            'Бенедикт Камбербэтч',
            'Бенедикт Кукумбер',
            'Базелик Киберскотч',
            'Батлфилд Овервотч'
        ]
    },
    {
        question:'Кто это?',
        img: 'capybara',
        answer:'Капибара',
        options:[
            'Капибара',
            'Карбюратор',
            'Карбонара',
            'Wasserschwein'
        ]
    },
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




