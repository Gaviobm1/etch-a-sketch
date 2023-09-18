const container = document.querySelector('.container');
const header = document.querySelector('.header');
const topButton = document.createElement('button');
header.appendChild(topButton);
topButton.textContent = "Click me!"

topButton.addEventListener('click', () => {
    let userInput = prompt('How long do you want the sides to be?');
    if (+userInput > 100) { alert("Please enter number 100 or under"); return userInput};
    let num = +userInput * +userInput; 
    let hold = 400 / userInput;
    deletePad ();
    createDivs(num);
    Array.from(document.getElementsByClassName('boxy'))
    .forEach(function (box) {box.style.setProperty ('--max-height', `${hold}px`) });
    Array.from(document.getElementsByClassName('boxy'))
    .forEach(function (box) {box.style.setProperty ('--min-width', `${hold}px`) });
    Array.from(document.getElementsByClassName('boxy'))
.forEach(function (box) {  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = `#${randomColor()}`;
})});
});




function randomColor () {
    return Math.floor(Math.random()*16777215).toString(16);
    }

function createDivs (num) {

    for(let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add("boxy");
        container.appendChild(box);
    }         
}

function deletePad () {
Array.from(container.childNodes)
.forEach(function (box) { container.removeChild(box) } )
}



