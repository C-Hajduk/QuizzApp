let questions = [ // Ein Array (Liste) namens "questions" wird angelegt. Es enthält mehrere Objekte (jede Frage ist ein Objekt).
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

let rightQuestion = 0; // Variable: zählt, wie viele Fragen bisher richtig beantwortet wurden (Startwert 0)
let currentQuestion = 0; // Variable: Index der aktuellen Frage im Array (Start bei 0 = erste Frage)


function init() { // Funktion init: wird beim Laden der Seite aufgerufen (body onload="init()")
    document.getElementById("all-questions").innerHTML = questions.length; // Zeigt die Gesamtzahl der Fragen im Element mit ID "all-questions"
    showQuestion(); // Ruft die Funktion auf, die entscheidet, welche Frage angezeigt werden soll
}

function showQuestion() { // Funktion, die steuert, ob das Spiel weitergeht oder beendet ist
    if (gameIsOver()) { // Fragt: "Sind wir schon alle Fragen durch?"
        showEndScreen(); // Wenn ja, zeige den Endbildschirm
    }else { // Wenn noch Fragen übrig sind:
        updateProgressBar(); // Aktualisiere den Fortschrittsbalken (visuell)
        upDateToNextQuestion(); // Lade die aktuelle Frage und die Antworten in die Seite         
    }
}

function gameIsOver() { // Funktion prüft, ob das Spiel vorbei ist
    return currentQuestion >= questions.length; // true, wenn currentQuestion (Index) größer-gleich Anzahl Fragen ist
}

function answer(selection) { // Wird aufgerufen, wenn eine Antwortkarte angeklickt wurde; selection z.B. "answer_1"
    let question = questions[currentQuestion]; // Holt das aktuelle Frage-Objekt aus dem Array
    let selectedQuestionNumber = selection.slice(-1); // Nimmt das letzte Zeichen von "answer_1" -> "1" (als String)
    let idOfRightAnswer = `answer_${question['right_answer']}`; // Baut die ID der richtigen Antwort zusammen, z.B. "answer_3"
    
    if (selectedQuestionNumber == question['right_answer']) { // Prüft: stimmt die Auswahl mit der richtigen Antwort überein?
        document.getElementById(selection).parentNode.classList.add('bg-success'); // Bei richtig: ganze Antwortkarte grün machen
        rightQuestion++; // Zähler für richtige Antworten um 1 erhöhen        
    }else { // Wenn falsch geantwortet wurde:
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // Gewählte Karte rot färben
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // Richtige Karte zusätzlich grün markieren
    }
    document.getElementById('next-button').disabled = false; // Aktiviert den Next-Button, damit man zur nächsten Frage kann
};

function nextQuestion() { // Funktion für den Next-Button
    currentQuestion++; // Gehe zur nächsten Frage (Index um 1 erhöhen)
    
    document.getElementById('next-button').disabled = true; // Deaktiviere wieder den Next-Button (bis zur nächsten Antwortwahl)
    
    resetAnswerButton(); // Entfernt die Farben (rot/grün) von den Antwortkarten
    showQuestion(); // Zeigt nun die neue Frage (oder Endscreen, falls keine mehr vorhanden)
};

function resetAnswerButton() { // Entfernt Status-Klassen von allen Antwortkarten — damit sie neutral aussehen
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger'); // Entfernt roten Hintergrund von Antwort 1
    document.getElementById('answer_1').parentNode.classList.remove('bg-success'); // Entfernt grünen Hintergrund von Antwort 1
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
};

function restartGame () { // Setzt das Spiel komplett zurück und startet neu
    document.getElementById("header-image").src = "./img/AnimeQuiz.png"; // Setzt das Kopf-Bild zurück auf das Quiz-Bild
     document.getElementById("questionBody").style = ""; // Zeigt den Fragebereich wieder (entfernt evtl. display:none)
     document.getElementById("endScreen").style = "display: none"; // Versteckt den Endscreen-Bereich

    rightQuestion = 0; // Setzt den richtigen-Antworten-Zähler zurück auf 0
    currentQuestion = 0; // Setzt die aktuelle Frage zurück auf die erste (Index 0)

    init(); // Startet die Anzeige neu (zeigt Frage 1 usw.)
}

function showEndScreen () { // Zeigt den Bildschirm, wenn das Quiz vorbei ist
    document.getElementById("endScreen").style = ''; // Endscreen sichtbar machen (leere Style bedeutet Standard anzeigen)
    document.getElementById("questionBody").style = 'display: none'; // Fragebereich ausblenden    
    document.getElementById("amountOfQuestions").innerHTML = questions.length; // Zeigt Gesamtzahl der Fragen an
    document.getElementById("amountOfRightQuestion").innerHTML = rightQuestion; // Zeigt, wie viele Antworten richtig waren
    document.getElementById("header-image").src = './img/Glückwunschkarte.png'; // Ändert das Bild zum "Glückwunsch"-Bild
};

function upDateToNextQuestion () { // (kleiner Tipp: Name "upDateToNextQuestion" enthält ein großes D, das ist nur Namenswahl)       
    let question = questions[currentQuestion]; // Holt das aktuelle Frage-Objekt erneut

        document.getElementById('question-number').innerHTML = currentQuestion + 1; // Zeigt die menschlichere Zahl (1 statt 0) an
        document.getElementById("questionText").innerHTML = question["question"]; // Setzt den Fragetext in die Seite
        document.getElementById("answer_1").innerHTML = question["answer_1"]; // Setzt Text für Antwort 1
        document.getElementById("answer_2").innerHTML = question["answer_2"]; // Setzt Text für Antwort 2
        document.getElementById("answer_3").innerHTML = question["answer_3"]; // Setzt Text für Antwort 3
        document.getElementById("answer_4").innerHTML = question["answer_4"]; // Setzt Text für Antwort 4
};

function updateProgressBar() { // Berechnet und zeigt den Fortschritt im Balken
        let percent = (currentQuestion + 1) / questions.length; // Anteil berechnen: z.B. 1/20, 2/20, ...
        percent = Math.round(percent * 100); // Multipliziert mit 100 und rundet auf ganze Prozentzahl
        document.getElementById("progress-bar").innerHTML = `${percent} %`; // Setzt den Text im Balken, z.B. "5 %"
        document.getElementById("progress-bar").style = `width: ${percent}%`; // Setzt die Breite des Balkens visuell (z.B. width: 5%)  
};
