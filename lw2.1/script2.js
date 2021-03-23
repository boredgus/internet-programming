const answers = [true, false, true, false, false, true, true],
    questions = [
        "HTML is markup language.",
        "JavaScript is tool for design.",
        "'.css' indicates styles-file extension.",
        "You can use 'let' to declare constant value.",
        "Javascript is strongly typed programming language.",
        "Tag <body> consists elements user can see.",
        "JavaScript is most popular language for frontend developing."
    ];
function quiz(s, n, m) {
    let result = 0;
    for(let i = 0; i < questions.length; i++) {
        if(confirm(questions[i]) === answers[i])
            result++;
    }
    alert(`${s} ${n} ${m},\nyour result is ${result}/7.`)
}
window.onload = () => {
    let surname, name, middleName, message = "";
    surname = prompt("Type your surname:");
    name = prompt("Type your name:");
    middleName = prompt("Type your middle name:");
    alert("Quiz 'SIMPLE WEB'.\nYou need give answers for 7 questions. ")
    do {
        quiz(surname, name, middleName);
    } while (confirm("Do you want play again? :)"));
}