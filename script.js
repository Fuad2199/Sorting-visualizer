const generateBtn = document.getElementById('generate');
const bubbleSortBtn = document.getElementById('bubble-sort');
const arrayContainer = document.getElementById('array-container');

let array = [];

const generateArray = () => {
    array = [];
    for (let i = 0; i < 20; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        array.push(randomValue);
        console.log(`Generated Value [${i}];`, randomValue);
    }
    console.log('Final Array:', array);
    renderArray();
}

const renderArray = () => {
    console.log('Rendering array:', array);
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    });
}

generateBtn.addEventListener('click', generateArray);
generateArray();