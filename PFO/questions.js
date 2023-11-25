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
   //POLICE ORDERS AND INSTRUCTION
   {
    question: 'An officer appointed to try a defaulter in an Orderly room is called',
     choice1: 'Defaulter', 
     choice2: 'Delegated officer', 
     choice3: 'Reviewing officer ',
     choice4: 'Revisable officer. ',
     answer: 2
     },
     {
    question: '……. is a judgment debtor who failed to settle the debt within 14 days of the date of the judgment?',
     choice1: 'Fingerprint', 
     choice2: 'Financially embarrassed ',
     choice3: 'Insurrection', 
     choice4: 'Crime',
     answer:  	2		
     },
     {
    question: '…….. is the period between first appointment and when a pensionable officer is made substantive in his ranks?',
     choice1: 'Appointment',
     choice2: 'Implication',
     choice3: 'Trial period',
     choice4: 'Withholding',
     answer: 3
     },
     {
    question: 'This has to do with the period between first appointment and when a cadet officer became confirmed in his rank', 
     choice1: 'Appointment period',
     choice2: 'Probation period', 
     choice3: 'Promotion period', 
     choice4: 'Punishment period',
     answer: 2
     },
     {
    question: '……. is the advancement of an officer to the next rank or grade whose all-round ability is on high order without consideration for his length of service?',
     choice1: 'Accelerated Advancement', 
     choice2: 'Promotion', 
     choice3: 'Appointment', 
     choice4: 'Punishment',
     answer: 1
     },
     {
    question: 'An officer who incurs two or more major entries during an increment earning period will have an increment called', 
     choice1: 'Conduct',
     choice2: 'Unlawful', 
     choice3: 'Withheld', 
     choice4: 'Grade',
     answer: 3
     },
     {
    question: 'A police officer that plays trick in order to evade duties or exaggerate sickness or injury has committed an offence under disciplinary action called ',
     choice1: 'Absent from duty', 
     choice2: 'Leaving Beat',
     choice3: 'Malingering ',
     choice4: 'Disobedience to lawful orders',
     answer: 3
     },
     {
    question: 'An officer who is to be oppressive in conduct to a subordinate or willfully and negligently makes a false complaint against an inferior in rank is called', 
     choice1: 'Tyrannical conduce', 
     choice2: 'Subordinate conduct',
     choice3: 'Superior conduct', 
     choice4: 'Inferior conduct',
     answer: 1
     },
     {
    question: 'The law officers may call for these cases except',
     choice1: 'All', 
     choice2: 'Criminal cases',
     choice3: 'Simple offence cases', 
     choice4: 'Misdemeanor',
     answer: 1
   },
     {  
    question: 'All these cases must be referred to law officers L. Ministry of justice for advice except',
     choice1: 'All cases of Murder and Manslaughter.' ,
     choice2: 'All cases against official secret act',
     choice3: 'All cases involving judicial officers. ',
     choice4: 'All civil cases.	',
     answer: 4
     },
     {		
    question: 'A meticulous enquiry into a disciplinary offence or case of misconduct committed by any recruit or member of rank and file or inspectorate of the Nigeria Police Force is called' ,
     choice1: 'Defaulter' ,
     choice2: 'Drunkenness ',
     choice3: 'Orderly room trial ',
     choice4: 'prosecutor '	,
     answer: 3
   },
   {  
    question: 'The rapid or mental assessment of situation by the unit commander to decide whether or not force is immediately or necessary to be used in dispersing the rioters is called ',
     choice1: 'Appreciation of situation ',
     choice2: 'Partnership ',
     choice3: 'Riot stress ',
     choice4: 'Riotous mob '	,	
     answer: 1
   },
   {  
    question: 'The leader of a Riotous mob is called ',
     choice1: 'Female factor ',
     choice2: 'Man factor ',
     choice3: 'Male factor' ,
     choice4: 'Young factor',
     answer: 3
    },
    { 
    question: 'A coiled barbed wire used by, Riot units as barricade is called ',
     choice1: 'Cole wire ',
     choice2: 'Danhert wire ',
     choice3: 'Nigeria wire ',
     choice4: 'Ghana wire ',
     answer: 2
   },
   {  
    question: 'In the name of the President all persons assembled here are commanded to disperse peaceable and to go to their various homes or about their lawful business is called ',
     choice1: 'Law of camas ',
     choice2: 'The ten commandment' ,
     choice3: 'Full words of proclamation' ,
     choice4: 'Short words of proclamation' ,
     answer: 3
  },
  {   
    question: 'What does PFA stands for ',
     choice1: 'Pupils founds Agency ',
     choice2: 'Pension Funds Administrative ',
     choice3: 'People Fixed Agency ',
     choice4: 'Party for all 	',
     answer: 2
   },
   {  
    question: 'The World is divided into how many continents ',
     choice1: '10' ,
     choice2: '12 ',
     choice3: '7' ,
     choice4: '5'	,
     answer: 3
 },
 {    
    question: 'ECOWAS can be defined as ',
     choice1: 'Economic Community in West African States' ,
     choice2:  'Economic Community of World Advice Safety ',
     choice3: 'Economic Currency of West African States ',
     choice4: 'Economic Command of World Allowance Saving	'	,
     answer: 1
  },
  {   
    question: 'The Aims and Objective of ECOWAS are as follows except',
     choice1: 'Establishment of common custom-tariff and a common commercial policy towards third countries.' ,
     choice2: 'To eliminate the custom duties and other charge in respect of trade among member of the countries ',
     choice3: 'rear of dominion of smaller countries by large countries ',
     choice4: 'To promotes cooperation and development in all fields of industry, social and cultural matters among members nations.',
     answer: 3
  },
  {   
    question: 'These are the rules that must be observed when a police officer is drafting wireless message except ',
     choice1: 'A Full stop shall be written as X ',
     choice2: 'Fraction shall be written in full e.g. Two and Half".',
      choice3: 'The date--Time of Origin (DTO) of a message shall not be inserted until it is intended immediately to dispatch the message to the office. ',
     choice4: 'With, and must be inclusive',
     answer: 4
  },
  {   
    question: 'The various units /section that make up a squadron are as follows except ',
     choice1: 'A minimum of 10 PMF units, each commanded by an ASP or in the absence of an ASP a Junior DSP.',
     choice2: 'An administrative office to be headed by an SPO ',
     choice3: 'An Armory to be headed by an SPO',
     choice4: 'Ten officers from Civil Defense Corps',
     answer: 4
  },
  {   
    question: 'Promotion can be defined as following ',
     choice1: 'Means elevation to a higher rank than the presently held. ',
     choice2: 'An advancement from one spot to another', 
     choice3: 'is the movement from one place to other ',
     choice4: 'The outsource of information from the public.',
     answer: 1
  },
  {   
    question: '……….. means elevation to the higher grade in existing rank ',
     choice1: 'Advancement', 
     choice2: 'Accelerated Promotion ',
     choice3: 'Normal Promotion ',
     choice4: 'Promotion	',
     answer: 1
   },
   {  
    question: 'The orders and instructions of the force issued by the Inspector-General fortnightly for general guidance and information of members of the force is called', 
     choice1: 'Force order ',
     choice2: 'State order ',
     choice3: 'Police Newsletter ',
     choice4: 'Police Magazine',	
     answer: 1
  },
  {   
    question: 'The colour on police warrant cards are as follows except',
     choice1: 'A senior Police officer is endorsed in the right hand side with a white band', 
     choice2: 'A superior police officer is endorsed on the right hand side with a red band',
     choice3: 'An Inspectorate with a blue band',
     choice4: "Non commission officers (NCO's) and other ranks do not carry any coloured band",
     answer: 1
   },
   {  
    question: 'Define N.C.O, in the Nigeria Police Force?',
     choice1: 'Non Commission Officers',
      choice2: 'New Constable Officer',
     choice3: 'Non Corporal Offender ',
     choice4: 'No Capital Offence	',
     answer: 1
  },
  {   
    question: 'Promotion can be defines as***',
     choice1: 'The reason for an outstanding performance' ,
     choice2: 'An officer on increment la salary',
     choice3: 'The elevation to higher grade in confirmation exam',
     choice4: 'Elevation to a higher rank than the presently held',
     answer: 4
   },
   {  
    question: 'The study of parts, care and application of firearms is called? ',
     choice1: 'Fully armed unit',
     choice2: 'An armed men',
     choice3: 'Musketry ',
     choice4: 'Armourer',
     answer: 3
    },
    { 
    question: 'Who is a Police officer?',
     choice1: 'Anybody who can prosecute an offender',
     choice2: 'A police officer is any member of the Nigeria Police force from the rank of a constable to Inspector General of Police',
     choice3: 'A police officer is anybody who can detained and arrest',
     choice4: 'A police officer is anybody who control and regulate traffic',
     answer: 2
     },
     {
    question:'Below are the difference between orderly room trial and summary trial except ',
     choice1: 'Orderly room is held at police station while summary trial is in the court ',
     choice2: 'Orderly room trial offender is called defaulter while summary trial court trial is an accused ',
     choice3: 'Legal counsels is accepted in orderly room trial while summary court trial does not',
      choice4: 'Punishment is laid as in police Acts and Regulations while summary court trial punishment is as laid down in criminal code, penal code and other law books',
      answer: 3
     }
]

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 30;

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