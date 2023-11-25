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
    //  FINANCIAL REGULATIONS  //
    {
        question: 'Any public officer that meet expenditure under the current estimates for which vouchers cannot be presented to sub accounting officer payment is known as',
    choice1: 'Revenue',
    choice2: 'Tax',
    choice3: 'Imprests',
    choice4: 'Warrant',
    answer: 3
},				
    
    {
        question: '…….. is the permanent secretary of a ministry or head of an extra-ministerial office or arms of government who is in full control responsible for human material and financial resources which are input of the management',
    choice1: 'Committee',
    choice2: 'Government',
    choice3: 'Council',
    choice4: 'Accounting officer',
    answer: 4				
    },
    {
   question: 'Any relation that the unit with installation and maintenance of a proper system of the account subject to the general supervision of accountant general is called',
    choice1: 'Accounting Officer',
    choice2: 'Self-accounting unit',
    choice3: 'Revenue collector' ,
    choice4: 'Officer' ,
    answer: 2				
    }, 
              {         
   question: 'Any officer, who is entrusted with a official receipt, license or ticket booklet for the regular collection of a particular is known as',
    choice1: 'Revenue' ,
    choice2: 'Invoice',
    choice3: 'Warrant' ,
    choice4: 'Collector',
    answer: 1									
    },
    {
   question: 'The personal emolument paid to an employee of an organization usually monthly for the service rendered is called ',
    choice1: 'Salary (F. R. 1501)',
    choice2: 'Allowance (F. R. 1401)',
    choice3: 'Wages (F. R. 1301)',
    choice4: 'Bribe (F. R. 1230)	',
    answer: 1			

    },
    {
   question: 'What is the full meaning of LPC',
    choice1: 'Long pay company ',
    choice2: 'Last pay certificate',
    choice3: 'Long pay cover',
    choice4: 'Last pay cove ', 
    answer: 2			

    },
    {
   question: 'The personnel emolument records shall be issue when an officer is transfer from one state to another under confidential cover is called',
    choice1: 'LPC',
    choice2: 'CPL',
    choice3: 'PLC',
    choice4: 'CLP',
    answer: 1			

    },
    {
   question: 'What is the full meaning of P.A.Y.E' ,
    choice1: 'Pay as you enlisted',
    choice2: 'Pay as you elevated ',
    choice3: 'Pay as you earn',
    choice4: 'Pays you earn',
    answer: 3								
    },
    {
   question: 'What is the full meaning of V.A.T.?',
    choice1: 'Value added tax ',
    choice2: 'Van addition tall' ,
    choice3: 'Value added tour',
    choice4: 'Van added tour ',

    answer: 1			
} ,						
   {
    question: 'What is the full meaning of L. P. V.?',
    choice1: 'Last pay van',
    choice2: 'Last pay voluntee',
    choice3: 'Last passion van',
    choice4: 'Last pay voucher',

    answer: 4			
    },
    {
   question: 'The section of financial regulations that stated the uses of voucher in favour of a person to whom actually mentioned is...',
    choice1: 'F. R. 601',
    choice2: 'FR:301',
    choice3: 'F. R 605',
    choice4: 'F.R 450 '	,

    answer: 1			
    },
    {
   question: 'The preparation of payment of voucher can be found under which financial regulation',
    choice1: 'F.R. 304',
    choice2: 'F.R. 305',
    choice3: 'F.R. 604',
    choice4: 'F.R. 400',

    answer: 3			
    },
    {
   question: "The official statement by the federal government of a country's income from taxes oil revenue is called",
    choice1: 'Accounting',
    choice2: 'National budget',
    choice3: 'Payment',
    choice4: 'loan',

    answer: 2			
    },
    {
   question: 'A distributable pool account in which all revenue collected by the federal government are paid is called',
    choice1: 'Federation Account' ,
    choice2: 'Treasury',
    choice3: 'Budget',
    choice4: 'Payment'	,

    answer: 1			
    },
    {
   question: 'Financial regulation that stated the losses committee shall be under the chairmanship of the representative of the Auditor General ',
    choice1: 'F. R. 1504b',
    choice2: 'F.R. 1604b',
    choice3: 'F. R. 1514b',
    choice4: 'F. R. 1544b',

    answer: 1			
   },
   {
   question: 'Financial authorities are defined as the legal instruments that empower & guide all public officers carrying out government financial transactions under which financial regulation code?',
    choice1: 'F.R. 101',
    choice2: 'F. R. 105',
    choice3: 'F. R. 205',
    choice4: 'F. R. 404 ',

    answer: 1			
    },
    {
   question: 'Who has the responsibility for providing adequate accounting systems and control in the ministries, extra-ministerial offices and other arms of government',
    choice1: 'Chief Controller',
    choice2: 'Accountant General ',
    choice3: 'Accounting Manager',
    choice4: 'Auditor General ',

    answer: 4			
    },
    {
   question: 'The officer responsible under the constitution of the federation for the audit and report on the public account of the federation including all persons and bodies established by law entrusted with the collection receipts, custody, issue or payment of federal republic is',
    choice1: 'Accountant General',
    choice2: 'Auditor General',
    choice3: 'Accounting Officer ',
    choice4: 'Head of Finance'	,

    answer: 4			
    },
    {
   question: 'Which law of the federal republic of Nigeria makes ample provisions for government business Criminal Law ',
    choice2: 'Code of Conduct',
    choice3: '1999 Constitution',
    choice4: 'Criminal Procedure Act.',

    answer: 3			
    },
    {
   question: 'Duties of Accountant General can be found in financial regulation code?',
    choice1: 'F. R: 607',
    choice2: 'F.R. 799',
    choice3: 'F. R. 107',
    choice4: 'F. R. 305' ,

    answer: 3			
    },
    {
   question: 'Who is authorized to write off unserviceable stores according to financial regulation 2609',
    choice1: 'Accounting officer', 
    choice2: 'Auditor general',
    choice3: 'Accountant general',
    choice4: 'Board of directors',

    answer: 1			
    },
    {
   question: 'Below are definition of revenue collectors except?',
   choice1: 'License or ticket booklet for the regular collection of some particular forms of revenue',
    choice2: 'Issuing of an official revenue receipt',
    choice3: 'Keeping of revenue cash book', 
    choice4: "Paying of officer's salaries  ",

    answer: 4			
    },
    {
   question: 'Responsibilities of storekeeper is as follows except one financial regulation 2131',
    choice1: 'Checking, handling and storage of stores received',
    choice2: 'Care of stores',
    choice3: 'Maintenance of stock',
    choice4: 'Issue of vouchers ',

    answer: 4			
    },
    {
   question: 'One month salary advance may be granted to an officer under the following conditions as stated in financial regulation except one:', 
    choice1: 'Officer proceeding on transfer',
    choice2: 'Officers on posting to overseas office',
    choice3: 'offers dismiss from force',
    choice4: 'Officer in first appointment.',

    answer: 3			
    },
    {
   question: 'A cheque shall be accepted by sub-accounting officers and revenue collectors if it contains the below qualities except one:', 
    choice1: 'Correct date',
    choice2: 'The appended of the drawer signature',
    choice3: 'The cheque must be mutilated',
    choice4: 'No alteration', 
    answer: 3			
    },
    {
   question: 'Importance documents used by a revenue collector are as follows except one:', 
    choice1: 'Revenue collector receipt',
    choice2: 'Cheque collector pay-in-form', 
    choice3: 'Collection book',
    choice4: "Revenue collector's cash book ",

    answer: 3			
    },
    {
   question: 'Dishonored cheque contains these information except one financial regulation 733',
    choice1: 'Date',
    choice2: 'Name of drawer',
    choice3: 'Name of claimant',
    choice4: 'Amount',

    answer: 3			
    },
    {
   question: 'Boards of reports will be distributed among the following except financial regulation. 2538',
    choice1: 'Accounting officer of the ministry or head of the extra-ministerial office.',
    choice2: 'Accountant general',
     choice3: 'The chairman of the federal civil service commission',
     choice4: 'The attorney general of the federation',

     answer: 4			
    },
    {
   question: 'A loss of stores, plant, equipment etc may be written off under the personal authority of the accounting officer provided that F. R. 2602',
    choice1: 'There is no apparent weakness in the system of control',
     choice2: 'There is evidence of fraud and theft ',   
    choice3: 'The original cost or estimated value of a unit of each item, whichever is applicable, does not exceed N20,000',
    choice4: 'No negligence is involved.',

    answer: 2			
    },
    {
   question: 'Who is a revenue collector',
    choice1: 'An officer than a sub Accounting officer who is entrusted with an official receipt?',
    choice2: 'An officer constitute a procurement committee', 
    choice3: 'An officer who prosecute offender',
    choice4: 'An officer who vet and audited account.',

    answer: 1			
    },
    {
   question: 'Who has the authority for the disposal of animals financial regulation 2626',
    choice1: 'Veterinary Officer',      
    choice2: 'Zoo manager',
    choice3: 'Senior police officer',
     choice4: 'Pet rearers',

     answer: 1			
    },
    {
   question: 'Below are responsibilities of a stock verifier, financial regulation 2003, except one',
     choice1: 'Maintain a system of continuous verification of all stores, allocated or unallocated',
    choice2: 'Verify store records, such as store ledgers and tally cards',
    choice3: 'Must not be compile and submit periodic reports as prescribe', 		
    choice4: 'Be responsible for price analysis and taking charge of store survey of vehicles and equipment.',

    answer: 2			
    },
    {
   question: 'Accounting officers, shall consult with the Federal ministry of finance in the early stages in the negotiation of a contract under any following situation except one F. R. 2915',
     choice1: 'Where foreign currency exchanges is to be involved',
    choice2: 'Where the price or consideration is to be denominated in a currency other than Naira. ',
    choice3: 'Where the provisions are to specify a substantial programme of differed payment extending beyond the end of the financial year.',
    choice4: 'Where Naira is not counted as a foreign exchange',

    answer: 4			
    },
    {
   question: 'These are features of a standard last pay certificate except one, financial regulation 1514', 
    choice1: 'It will be conveyed to the new pay station by a letter under confidential cover',
    choice2: 'Enclosing also a certified true copy',
    choice3: 'It must show last pay date of payment of salaries',
    choice4: 'It must not show full details of the deduction which have been made and the balance recoverable',

    answer: 4			
    },
    {
   question: 'A ministry supervising a parastatal shall be responsible for below except',
    choice1: 'Drawing up a clear strategic control frame work for their operations.',
    choice2: 'Ensuring that each parastatal does not has sufficient and appropriate management and financial controls to safeguard public funds.',
    choice3: 'Ensuring that where a parastatal is in corporate as a company, consolidated financial accounts are prepared in accordance with generally accepted accounting practice.',
    choice4: 'Ensuring that each parastatal has made suitable arrangement for internal audit function and Control.',

    answer: 2			
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