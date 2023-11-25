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
    //POLICE DUTIES
    {
        question:  '……. is a written order signed by a judge or magistrate or justice of a peace',
         choice1: 'Bail',
         choice2: 'Summon',
         choice3: 'Crime', 
         choice4: 'Offence',
         answer: 2
         },
         {
        question: '…… is an area or portion of land allocated to a police officer to patrol or take care of during his tour of duty',
         choice1: 'Partnership', 
         choice2: 'Sole trader',
         choice3: 'Beat',
         choice4: 'Compound',	
         answer: 3
         },
         {
        question: 'Which of these is the type of beat system',
         choice1: 'Fixed route system ',
         choice2: 'Abortion beat',
         choice3: 'Sound system beat' ,
         choice4: 'Music beat system',
         answer: 1
         },
         {
        question: 'A book issued to every Police officer to enable him makes entries in connection with his duty known as',
         choice1: 'Trouser note book ',
         choice2: 'Computer note book',
         choice3: 'Pocket note book' ,
         choice4: 'Diary',
         answer: 3
         },
         {
        question: 'One of these is type of police report',
         choice1: 'Police company report ',
         choice2: 'Oil and Gas report',
         choice3: 'Crime report',
         choice4: 'Account report',
         answer: 3
         },
         {
        question: '………contains all facts and evidence about a complaint of report made to the police of a crime',
         choice1: 'Crime file',
         choice2: 'Offence file',
         choice3: 'Complain file',
         choice4: 'Case file	',
         answer: 4
         },
         {
        question: '…….. is one of the criminal records',
         choice1: 'Charge registers',
         choice2: 'Duty roster',
         choice3: 'Diary keeping',
         choice4: 'Minute book',
         answer: 1
         },
         {
        question:  'is one of the record kept at the Police station',
          choice1: 'Criminal records' ,
         choice2: 'Office book',
         choice3: 'Case file',
         choice4: 'Minute sheets',
         answer: 1
         },
         {
        question: 'What is the meaning of C.A.T ',
         choice1: 'Court Awaiting Trial',
         choice2: 'Court Attendance Trial',
         choice3: 'Case Awaiting Trial',
         choice4: 'Case Attending Trial'	,
         answer: 3
         },
         {
        question: 'What is the full meaning of R.R.A.' ,
         choice1: 'Routine Road Accuse.',
         choice2: 'Road Round Accident',
         choice3: 'Register Of Road Accident',
         choice4: 'Rail Road Act',
         answer: 3
         },
         {
        question: 'Police officer may use firearm under which of these force order',
          choice1: 'F. 0.237 ',
         choice2: 'F. 0.327',
         choice3: 'F. 0.723',
         choice4: 'F. 0.273',
         answer: 1
         },
         {
        question: 'The punishment for the charge of felony is',
         choice1: '12 years ',
         choice2: '7 years',
         choice3: '14 years', 
         choice4: '6 months',
         answer: 3
         },
         {
        question: 'is the placing of suspect among other people of similar age, height, clothing i',
         choice1: 'Passing out Parade',
         choice2: 'Race parade',
         choice3: 'Ceremonial parade ',
         choice4: 'Identification parade.',
         answer: 4
         },
         {
        question: 'Form used for identification parade are',
         choice1: 'Form D48, D49, D50 ',
         choice2: 'Form D40,D45, D46',
         choice3: 'Form D20, D25, D30 ',
         choice4: 'Form D35, D38, D40',
         answer: 1
         },
         {
        question: '……… is one of the type of identification parade',
         choice1: 'Dancing. ',
         choice2: 'Eating',
         choice3: 'Voice',
         choice4: 'Singing ',
         answer: 2
         },
         {
        question: '……… is the placing of a similar age, heights, clothing, statues and general app whether a witness can recognize him or not',
         choice1: 'Sent forth Parade ',
         choice2: 'Independence Parade',
         choice3: 'Observation Parade', 
         choice4: 'Identification Parade',
         answer: 4
         },
         {
        question: 'These are the rules guiding the conduct of identification parade except:',
         choice1: 'Command', 
         choice2: 'Singing',
         choice3: 'Light',
          choice4: 'Composition',
          answer: 2
         },
         {
        question: 'Forms used for identification parade are below except',
         choice1: 'Form D48',
         choice2: 'Form D47',
         choice3: 'Form D49',
         choice4: 'For D50',
         answer: 2
         },
         {
        question: 'These are types of surveillance except:',
         choice1: 'Standing surveillance',
          choice2: 'Moving surveillance.', 
         choice3: 'Stationary surveillance',
         choice4: 'Electronic surveillance',
         answer: 1
         },
         {
        question: 'Information consists of the following except',
         choice1: 'Facts',
         choice2: 'News',
         choice3: 'Knowledge of accusation gathered through intelligence',
          choice4: 'Phone calls',
          answer: 4
         },
         {
        question: 'Ways through which information can get to Police are as follows except', 
          choice1: 'Eye witness',
          choice2: 'Suspects.',
         choice3: 'Baggers', 
         choice4: 'Magistrate',
         answer: 4
         },
         {
        question: 'Bellow are signs and symptoms of drunken person except',
         choice1: 'Breath smell of drink',
         choice2: 'Pulse accelerated',
         choice3: 'The style of walk', 
         choice4: 'Singing and dancing',
         answer: 4
         },
         {
        question: 'The telegraphic address of Inspector General of Police is',
         choice1: 'COMPOL',
         choice2: 'AIGPOL',
         choice3: 'INGENPOL',
         choice4: 'DIGPOL',
         answer: 3
         },
         {
        question: 'The telegraphic address of Police Children Secondary School is?',
         choice1: 'PENCIL',
          choice2: 'CHALK',
         choice3: 'POLAC',
         choice4: 'DETCOL',
         answer: 1
         },
         {
        question: 'Which department of the force at your enquires for transfer and promotion of rank and file',
          choice1: 'Finance and Administration (budget section)',
         choice2: 'Finance and Administration (welfare)', 
         choice3: 'Logistic and Supply',
          choice4: 'Finance and Administration (sports)',
          answer: 2
         },
         {
        question: 'All of the below are apparatus of police officer except?',
         choice1: 'Sword',
         choice2: 'Swagger cane',
         choice3: 'Baton',
         choice4: 'Cutlass',
         answer: 4
         },
         {
        question: 'Swagger cane cannot be carry during the following period except one',
         choice1: 'At Light time',
         choice2: 'When carrying Arms',
         choice3: 'During March past',
          choice4:' When driving',	
          answer: 3
         },
         {
        question: 'Which of the following is not part of the parade faces:',
         choice1: 'Right',
         choice2: 'Left', 
         choice3: 'Advance',
         choice4: 'Bending',
         answer: 4
         },
         {
        question: 'The main parts of words of command are as follows except one:',
         choice1: 'Introduction',
         choice2: 'Cautionary',
         choice3: 'Commanding',
          choice4: 'Executives',
          answer: 3
         },
         {
        question: 'Which among these does not makes the parts of Swagger cane?',
         choice1: 'Knob',
         choice2: 'Butt',
          choice3: 'Band',
         choice4: 'Feral',
         answer: 2
         },
         {
        question: 'Apparatus for fingerprints are as follows except one:',
         choice1: 'Slab',
         choice2: 'Roller',
         choice3: 'Printers black Ink', 
         choice4: 'Carbon paper',
         answer: 4
         },
         {
        question: 'Objectives of surveillance includes the following except',
         choice1: 'For elimination purpose',
         choice2: 'For future identification',
         choice3: 'To finalize the disposal of cases against person known or suspect to be wanted person',
         choice4: 'For elimination of exhibit',		
         answer: 4	
         }
]

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 32;

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