function showArray(...arr) {
    let result = '';
    arr.forEach((item, index) => {
        result = result.concat(item);
        if(index == arr.length - 2)
            result = result.concat(" and ");
        else if(index == arr.length - 1)
            return;
        else 
            result = result.concat(", ");        
    });
    return result;
}
document.querySelector(".first").innerHTML += `${showArray("one", "two", 'three', "four",  "five", "six", "seven")}<br>
    ${showArray("winter", "summer", 'spring', "autumn")}<br>
    ${showArray("day", "night")}<br>`;