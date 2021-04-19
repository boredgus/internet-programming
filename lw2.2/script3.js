const answers = [true, false, true, false, false, true, true],
    questions = [
        "1. HTML is markup language.",
        "2. JavaScript is tool for design.",
        "3. '.css' indicates styles-file extension.",
        "4. You can use 'let' to declare constant value.",
        "5. Javascript is strongly typed programming language.",
        "6. Tag <body> consists elements user can see.",
        "7. JavaScript is most popular language for frontend developing."
    ];
const fullTime = 20;
let timer;
let time = fullTime;
let startTimer = () => {
    time = fullTime;
    timer = setInterval(() => {
        if (document.title >= 1)
            document.title = time--;
        else {
            clearInterval(timer);
            return false;
        }
    }, 1000);
}
function quiz(s, n, m) {
    let result = 0;
    for (let i = 0; i < questions.length; i++) {
        startTimer();
        if (confirm(questions[i] + `\n${time} seconds left`) === answers[i]) {
            clearInterval(timer);
            console.log(+document.title);
            if (+document.title > 0)
                result++;
        }
        console.log(result);
    }
    alert(`${s} ${n} ${m},\nyour result is ${result} of 7.`)
}
window.onload = () => {
    document.querySelector('button#task3').addEventListener('click', () => {
        let surname, name, middleName;
        setTimeout(() => {
            surname = prompt('Type your surname:');
            name = prompt("Type your name:");
            middleName = prompt("Type your middle name:");
            alert("Quiz 'SIMPLE WEB'.\nYou need give answers for 7 questions. ");
            startTimer();
            do {
                quiz(surname, name, middleName);
            } while (confirm("Do you want to play again? :)"));
        }, 1000)

    });
}