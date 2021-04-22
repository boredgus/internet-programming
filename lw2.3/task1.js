function showCalendar(year, month, day) {
    let calendarDiv = document.querySelector('.task1 .calendar');
    let now = new Date(year, month - 1, day);
    let dayOfWeek = now.getDay();
    dayOfWeek = (dayOfWeek == 0) ? 7 : dayOfWeek;
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth);
    document.querySelector('.task1 .month').innerHTML = now.toLocaleString('default', {month: 'long'}).toUpperCase() + `, ${year}`;
            
    let calendar = '<table><thead><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead><tbody>';
    for (let i = 2 - dayOfWeek; i <= 43-dayOfWeek; i++) {
        if ((i - 1 + dayOfWeek) % 7 == 1)
            calendar += '<tr>';
        if(i > 0 && i <= daysInMonth){
            calendar += '<td class="active';
            if(i == now.getDate())
                calendar += ' today';
            if((i -1 + dayOfWeek) % 7 == 6 || (i -1 + dayOfWeek) % 7 == 0)
                calendar += ' weekend';
            calendar += '">' + i + '</td>';
        }
        else calendar += '<td></td>';
        if((i - 1 + dayOfWeek) % 7 == 0)
            calendar += '</tr>';            
    }
    calendar += '</tbody></table>';
    calendarDiv.innerHTML = calendar;
}

function showMultiplicationTable(){
    let multiplicationTableDiv = document.querySelector('.task1 .multiplication');
    let table = '<hr><table><tbody>';
    for(let x = 1; x <= 10; x++){
        table += '<tr>';
        for(let y = 1; y <= 10; y++){
            table += '<td';
            if(x == 1 || y == 1)
                table += ' class="cursive"';
            table += `>${x * y}</td>`;            
        }
        table += '</tr>';
    }
    table += '</tbody></table>';
    multiplicationTableDiv.innerHTML = table;
}

window.onload = () => {
    document.querySelector('.task1 .askMYD').onclick = () => {
        let year = prompt('Type year:', '2021');
        let month = prompt('Type month:', '4');
        let day = new Date().getDate().toString();
        showCalendar(year, month, day);
    }
    document.querySelector('.task1 .showTable').onclick = () => showMultiplicationTable();
}