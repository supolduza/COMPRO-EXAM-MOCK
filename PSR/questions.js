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
//PUBLIC SERVICE RULES
{
  question: '….……..is the absence of an officer from duty for a period specified in PSR 100203',
   choice1: 'Leave of absence',
   choice2: 'Pre-retirement leave' ,
   choice3: 'Study leave',
   choice4: 'Annual leave',

   answer: 4			
   },
   {
  question: 'in Rule 100102 is a place where an officer could be reached during his/her leave period',
   choice1: 'Annual leave',
   choice2: 'Sick leave ',
   choice3: 'Leave year',
   choice4: 'Leave address ',

   answer: 4			
   },{
  question: 'Shall be paid to staff not occupying government quarters in lump sum at the beginning of the year?',
   choice1: 'Utilities allowance',
   choice2: 'Rent subsidy' ,   
   choice3: 'Hazard allowance',
    choice4: 'Acting allowance',
    answer: 2			
   },{
  question: 'PSR. 020209, all officers are ensure to sign on security Form 1',
   choice1: 'Appointment letter' ,
   choice2: 'Letter of accommodation' ,  
   choice3: 'Oath of secrecy',
    choice4: 'Internal memo',
    answer: 3			
   },{
  question:  'The permanent release of an officer from one scheduled service to another or from e service? (PSR 020501) class to another within the same',
    choice1: 'Transfer  ',   
   choice2: 'Re-engagement',
   choice3: 'Business trip',
   choice4: 'Holiday',
   answer: 1			
   },{
  question: 'According to P.S.R. 030301 is defined as a specific act wrong-doing or improper behavior which is inimical to the image of the service which can be investigated and proved, it can also lead to termination and retirement?',
   choice1: 'Inefficiency',
   choice2: 'Misconduct ',   
   choice3: 'Offence',
   choice4: 'Retirement',
   answer: 2			
   },{
  question: 'All are types of misconduct except',
   choice1: 'Unruly behavior',
   choice2: 'Foul language',
   choice3: 'Murder',    
   choice4: 'Negligence',
   answer: 3			
   },{
  question: '…….. is a predetermined amount added to the annual emolument of an officer every calendar year',
   choice1: 'Annual salary',
    choice2: 'Yearly emolument',    
   choice3: 'Increments', 
   choice4: 'Allowance',
   answer: 3			
   },{
  question: 'Based on PS.R. 060205 time holding confirmation examination shall be'	,
   choice1: 'Held once in a year in the last quarter of every year.', 
   choice2: 'Twice in a year 2nd and 3rd quarter of every year',
    choice3: "Once in a year in the first quarter of every year" ,
   choice4: 'Twice in a year. 1 and 2 quarter of every year',
   answer: 1			
   },{
  question: 'The following are the prescribed examination for executive officers (P.S.R 060302) ',
   choice1: 'Public Service Rule and Financial Regulation ',     
   choice2: 'Public Administration and Financial Regulation',
    choice3: 'Financial Regulation and Civil Service Regulations',
   choice4: 'Financial Regulations and Code of Conducts ',
   answer: 1			
   },{
  question: 'The following persons except, when traveling by air, land or seat at government expenses will be eligible for free insurance cover to concerned. P.S.R. 080203',
   choice1: 'Staff',
   choice2: 'Domestic worker',     
   choice3: 'Wife and Child',
    choice4: 'Child and staff',
    answer: 2			
   },{
  question: 'Base on P.S.R 100224, all except one are types of study leave',
    choice1: 'In-service training',
   choice2: 'Studying leave with pay', 
   choice3: 'Studying leave without pay',
   choice4: 'Studying leave for retirement ',  
   answer: 4			 
   },{
  question: 'In P.S.R. 130124, a "work free day" means the working day on which',
   choice1: 'Rain falls',
   choice2: 'Snow covered the road',
   choice3: "Birthday ceremony's days", 
   choice4: 'Holiday fails. ',   
   answer: 4			
   },{
  question: 'In P.S.R. 130121, the circumstances in which officers can work overtime are as follows except?',
   choice1: 'Officers attached to top management/officials',
    choice2: 'On special assignment, e.g. conference, committee',
   choice3: 'Period of closing of annual account',
    choice4: 'Period during annual leave',  
    answer: 4			
   },{
   question: 'In P.S.R. 160102. One of these is classified in to the categories of parastatals',
   choice1: 'Security Agencies',   					
   choice2: 'Medical practitioners',
   choice3: 'Ministry of justice.', 
   choice4: 'Teaching and non teaching staffs',
   answer: 1			
   },{
  question: 'In P.S.R. 050201-Progress report are to provide one of the following in respect of officers on probation or initial contract on which to judge his/her suitability for confirmation ',
   choice1: 'Conduct and Capabilities',
   choice2: 'Date of retirement',
   choice3: 'Administration of Oath of secrecy',
    choice4: 'Declaration to the code-of-conduct bureau.',  
    answer: 1			  
   },{
  question: 'Under which provision of P.S.R. states that public officer is not prohibited from holding shares of public and private companies operating in Nigeria or abroad?',
   choice1: 'PSR 030423', 
   choice2: 'PSR 030425',
   choice3: 'PSR 030424',   
   choice4: 'PSR 030422',
   answer: 3			
   },{
  question: 'What is the full meaning of A.P.E.R ',
   choice1: 'Annual Pay Emolument of Rent',
   choice2: 'Annual Pay Emolument Report',
   choice3: 'Annual Performance of Examination Report',
   choice4: 'Annual Performance Evaluation Report.', 
   answer: 4			
   },{
  question: 'Which section according to PSR states when an officer supposed to get an increment of salary?',
   choice1: 'PSR 020407',
   choice2: 'PSR 020408',
   choice3: 'PSR 202409',
   choice4: 'PSR 020410 ', 
   answer: 4			 
   },{
  question: 'Section 020501 of P.S.R., defines',
   choice1: 'Promotion ',
   choice2: 'Transfer',
   choice3: 'Dismissal',
    choice4: 'Leave.',    
    answer: 2			
   },{
  question: 'What sort of promotion is given to an officer who has completed the probation period specified in PSR 020301',
   choice1: 'Senior Promotion',
   choice2: 'Normal Promotion',
   choice3: 'Notional Promotion ',
   choice4: 'Abnormal Promotion',
   answer: 2			
   },{
  question: 'Which rule of PSR defined termination',
   choice1: '020801', 
   choice2: '020802',
   choice3: '020803', 
   choice4: '020804.', 
   answer: 3			     
   },{
  question: 'According to PSR 020810-the compulsory retirement age of all grades in the services are',
   choice1: '60years or 35years of pensionable services',       
   choice2: '35years or 60years of pensionable services',
   choice3: '15years of pensionable services ',
   choice4: '60years or 10years of pensionable services',
   answer: 1			
   },{
  question: 'According to P.S.R. 020903, the main purpose of certificate os service is that it may be used',
    choice1: 'Reference when seeking other employment.',      
   choice2: 'Record keeping',
   choice3: 'For retirement purpose ',
   choice4: 'For Insurance entitlement',
   answer: 1			
   },{
  question: 'Which form can be used for certificate of service for level 07 and above according to PS 020904',
   choice1: 'Gen 60',
   choice2: 'Gen 58',
   choice3: 'Gen 62',
   choice4: 'Genquestion: ',
   answer: 2			
   },{
  question: 'When traveling on duty away from duty post, the person engaged shall be entitle to',
   choice1: 'Pension allowance ',
   choice2: 'Duty tour allowance',
   choice3: 'Traveling allowance',
    choice4: 'Welfare allowance.',  
    answer: 3			 
   },{
  question: 'Which P.S.R define general efficiency',
   choice1: '030101', 
   choice2: '030102',
   choice3: '030201',  	
   choice4: '030202',
   answer: 3			
   },{
  question: 'No female public service shall be entitled to resign her appointment or retire by reason of pregnancy alone, under which section of P.SR this can be found?',
   choice1: 'P.S.R. 030205',
   choice2: 'P.S.R. 030204',	
   choice3: 'P.S.R. 030203 ',
   choice4: 'P.S.R. 030202',
   answer: 2			
   },{
  question: 'Below are the scandalous conduct that constitute misconduct P.SR. 030301 except',
   choice1: 'Drunkenness',
   choice2: 'Malingering',
   choice3: 'Sick',
   choice4: 'Dishonesty.',
   answer: 3
   },{
  question: 'P.S.R. 030401 defines as a specific act of very serious wrong-doing and improper behavior which is inimical to the image of the service and which can be investigated and if proven may lead to dismilasal',
   choice1: 'Misconduct',
   choice2: 'Gross misconduct ',
   choice3: 'Serious misconduct.' ,
   choice4: 'Minor misconduct',
   answer: 3
   },{
  question: 'Which P.S.R. mentioned an act of serious misconduct',
   choice1: '030401' ,
   choice2: '030404',
   choice3: '030402' ,
   choice4: '030403.' , 	
   answer: 3
   },{
  question: 'The authorized absence of an officer from duty specific period is known as',
   choice1: 'Tax', 
   choice2: 'Transfer',
   choice3: 'Leave',
   choice4: 'Relocate', 
   answer: 	3	
   },{
  question: 'Below are the definitions of transfer except (PSR 130133)', 
   choice1: 'Transfer from station to another during a tour of service',
   choice2: 'Transfer from one station to another on return from leave',
   choice3: 'Transfer or secondment from the service of another government in the federation', 
   choice4: 'Removed from one section to another',		
   answer: 4
   },{
  question: 'A place where an officer could be reached during his/her leave period is called',
    choice1: 'Market address',
   choice2: 'House address', 
   choice3: 'Leave address',
    choice4: 'Hospital address',		
    answer: 3
   },{
  question: 'Any leave due to an officer in a year for the service rendered to government is called',
   choice1: 'Earned leave' ,
   choice2: 'Account leave',
   choice3: 'Tax leave ',
   choice4: 'Revenue leave',	
   answer: 	1
   }
]

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 35;

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