function textBlink(text){
    setInterval(() => {
        if(text.style.visibility == '' || text.style.visibility == 'visible')
            text.style.visibility = 'hidden';
        else text.style.visibility = 'visible';
    }, 1000)
}
textBlink(document.querySelector('.text'));