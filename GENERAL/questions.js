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
    //  GENERAL PAPER   //
    {
        question: 'ECOWAS was formed by how many countries',
         choice1: '18 Countries', 
         choice2: '15 Countries',
         choice3: '16 Countries',
         choice4: '14 Countries',	
         answer: 	3
         },{
        question: 'NEPAD is the partnership for African Development which was form in what year?',
         choice1: '11 July, 2001',
         choice2: '10th June, 2001 ',
         choice3: '11th June, 2001',
         choice4: '12 July, 2001	',	
         answer: 	1
         },{
        question: 'GSM means Global System for Mobile communication which was introduce/launched in Nigeria in which year?',
         choice1: '2003', 
         choice2: '2002',
         choice3: '2001',
          choice4: '2000',	
          answer: 	3
         },{
        question: 'The total ways of life of people including their materials products is called',
         choice1: 'Fax', 
         choice2: 'Races',
         choice3: 'Culture',
          choice4: 'Sars',	
          answer: 	3
         },{
        question: 'The staff of office of Senate President. The speaker of House of Representatives, Speaker of state of Assembly and leader of local government called',
         choice1: 'Walking stick',
         choice2: 'Mase',
         choice3: 'Mace',
          choice4: 'Maize',	
          answer: 	3
         },{
        question: 'The election where people vote for a policy rather than candidate is called',
         choice1: 'Secondary election',
         choice2: 'Election',
         choice3: 'Referendum' ,
         choice4: 'Sars',	
         answer: 	3
         },{
        question: 'An election, conducted by electoral body for a certain area in the country when candidate died lost his/her mandate is called',
         choice1: 'Electoral College ',
         choice2: 'Bye-Election-',
         choice3: 'Election Unit ',
         choice4: 'Polling Boot	',
         answer: 2
     },{
        question: 'What is the correct abbreviation for: Existing State of Affair',
         choice1: 'Statuo quo',
          choice2: 'ASE', 
         choice3: 'ESA',
         choice4: 'SAE',		
         answer: 1
         },{
        question: 'What is the correct abbreviation for; At Back Cover?',
         choice1: 'CAB', 
         choice2: 'ABC',
         choice3: 'BCA',
         choice4: 'BAC',	
         answer: 2		
         },{
        question: 'How can we give abbreviation to these meaning words of "for information only ',
         choice1: 'LO.F',
         choice2: 'FLO',
         choice3: 'O.F.I',
         choice4: 'F.0.1',	
         answer: 2	
         },{
        question: ' What is the abbreviation for these words "with reference to" ',
         choice1: 'T.R.W',
          choice2: 'W.RT',
         choice3: 'RW.',
         choice4: 'T.W.R',	
         answer: 2
             },{
        question: "The disaster that cause a total wave occurred as a result of earthquake at Sumatra in west coast of the Indonesian's island is called",
         choice1: 'Budget',
         choice2: 'Earthquake',
         choice3: 'Riot',
         choice4: 'Tsunamis',	
         answer: 4	
         },{
        question: 'The concept given to same public officers that they cannot be tried or prosecuted for their action or inaction while in the office is call',
         choice1: 'Promotion',
         choice2: 'Alleviation',
         choice3: 'Immunity', 
         choice4: 'Diplomacy', 
         answer: 3				
         },{
        question: 'Among the under listed countries which among them with Nigeria is a member of the OPEC?',
         choice1: 'Libya', 
         choice2: 'USA',
         choice3: 'Togo',
          choice4: 'India',		
          answer: 1
        },{ 
        question: 'There are seven continents in the world, choose from the lists below the correct answer of some of the continents?',
         choice1: 'india, Ukraine, Middle East, Nigeria, and Dubai', 
         choice2: 'New Jersey, New York, Atlanta, Ohio, and Los Angeles',
         choice3: 'Soutit America, Europe, Asia, Africa, North America', 			
         choice4: 'Ikeja, Badagry, Epe, Mushin, and Lagos Island	',	
         answer: 3
        },{ 
        question: 'What is the full meaning of ECOWAS? ',
         choice1: 'Economic Community of West African States',
         choice2: 'Economic Community of West American State	',	
         choice3: 'Economic Communication of West African States ',
         choice4: 'Economic Communication of West Asian States',	
         answer: 1
        },
        { 
        question: 'Organization of African Unity (OAU) was recently renamed after 38 years of existence, what it the new name?',
         choice1: 'African, Uniform',
         choice2: 'African Union',
         choice3: 'African United', 
         choice4: 'African Utility',		
         answer: 2
         },
         {
        question: 'Among ECOWAS member countries are?',
         choice1: 'Benin, Turkey, Italy, France',
         choice2: 'Nigeria, south America, Europe, France', 
         choice3: 'Liberia, Ghana, Nigeria, Togo ',
         choice4: 'Guinea, Libya, Niger, Egypt',	
         answer: 3	
        },
         { 
        question: 'One of following is a means of communication in Nigeria?',
         choice1: 'Telephone',
         choice2: 'Wire service',
         choice3: 'Transportation',
         choice4: 'Pencil',
         answer: 1
         },
         {
        question: "Who was the Nigeria's Airforce first female pilot who died in the year 2020?",
         choice1: 'Aminu Kudirat', 
         choice2: 'Oludare Demola',
          choice3: 'Tolulope Arotile',
         choice4: 'Tolulope Ajayi',
         answer: 3
         },
         {
        question: 'One of these is a symptoms of COVID-19',
          choice1: 'Smoke and sleeping',
          choice2: 'Cough and loss of taste or smell ',
         choice3: 'Headache and eating',
         choice4: 'Beating and coughing',
         answer: 2
         },
         {
        question: 'When a person is said to be ASYMTTOMATIC what does it mean?',
         choice1: 'Thinking right always ',
         choice2: 'Sleeping always',
         choice3: 'A person producing or no symptoms',
         choice4: 'A person with a symptoms',
         answer: 3
         },
         {
        question: 'All except one are the organs of UNO',
         choice1: 'Inadequate government ',
         choice2: 'International court of justice',
         choice3: 'The security council',
         choice4: 'Economic and social council',
         answer: 1
     
         },
         {
        question: 'Pick among the following the political units in Nigeria',
         choice1: 'Nigeria political system',
         choice2: 'The Nation, Senatorial districts, federal constituency and local government',
         choice3: 'Democratic district', 
         choice4: 'Political units',	
     
         answer: 2
         },
         {
        question: 'Following is a list of countries among the 5 oil producing countries that are not members of OPEC?',
         choice1: 'London, Dubai, Italy', 
         choice2: 'London, Usa, Uk',
         choice3: 'Russia, Uk, Mexico, Gabon, Norway', 
         choice4: 'Nigeria, Libya, Cameroon, Dubai',	
         answer: 3	
         },
         {
        question: 'The Police Staff College Jos was established in which year?',
         choice1: 'October 1970',
          choice2: 'October 1976',
         choice3: 'September 1958', 
         choice4: 'June 1960',
     
         answer: 2
         },
         {
        question: 'The protest tagged "ENDSARS" in Nigeria started when?',
         choice1: '28 October 2020 ',
         choice2: '18th October 2020 ',
         choice3: '11th October 2020',
         choice4: '9 October 2020',
     
         answer: 3
         },
         {
        question: 'When was the protest. "ENDSARS" ended?',
         choice1: '27 October 2020',
         choice2: '20 October 2020',
         choice3: '18October 2020',
         choice4: '30 October 2020',
     
         answer: 2
        },
        {
        question: 'When was the corona virus discovered in Nigeria?',
         choice1: '10th January 2020',
         choice2: '27th March 2020',
         choice3: '13th March 2020',
         choice4: '27 February 2020',  
         answer: 4
         },
         {
        question: 'In which year was Nigeria Police force uniform changed to black?',
         choice1: '20 May 2006', 
         choice2: '17 June 1988',
         choice3: '28 November 1996',
         choice4: '4 April 1988',	
         answer: 4		
         },
         {
        question: 'The following are impeachable offences except?',
         choice1: 'Misconduct', 
         choice2: 'Corruption',
         choice3: 'Falsification',
         choice4: 'Punctuality at office',
     
         answer: 4
         },
         {
        question: 'What is the full meaning of FIRS?',
         choice1: 'Federal International Resource Service',
         choice2: 'First Independent Republic School',
         choice3: 'Federal Inland Revenue Service', 
         choice4: 'Fire Incorporation Revenue Service',
     
         answer: 3
         },
         {
        question: 'What is the meaning of PENCOM?',
         choice1: 'Police Education National Commission', 
         choice2: 'Nation Pension Commission',
         choice3: "People's Pension Commission",
         choice4: 'Pension Communication Center',
     
         answer: 2
         },
         {
        question: 'What is the full meaning of ITF?',
         choice1: 'International Trust Fund',
         choice2: 'Internal Teaching Forum',
         choice3: 'Industrial Training Fund',
         choice4: 'Independent Trust Fund',
     
         answer: 3
         }
]




//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 34;

startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions];
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