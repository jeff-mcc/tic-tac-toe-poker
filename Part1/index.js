let mt = [];

//run when a player clicks on a square when playing tic-tac-toe
function play(p) {
    let clicked = document.getElementById(`${p}`);
    let xOrO = document.getElementById(`player`);
    if (mt[p] === undefined) {
        mt[p] = xOrO.innerText;
        clicked.innerText = xOrO.innerText;
        xOrO.innerText = xOrO.innerText === 'X' ? 'O' : 'X';

        //checks if a player has won the game
        if (mt[4] !== undefined) {
            if ((mt[4] === mt[5] && mt[4] === mt[3]) || (mt[4] === mt[1] && mt[4] === mt[7]) || (mt[4] === mt[0] && mt[4] === mt[8]) || (mt[4] === mt[2] && mt[4] === mt[6])) {
                window.alert(`Player ${mt[4]} wins!`)
                reset()
            }
        }
        if (mt[0] !== undefined) {
            if ((mt[0] === mt[1] && mt[0] === mt[2]) || (mt[0] === mt[3] && mt[0] === mt[6])) {
                window.alert(`Player ${mt[0]} wins!`)
                reset()
            }
        }
        if (mt[8] !== undefined) {
            if ((mt[8] === mt[6] && mt[8] === mt[7]) || (mt[8] === mt[2] && mt[8] === mt[5])) {
                window.alert(`Player ${mt[8]} wins!`)
                reset()
            }
        }

        //determines when the board is full and alerts 'Cats Game'
        let countund = 0;
        for (let i = 0; i < mt.length; i++) {
            mt[i] !== undefined ? countund++ : '';
        }
        countund = 9 - countund;
        countund === 0 ? window.alert('Cats Game') : '';
    }
}

//run when a player clicks on the reset button or when a player wins the game
function reset() {
    let set = document.querySelectorAll('td');
    for (let i = 0; i < set.length; i++) {
        set[i].innerText = '';
    }
}