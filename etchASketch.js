const container = document.querySelector('.container');
const buttCont = document.createElement('div');
const sketchBox = document.createElement('div');
container.appendChild(buttCont);
container.appendChild(sketchBox);
const getButton = document.createElement('button');
const clearButton = document.createElement('button');
const rainMode = document.createElement('button');
buttCont.appendChild(getButton);
buttCont.appendChild(rainMode);
buttCont.appendChild(clearButton);

getButton.textContent = "Shading Mode";
clearButton.textContent = "Clear Sketchpad";
rainMode.textContent ="Rainbow Mode"

sketchBox.classList.add('sketchbox');
getButton.classList.add('getValue');
clearButton.classList.add('clearPad');
rainMode.classList.add('rainMode');
buttCont.classList.add('buttCont');


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

rainMode.addEventListener('click', () => {
    let userInput = prompt('How long do you want the sides to be?');
    if (+userInput > 100) {alert("Please enter number 100 or under"); return userInput};
    if (isNaN(+userInput)) {alert("Please enter a NUMBER"); return userInput};
    let num = +userInput * +userInput; 
    let hold = 500 / userInput;
    deletePad ();
    createRainbow(num);
    Array.from(document.getElementsByClassName('rainy'))
    .forEach(function (box) {box.style.setProperty ('--max-height', `${hold}px`) });
    Array.from(document.getElementsByClassName('rainy'))
    .forEach(function (box) {box.style.setProperty ('--min-width', `${hold}px`) });
    Array.from(document.getElementsByClassName('rainy'))
    .forEach(function (box) {box.addEventListener('mouseover', () => 
        box.style.backgroundColor = `#${randomColor()}`
)});
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

function createRainbow (num) {
    for(let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add("rainy");
        sketchBox.appendChild(box);
}
}

function deletePad () {
Array.from(sketchBox.childNodes)
.forEach(function (box) { sketchBox.removeChild(box) } )
}



