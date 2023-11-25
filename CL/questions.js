console.log('this quiz app is dedicated to: Sonia David - LomL')

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    
    //CRIMINAL LAW
   { 
   question: 'Which is a rule of action, or binding principles made by the government at all levels which the people are bound to obey in these?',
    choice1: 'Edict',
    choice2: 'Law',
    choice3: 'Act',
    choice4: 'Decree',
    answer: 2
    },
    {
   question: 'Is a law Act made by the federal legislature house after Nigeria became a republic?',
    choice1: 'Act',
    choice2: 'Law',
    choice3: 'Edict',
    choice4: 'Decree',	
    answer: 1			
    },
    {
   question: 'Means a law made by the federal military government which is applicable throughout the federation of Nigeria is-',
    choice1: 'Decree',
     choice2: 'Law',
    choice3: 'Act',
    choice4: 'Edict',
    answer: 1
    },
    {
   question: 'Is a forbidden act which affects the interest of the community as a whole and for which the offender is punished according to the law',
    choice1: 'Tort',
    choice2: 'Crime',
    choice3: 'Act',
    choice4: 'Edict',
    answer: 2
    },
    {
   question: 'From the following, which one is not among the three main categories of criminal law',
    choice1: 'Felony',
    choice2: 'Misdemeanor',
    choice3: 'Simple offence',
    choice4: 'Crime',	
    answer: 4		
    },
    {
   question: 'Offence can be defined as …….?',
    choice1: 'An act or omission which renders the person during the act or making the omission punishment under the criminal code or under the other ordinance in law in force',
    choice2: 'As a leads criminal action',
    choice3: 'It implies punishment ',
    choice4: 'Omission of action',
    answer: 1
    },
    {
   question: '…… Is any offence declared by law which is punishable by imprisonment for not less than six months but less than three years',
    choice1: 'Simple offence',
    choice2: 'Felony', 
    choice3: 'Misdemeanor',
     choice4: 'Crime',
     answer: 3
    },
    {
   question: '……… means any offence other than felony or misdemeanor or is punishable by imprisonment for less than six month.',
    choice1: 'Tort',
    choice2: 'Crime',
    choice3: 'Simple offence',
     choice4: 'Act',
     answer: 3
    },
    {
   question: 'A marriage recognized by the law of the place where it is contracted as a voluntary unien for use of one man and one woman to the exclusion of all others is what',
    choice1: 'Overnight marriage',
    choice2: 'Young person marriage',
    choice3: 'Christian marriage', 
    choice4: 'Offensive marriage',
    answer: 3
    },
    {
   question: 'When can assault be justified in below?',
    choice1: 'In defense of property', 
    choice2: 'In order and directive',
    choice3: 'Power point', 
    choice4: 'Daily order',
    answer: 1
    },
    {
   question: 'The coroner Form B is called?',
    choice1: 'Police investigation report',
    choice2: 'Index to case file', 
    choice3: 'Death report to coroner',
    choice4: 'Court order',
    answer: 3
    },
    {
   question: 'The Coroner Form C is for?',
    choice1: "Coroner's order for post mortem",
    choice2: 'Warrant of arrest',
    choice3: 'Death certificate',
    choice4: 'Vio license report',
    answer: 1
    },
    {
   question: "The Coroner's Form D is called?",
    choice1: 'Medical bill',
    choice2: "Medical practitioner's report",
    choice3: 'Police Investigation report', 
    choice4: 'Name of the medical practitioner',	
    answer: 2	
    },
    {
   question: "The Coroner's Form E is for?",
    choice1: 'Name of medical practitioner', 
    choice2: 'Name and address of the hospital', 
    choice3: "Coroner's inquisition",
    choice4: 'Name of the judge in the case',	
    answer: 3		
    },
    {
   question: 'The Coroner Form F is called?',
    
    choice1: 'Form for witness summons',
    choice2: 'Name of the DPO',
    choice3: 'Name of the IPO', 
    choice4: 'Medical history of the decease',
    answer: 1
    },
    {
   question: 'Mortuary can be as a place where', 
    choice1: 'Sick people are being kept',
    choice2: 'Cold room',
    choice3: "A place where dead bodies are collected for doctor's post mortem examination",
     choice4: 'Post office mortem',		
     answer: 3			
    },
    {
   question: 'Exhumation can be defined as',
    choice1: 'Burning of death bodies',
    choice2: 'Digging up of a death body from the grave',
    choice3: 'Going to check the corpse in the grave', 
    choice4: 'Planting of flower by the grave',		
    answer: 2	
    },
    {
   question: "A coroner may order for exhumation under sec. '6' of the coroner's Act if ",
    choice1: 'There is family dispute',
    choice2: 'When it appears to the coroner that the body of any person who has died in circumstances requiring the holding of an inquest has been buried without such inquest having been held',
    choice3: 'When it appears that the person died prematurely', 
    choice4: 'It appears the dead will rise again from the grave by itself.',
    answer: 2
    },
    {
   question: 'One of the following option is a condition under which coroner may not order for exhumation',
    choice1: 'When the case is family case', 
    choice2: 'When a husband killed his wife',
    choice3: 'When there is no reasonable probability of satisfactory result being',
    choice4: 'None of the above',
    answer: 3
    },
    {
   question: 'One of the following option is a condition under which a coroner may disperse with the holding of an inquest under the Act?',
     choice1:'When the coroner is informed that criminal proceedings have been or about to be instituted against any person already in custody or about to be arrested ',
    choice2: 'When the criminal has already been in custody',
    choice3: 'If the criminal refused to be re-arrested by the Police', 
    choice4: 'All of the above',
    answer: 1
    },
    {
   question: 'The following options are types of Liquor License except?',
    choice1: 'Tavern Liquor License',
    choice2: 'Wine and Beer on license', 
    choice3: 'Wine and Beer off License',
    choice4: 'Nigeria Breweries License',
    answer: 4
    },
    {
   question: 'Who make objections to the issue of Liquor License?', 
    choice1: 'The Commissioner of Police',
    choice2: 'Head master of community secondary school', 
    choice3: 'State governor',
    choice4: 'Any public officer of local government council and any person residing in a district or place where the license is applied by the individual or jointly may object to the granting of liquor license or its renewal',
    answer: 4
    },
    {
   question: 'Which of these is a type of Liquor license',
    choice1: 'General Retail Liquor License', 
    choice2: 'Cubana club License',
    choice3: 'Mama Buhari Joint Liquor License', 
    choice4: 'Ahmadu store and bar license',
    answer: 1
    },
    {
    question: 'One among the following classes of person is regarded as prohibited immigrants',
    choice1: 'President Bola Ahmed Tinubu',
    choice2: 'Engr Seyi Makinde',
    choice3: 'Any person against whom an order of deportation from Nigeria is in force',
    choice4: 'Formal senate',
    answer: 3
    },
    {
   question: 'This is when a person makes a false document or written knowing it to be false and with intent that it may in any way be used or arted upon is known as',
    choice1: 'Forfeit',
    choice2: 'Forgery', 
    choice3: 'Owner',
     choice4: 'Trick',
     answer: 2
    },
    {
   question: 'A person who knowingly or fraudulently change false document or writing or counterfeit seat is guilty of an offence the same kind is called',
    choice1: 'Forgery',
    choice2: 'Incompetent',
    choice3: 'Alteration', 
    choice4: 'Deceived',
    answer: 3
    },
    {
   question: 'These are the elements that constituting assault except?',
    choice1: 'Force',
    choice2: 'Movement', 
    choice3: 'Alarm',
    choice4: 'Fight',
    answer: 4
    },
    {
   question: 'Any wounding with intent to murder, disable or cause grievous bodily harm is called',
    choice1: 'Assault',
    choice2: 'Felonious wounding',
    choice3: 'Fighting', 
    choice4: 'Arson',
    answer: 1
    },
    {
   question: 'This usually occur when a person publicly insult seek exercise contempt of any religions in many ways is called?', 
    choice1: 'Breach of court',
    choice2: 'Breach of case',
    choice3: 'Breach of the peace.',
    choice4: 'Breach religion',
    answer: 3
    },
    {
   question: '…… is a statement made by an accused person that he/she was somewhere wise at the time the offence was alleged to have been committed',
    choice1: 'Charge sheet',
    choice2: 'Allocutus',
    choice3: 'Alibi',
    choice4: 'Bail bond',
    answer: 3
    },
    {
    question: 'An opportunity or privilege given to the accused to say something before sentence is passed by a judge/magistrate is called',
    choice1: 'Defence',
    choice2: 'Pardon',
    choice3: 'Allocutus',
    choice4: 'Habeacurpus',
    answer: 3
    },
    {
   question: 'The following are the people who may institute criminal proceedings in any law courts except?',
    choice1: 'The Police',
    choice2: 'The Attorney General',
    choice3: 'Military Officer',
    choice4: 'Private prosecutor',
    answer: 3
    },
    {
    question: 'The following are types of pleas except?',
    choice1: 'Plea not guilty',
    choice2: 'Plea mute of malice',
    choice3: 'Plea of pardon',
    choice4: 'Plea of alibi	',	
    answer: 4			
    },
    {
   question: 'All these offences involves killing of human being except?',
    choice1: 'Manslaughter',
    choice2: 'Infanticide',
    choice3: 'Homicide',
    choice4: 'Lesbianism',
    answer: 4
    }
]

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 34;

startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();

    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        //go to the end page...
        return window.location.assign('./end-page.html');
    }

    questionCounter++;
    //questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS;
    progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
    //UPDATE THE PROGRESS BAR
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        //selectedChoice.parentElement.classList.remove(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
}); 

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

game.classList.remove('hidden');
loader.classList.add('hidden');
startGame();