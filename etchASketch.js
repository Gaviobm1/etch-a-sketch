const container = document.querySelector('.container');
const sketchBox = document.createElement('div');
sketchBox.classList.add('sketchbox');
const getButton = document.createElement('button');
container.appendChild(getButton);
getButton.classList.add('getValue');
const clearButton = document.createElement('button');
container.appendChild(clearButton);
clearButton.classList.add('clearPad');
container.appendChild(sketchBox);
getButton.textContent = "Start drawin'";
clearButton.textContent = "Clear Sketchpad";
const heading = document.querySelector('header');
heading.textContent = "Etchin' n' Sketchin'"



getButton.addEventListener('click', () => {
    let userInput = prompt('How long do you want the sides to be?');
    if (+userInput > 100) {alert("Please enter number 100 or under"); return userInput};
    if (isNaN(+userInput)) {alert("Please enter a NUMBER"); return userInput};
    let num = +userInput * +userInput; 
    let hold = 500 / userInput;
    deletePad ();
    createDivs(num);
    Array.from(document.getElementsByClassName('boxy'))
    .forEach(function (box) {box.style.setProperty ('--max-height', `${hold}px`) });
    Array.from(document.getElementsByClassName('boxy'))
    .forEach(function (box) {box.style.setProperty ('--min-width', `${hold}px`) });
    Array.from(document.getElementsByClassName('boxy'))
    .forEach(function (box) {box.addEventListener('mouseover', () => {
        box.style.opacity = (parseFloat(box.style.opacity || 0) + 0.1);
})});
});

clearButton.addEventListener('click', deletePad);



function randomColor () {
    return Math.floor(Math.random()*16777215).toString(16);
    }

function createDivs (num) {

    for(let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add("boxy");
        sketchBox.appendChild(box);
    }         
}

function deletePad () {
Array.from(sketchBox.childNodes)
.forEach(function (box) { sketchBox.removeChild(box) } )
}



