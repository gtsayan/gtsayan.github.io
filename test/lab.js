for (i = 0; i <= 8; i++) {
    document.querySelector('.krestiki_noliki').innerHTML += '<div class="block"></div>';
}
let hod = 0;
document.querySelector('.krestiki_noliki').onclick = function (event) {
    // console.log(event);
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
            event.target.innerHTML = 'X';
        } else {
            event.target.innerHTML = 'O';
        }
        hod++;

        checkWin();
    }

}

function checkWin() {
    let allblock = document.querySelectorAll('.block');
    if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X') alert('Победили крестики!');
    if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X') alert('Победили крестики!');


    if (allblock[0].innerHTML == 'O' && allblock[1].innerHTML == 'O' && allblock[2].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[3].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[5].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[6].innerHTML == 'O' && allblock[7].innerHTML == 'O' && allblock[8].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[0].innerHTML == 'O' && allblock[3].innerHTML == 'O' && allblock[6].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[1].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[7].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[2].innerHTML == 'O' && allblock[5].innerHTML == 'O' && allblock[8].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[0].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[8].innerHTML == 'O') alert('Победили нолики!');
    if (allblock[2].innerHTML == 'O' && allblock[4].innerHTML == 'O' && allblock[6].innerHTML == 'O') alert('Победили нолики!');
};
// let area = new Array(9);