window.onload = function () {
    let text = [];
    let buttonsObj = document.querySelectorAll('.keyboard-wrapper button');
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 8) {
            text.pop();
        } else if (event.keyCode == 32) {
            text.push(' ');
        } else if (event.keyCode == 9) {
            text.push('&nbsp');
        } else if (event.keyCode == 13) {
            text.push('<br>');
        } else if (event.keyCode == 20) {
            text.push('');
        } else if (event.code == 'ShiftLeft') {
            document.getElementById('shiftl').style.backgroundColor = "rgb(205, 234, 240)";
            text.push('');
        } else if (event.code == 'ShiftRight') {
            document.getElementById('shiftr').style.backgroundColor = "rgb(205, 234, 240)";
            text.push('');
        } else {
            text.push(event.key);
        }
        document.querySelector('#show').innerHTML = text.join('');
        for (i = 0; i < buttonsObj.length; i++) {
            if (buttonsObj[i].innerText.toUpperCase() == event.key.toUpperCase() && event.keyCode !=16) {
                buttonsObj[i].style.backgroundColor = "rgb(205, 234, 240)";
            }
        }
    });

    document.querySelector('.keyboard-wrapper').addEventListener('keyup', function (event) {
        for (i = 0; i < buttonsObj.length; i++) {
            buttonsObj[i].style.backgroundColor = "";
        }
    });
}












