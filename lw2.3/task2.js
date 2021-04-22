function showTime() {
    let now = new Date();
    let h = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours();
    let m = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    let s = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();
    let status = `${h} : ${m} : ${s}`;
    document.querySelector('.task2 .time').innerHTML = status;
}
let sum = (a, b) => a + b;
let div = (a, b) => a - b;
let multi = (a, b) => a * b;
function showResults() {
    let functionTaskDiv = document.querySelector('.task2 .functionTask');
    let table = '<hr><table><thead><th>a</th><th>b</th><th>a+b</th><th>a-b</th><th>a*b</th></thead><tbody>';
    for(let i = 1; i < 5; i++){
        let a = Math.round(Math.random() * 10);
        let b = Math.round(Math.random() * 10);
        table += '<tr>';
        table += `<td${(a >= 5? ' class="higher"': '')}>${a}</td>
            <td${(b >= 5? ' class="higher"': '')}>${b}</td>
            <td${(a+b >= 5? ' class="higher"': '')}>${a+b}</td>
            <td${(a-b >= 5? ' class="higher"': '')}>${a-b}</td>
            <td${(a*b >= 5? ' class="higher"': '')}>${a*b}</td>`
        table += '</tr>';
    }
    table += '</tbody></table>';
    console.log(functionTaskDiv)
    functionTaskDiv.innerHTML = table;
}
window.onload = () => {
    setInterval(showTime, 250);
    showResults();
}