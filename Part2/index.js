let idInput = document.getElementById('idGrab')
let colorInput = document.getElementById('assignStyle')

// console.log(idInput, colorInput)

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    // console.log(card)
}

function reset(){
    let set = document.querySelectorAll('section');
    for (i = 0; i<set.length; i++){
        // let element = document.querySelector('section');
        // let original = getComputedStyle(set[i]);
        // set[i].style.color = original.color;
        set[i].style.color = '';
        // console.log(set[i].style.color);
    }
}