checkNumber = (x) => (x > 0) && (Number.isInteger(x));
function findDenominators(a, b) {
    let divisors = [],
        sum = 0;
    let smaller = (a < b) ? a : b;
    for (let i = 1; i <= smaller; i++) {
        if (((a / i) % 1) === 0 && ((b / i) % 1) === 0 && i % 7 === 0) {
            sum += i;
            divisors.push(i);
        }
    }
    alert(`a=${a}; b=${b}\ndivisors: ${divisors}\nsum=${sum}`);
}
window.onload = function () {
    let a, b, message = "";
    while (true) {
        a = parseInt(prompt(`${message}Type first positive integer number:`));
        if (checkNumber(a)) {
            message = "";
            break;
        }
        message = "Try again. "
    }
    while (true) {
        b = parseInt(prompt(`${message} Type second positive integer number:`));
        if (checkNumber(b)) break;
        message = "Try again. "
    }
    findDenominators(a, b);
}