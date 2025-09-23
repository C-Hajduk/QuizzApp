let questions = [
    {
        "question": "Wie heißt der Hauptcharakter von 'Naruto'?",
        "answer_1": "Naruto Uzumaki",
        "answer_2": "Sasuke Uchiha",
        "answer_3": "Kakashi Hatake",
        "answer_4": "Gaara",
        "right_answer": 1
    },
    {
        "question": "Welches Pokémon ist als Maskottchen der Serie bekannt?",
        "answer_1": "Charmander",
        "answer_2": "Bulbasaur",
        "answer_3": "Pikachu",
        "answer_4": "Squirtle",
        "right_answer": 3
    },
    {
        "question": "Wie heißt der Shinigami, der Light Yagami das Death Note gibt?",
        "answer_1": "Ryuk",
        "answer_2": "Rem",
        "answer_3": "Near",
        "answer_4": "Misa",
        "right_answer": 1
    },
    {
        "question": "In 'One Piece': Wie heißt der Kapitän der Strohhutbande?",
        "answer_1": "Roronoa Zoro",
        "answer_2": "Monkey D. Luffy",
        "answer_3": "Sanji",
        "answer_4": "Shanks",
        "right_answer": 2
    },
    {
        "question": "Welches Studio produzierte 'Attack on Titan' (Staffel 1–3)?",
        "answer_1": "Madhouse",
        "answer_2": "Toei Animation",
        "answer_3": "Wit Studio",
        "answer_4": "MAPPA",
        "right_answer": 3
    },
    {
        "question": "Wie heißt das Mädchen mit den pinken Haaren in 'Fairy Tail'?",
        "answer_1": "Lucy Heartfilia",
        "answer_2": "Erza Scarlet",
        "answer_3": "Juvia Lockser",
        "answer_4": "Keine von diesen",
        "right_answer": 4
    },
    {
        "question": "In 'Dragon Ball Z': Wer ist der Vater von Son Gohan?",
        "answer_1": "Vegeta",
        "answer_2": "Piccolo",
        "answer_3": "Son Goku",
        "answer_4": "Krillin",
        "right_answer": 3
    },
    {
        "question": "Wie heißt die Stadt, in der 'Tokyo Ghoul' spielt?",
        "answer_1": "Kyoto",
        "answer_2": "Osaka",
        "answer_3": "Tokyo",
        "answer_4": "Nagoya",
        "right_answer": 3
    },
    {
        "question": "Welches Instrument spielt Kaori Miyazono in 'Your Lie in April'?",
        "answer_1": "Violine",
        "answer_2": "Klavier",
        "answer_3": "Cello",
        "answer_4": "Flöte",
        "right_answer": 1
    },
    {
        "question": "Wer ist der Vater von Eren Yeager in 'Attack on Titan'?",
        "answer_1": "Kenny Ackerman",
        "answer_2": "Grisha Yeager",
        "answer_3": "Zeke Yeager",
        "answer_4": "Erwin Smith",
        "right_answer": 2
    },
    {
        "question": "Welcher Charakter trägt die 'Strawhat' in 'One Piece'?",
        "answer_1": "Shanks",
        "answer_2": "Zoro",
        "answer_3": "Monkey D. Luffy",
        "answer_4": "Ace",
        "right_answer": 3
    },
    {
        "question": "Wie lautet der japanische Originaltitel von 'Demon Slayer'?",
        "answer_1": "Kimetsu no Yaiba",
        "answer_2": "Shingeki no Kyojin",
        "answer_3": "Boku no Hero Academia",
        "answer_4": "Bleach",
        "right_answer": 1
    },
    {
        "question": "Wer ist der Hauptcharakter in 'Bleach'?",
        "answer_1": "Renji Abarai",
        "answer_2": "Ichigo Kurosaki",
        "answer_3": "Uryu Ishida",
        "answer_4": "Rukia Kuchiki",
        "right_answer": 2
    },
    {
        "question": "In 'Fullmetal Alchemist': Wie heißt der Bruder von Edward Elric?",
        "answer_1": "Alphonse Elric",
        "answer_2": "Roy Mustang",
        "answer_3": "Greed",
        "answer_4": "Scar",
        "right_answer": 1
    },
    {
        "question": "Wie heißt der erste Titan, den Eren Yeager besiegen konnte?",
        "answer_1": "Der Kolossale Titan",
        "answer_2": "Der Panzer-Titan",
        "answer_3": "Ein namenloser Titan",
        "answer_4": "Der Bestien-Titan",
        "right_answer": 3
    },
    {
        "question": "Wer ist der Autor von 'Dragon Ball'?",
        "answer_1": "Eiichiro Oda",
        "answer_2": "Masashi Kishimoto",
        "answer_3": "Akira Toriyama",
        "answer_4": "Yoshihiro Togashi",
        "right_answer": 3
    },
    {
        "question": "Wie lautet der Kampfspruch von All Might in 'My Hero Academia'?",
        "answer_1": "Detroit Smash!",
        "answer_2": "United States of Smash!",
        "answer_3": "Go Beyond, Plus Ultra!",
        "answer_4": "Alle drei",
        "right_answer": 4
    },
    {
        "question": "Wie heißt der Hauptcharakter in 'Hunter x Hunter'?",
        "answer_1": "Killua Zoldyck",
        "answer_2": "Kurapika",
        "answer_3": "Leorio",
        "answer_4": "Gon Freecss",
        "right_answer": 4
    },
    {
        "question": "Welches Spiel wird in 'Yu-Gi-Oh!' gespielt?",
        "answer_1": "Shogi",
        "answer_2": "Duel Monsters",
        "answer_3": "Go",
        "answer_4": "Magic: The Gathering",
        "right_answer": 2
    },
    {
        "question": "Wer ist der Mörder von Lelouchs Mutter in 'Code Geass'?",
        "answer_1": "Charles zi Britannia",
        "answer_2": "V.V.",
        "answer_3": "Schneizel",
        "answer_4": "Suzaku Kururugi",
        "right_answer": 2
    }
];

let rightQuestion = 0;
let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    }else {
        updateProgressBar();
        upDateToNextQuestion();        
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestion++;
        
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
};

function nextQuestion() {
    currentQuestion++;
    
    document.getElementById('next-button').disabled = true;
    
    resetAnswerButton();
    showQuestion();
};

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
};

function restartGame () {
    document.getElementById("header-image").src = "./img/AnimeQuiz.png";
     document.getElementById("questionBody").style = "";
     document.getElementById("endScreen").style = "display: none";

    rightQuestion = 0;
    currentQuestion = 0;

    init();
}

function showEndScreen () {
    document.getElementById("endScreen").style = '';
    document.getElementById("questionBody").style = 'display: none';    
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfRightQuestion").innerHTML = rightQuestion;
    document.getElementById("header-image").src = './img/Glückwunschkarte.png';
};

function upDateToNextQuestion () {      
    let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById("questionText").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
};

function updateProgressBar() {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById("progress-bar").innerHTML = `${percent} %`;
        document.getElementById("progress-bar").style = `width: ${percent}%`;  
};
