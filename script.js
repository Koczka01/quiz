let file;
let questions;
let num
let elso = document.getElementById('elso');
let masodik = document.getElementById('masodik');
let harmadik = document.getElementById('harmadik');
let negyedik = document.getElementById('negyedik');

async function start() {
    file = await fetch("quiz.json")
    questions = await file.json()
    kerdes = document.getElementById('kerdes');
    kerdes.style.display = "block";
    elso.style.display = "inline";
    masodik.style.display = "inline";
    harmadik.style.display = "inline";
    negyedik.style.display = "inline";
    document.getElementById("otodik").style.display = "none";
    newquestion();
}

let t = [];
let answers = [];
let correct = 0;
let current = 0;
let kovetkezo = document.getElementById("kovetkezo");
let vissza = document.getElementById("vissza");
let hatodik = document.getElementById("hatodik");
color = [elso, masodik, harmadik, negyedik];

function first() {
    hatodik.style.display = "none";
    kerdes.style.display = "block";
    elso.style.display = "inline";
    masodik.style.display = "inline";
    harmadik.style.display = "inline";
    negyedik.style.display = "inline";
    if (t.length > 1) {
        kovetkezo.style.display = "block";
    }
    elso.disabled = true;
    masodik.disabled = true;
    harmadik.disabled = true;
    negyedik.disabled = true;
    color = [elso, masodik, harmadik, negyedik]
    kerdes.innerText = t[current].question;
    elso.innerText = t[current].options[0];
    masodik.innerText = t[current].options[1];
    harmadik.innerText = t[current].options[2];
    negyedik.innerText = t[current].options[3];
    color[answers[current]].style.backgroundColor = "red";
    color[t[current].correct - 1].style.backgroundColor = "green";
}

function questionout(numer) {
    color[answers[current]].style.backgroundColor = "#e4e4e4";
    color[t[current].correct - 1].style.backgroundColor = "#e4e4e4";
    current += numer;
    if (current > 0) {
        vissza.style.display = "inline";
    }
    else {
        vissza.style.display = "none";
    }
    if (current == t.length - 1) {
        kovetkezo.style.display = "none"
    }
    else {
        kovetkezo.style.display = "inline"
    }
    kerdes.innerText = t[current].question;
    elso.innerText = t[current].options[0];
    masodik.innerText = t[current].options[1];
    harmadik.innerText = t[current].options[2];
    negyedik.innerText = t[current].options[3];
    color[answers[current]].style.backgroundColor = "red";
    color[t[current].correct - 1].style.backgroundColor = "green";
}

function newquestion() {
    num = Math.floor(Math.random() * questions.questions.length);
    t.push(questions.questions[num]);
    kerdes.innerText = questions.questions[num].question;
    elso.innerText = questions.questions[num].options[0];
    masodik.innerText = questions.questions[num].options[1];
    harmadik.innerText = questions.questions[num].options[2];
    negyedik.innerText = questions.questions[num].options[3];
    questions.questions.splice(num, 1);
}

function results() {
    document.getElementById("results").innerText = `Elért pontszám: ${correct}/20`
    document.getElementById("hatodik").style.display = "inline";
    kerdes.style.display = "none";
    elso.style.display = "none";
    masodik.style.display = "none";
    harmadik.style.display = "none";
    negyedik.style.display = "none";
}
function answercheck(number) {
    if (t[t.length - 1].correct == number) {
        correct += 1;
    }
    answers.push(number - 1);
    if (t.length < 20) {
        newquestion();
    }
    else {
        results();
    }
}