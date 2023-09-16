import '../index.html';
import '../assets/styles/style.css';
import variables from './variables';

const { itemsList, addName, bar, edit, chartBar, chartGoal, chartValue, goal, clearAll, total, removeItem, search, clearButton, addValue, submitButton, sortByCalories } = variables;

const array = [];
const data = [];
const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
if (localStorageData !== null) {
    localStorageData.forEach((item) => data.push({
        name: item.title,
        cal: item.value,
    }))
}

const renderItems = () => {
    // const localStorageData = Object.values(localStorage).map(item => JSON.parse(item));
    if (localStorage.length === 0) {
        localStorage.setItem('arrayCalories', JSON.stringify(array));
    } else {
        const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
        itemsList.innerHTML = '';
        localStorageData.forEach(item => {
            itemsList.innerHTML += renderItem(item);
        });
    }
};
const renderItem = ({ id, title, value }) => {
    return `
    <div class="item" data-id="${id}">
                        <div class="item__img">
                            <svg fill="#ffffff" height="800px" width="800px" version="1.1" id="Icons"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32" xml:space="preserve" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M5.9,18l1.2,2.4C7.3,20.8,7.6,21,8,21h17c0.4,0,0.7-0.2,0.9-0.6l1.2-2.4H5.9z" />
                                        <path
                                            d="M4,17h1.4h22.2H29c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1c-0.2-5.3-4.1-9.7-9.1-10.8C18.9,4,19,3.8,19,3.5C19,2.1,17.9,1,16.5,1 S14,2.1,14,3.5c0,0.3,0.1,0.5,0.1,0.7C9.1,5.3,5.3,9.7,5,15H4c-0.6,0-1,0.4-1,1S3.4,17,4,17z" />
                                    </g>
                                    <path
                                        d="M24.6,22.3C24.5,22.1,24.2,22,24,22c-0.4,0-0.7,0-1.1,0.1l-1.1,1.5C20.7,25.1,18.9,26,17,26h0h-0.3H16h-1.3H14 c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.3-0.3,0.5-0.8,0.5-1.3c0,0,0-0.1,0-0.1c0-0.4-0.3-0.6-0.7-0.6h-4c-2.4,0-4.3,1.1-5.4,2.8 l-1.8,2.8c-0.1,0.2-0.1,0.5,0,0.7l2,3.3c0.1,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4-0.1c2.5-1.7,5.5-2.6,8.5-2.6 c2.2,0,4.2-1.2,5.2-3.1l1.8-3.2C24.7,22.8,24.7,22.5,24.6,22.3z" />
                                </g>
                            </svg>
                        </div>
                        <div class="item__title">${title}</div>
                        <div class="item__calories">${value} ккл</div>
                        <div class="item__remove">
                            <button class="remove-item"><svg class="remove-svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M20.5001 6H3.5" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round" />
                                        <path
                                            d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
                                        <path
                                            d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                                            stroke="#ffffff" stroke-width="1.5" />
                                    </g>
                                </svg></button>
                        </div>
                    </div>`
}

const createItem = () => {

    if (goal.innerHTML != 0) {
        const name = addName.value;
        const value = Number(addValue.value);
        const id = Date.now();
        //Вообще не самый лучший способ задания id, но думаю, что в этой задаче его достаточно, а так бы можно было использовать либу uuid!

        if (name.length === 0) {
            alert('Введите название продукта!')
        } else {
            const newItem = {
                id: id,
                title: name,
                value: value,
            }

            const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
            localStorageData.push(newItem);

            localStorage.setItem('arrayCalories', JSON.stringify(localStorageData));
            itemsList.innerHTML += renderItem(newItem);
            caloriesCount();

            data.push({
                name: name,
                cal: value,
            })
            drawChart();
            console.log(data)
        }
    } else {
        alert('Установите цель!')
    }
}

const deleteItem = ({ target }) => {
    const elem = target;

    if (target.classList.contains('remove-svg')) {
        const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
        const parent = elem.closest('.item');

        const deleted = localStorageData.filter((item) => Number(parent.dataset.id) !== item.id);

        localStorage.setItem('arrayCalories', JSON.stringify(deleted));
        renderItems();
    }

    caloriesCount();
    countPercent();
}


const byCalories = () => {
    const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
    const sortedData = localStorageData.sort((a, b) => a.value - b.value);
    itemsList.innerHTML = '';
    sortedData.forEach(item => {
        itemsList.innerHTML += renderItem(item);
    });
};

const searchByName = () => {
    const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
    const filteredData = localStorageData.filter(item => item.title.toLowerCase().slice(0, search.value.length) === search.value.toLowerCase());
    itemsList.innerHTML = '';
    filteredData.forEach(item => {
        itemsList.innerHTML += renderItem(item);
    });
}

const clearList = () => {
    itemsList.innerHTML = '';
    localStorage.clear();
    localStorage.setItem('arrayCalories', JSON.stringify([]));
    localStorage.setItem('inputValue', 0);
    localStorage.setItem('totalValue', 0);
    localStorage.setItem('percent', 0);
    bar.style.width = `0%`;
    chartGoal.innerHTML = 0;
    chartValue.innerHTML = 0;
    total.innerHTML = `Всего калорий: 0`;
    chartBar.textContent = `0%`;
}

const caloriesCount = () => {
    const localStorageData = JSON.parse(localStorage.getItem('arrayCalories'));
    const totalValue = localStorageData.reduce((sum, item) => sum += item.value, 0);
    localStorage.setItem('totalValue', totalValue);
    total.innerHTML = `Всего калорий: ${totalValue}`;
    chartValue.innerHTML = `${totalValue}`;
    countPercent()
}

// const setGoal = () => {
//     const input = `<input type="number" class="edit-input"></input>`;
//     goal.innerHTML = input;
//     const newInput = document.querySelector('.edit-input');

//     newInput.addEventListener('keyup', () => {
//         localStorage.setItem('inputValue', newInput.value);
//     });
//     edit.innerHTML = `<button type='submit' class='set-goal'>Сохранить!</button>`;
// }

const setGoal = () => {
    const oldButton = edit;
    const oldGoal = goal.innerHTML;
    goal.innerHTML = '';
    const input = document.createElement('input');
    input.value = oldGoal;
    input.classList.add('edit-input');
    goal.append(input);
    edit.style.display = 'none';

    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Сохранить!';
    saveButton.classList.add('set-goal');
    goal.append(saveButton);



    const newInput = document.querySelector('.edit-input');
    newInput.addEventListener('keyup', () => {
        localStorage.setItem('inputValue', newInput.value);
        chartGoal.innerHTML = `${newInput.value}`;
    });

    saveButton.addEventListener('click', (e) => {
        edit.style.display = 'block';
        saveButton.remove();
        goal.innerHTML = JSON.parse(localStorage.getItem('inputValue'));
        input.innerHTML = `<div class="info__edit"><button class="set-goal">Сохранить!</button></div>`
    });


    // const setButton = document.querySelector('.set-goal');

    // setButton.addEventListener('click', (e) => {
    //     goal.innerHTML = JSON.parse(localStorage.getItem('inputValue'));
    //     input.innerHTML = `<div class="info__edit"><button class="set-goal">Сохранить!</button></div>`
    // });
}

// const setGoal = () => {
//     const oldGoal = goal.innerHTML;
//     goal.innerHTML = '';
//     const input = document.createElement('input');
//     input.value = oldGoal;
//     goal.prepend(input);
//     input.classList.add('edit-input');

//     const newInput = document.querySelector('.edit-input');

//     newInput.addEventListener('keyup', () => {
//         localStorage.setItem('inputValue', newInput.value);
//         chartGoal.innerHTML = `${newInput.value}`;
//     });

//     edit.innerHTML = `<button class='set-goal'>Сохранить!</button>`;

//     const setButton = document.querySelector('.set-goal');

//     setButton.addEventListener('click', (e) => {

//         goal.innerHTML = JSON.parse(localStorage.getItem('inputValue'));
//         input.innerHTML = `<div class="info__edit"><button class="set-goal">Сохранить!</button></div>`
//     });
// }

const countPercent = () => {
    const start = JSON.parse(localStorage.getItem('totalValue'));
    const end = JSON.parse(localStorage.getItem('inputValue'));

    let percent = 100 + ((start - end) / end * 100);
    if (isFinite(percent)) {
        localStorage.setItem('percent', percent.toFixed(2));
    }

    chartBar.textContent = `${JSON.parse(localStorage.getItem('percent'))}%`;
    bar.style.width = `${JSON.parse(localStorage.getItem('percent'))}%`;
}

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const chartWidth = 60;
const chartHeight = 300;
const barWidth = chartWidth / data.length;
const barSpacing = 40;
const maxValue = Math.max(...data.map((item) => item.cal));

// Function to draw a single bar
function drawBar(x, height, name) {
    const barX = x * (barWidth + barSpacing);
    const barY = chartHeight - height * (chartHeight / maxValue);

    ctx.fillStyle = 'purple';
    ctx.fillRect(barX + 20, barY, barWidth, height * (chartHeight / maxValue));

    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(height + ` kk`, barX + barWidth / 2 + 20, chartHeight + 20);
    ctx.fillText(name, barX + barWidth / 2 + 20, chartHeight + 40);
}


function drawChart() {
    ctx.clearRect(0, 0, chartWidth, chartHeight);

    data.forEach((value, index) => {
        drawBar(index, value.cal, value.name);
    });
}

submitButton.addEventListener('click', createItem);
itemsList.addEventListener('click', deleteItem);
sortByCalories.addEventListener('click', byCalories);
search.addEventListener('keyup', searchByName);
clearAll.addEventListener('click', clearList);
edit.addEventListener('click', setGoal);
document.addEventListener('DOMContentLoaded', () => {
    const value = JSON.parse(localStorage.getItem('totalValue'));
    total.innerHTML = `Всего калорий: ${value}`;
    chartValue.innerHTML = `${value}`;
    const inputValue = JSON.parse(localStorage.getItem('inputValue'));
    goal.innerHTML = `${inputValue}`;
    chartGoal.innerHTML = `${inputValue}`;
    bar.style.width = `${JSON.parse(localStorage.getItem('percent'))}%`;
    chartBar.textContent = `${JSON.parse(localStorage.getItem('percent'))}%`;
    drawChart();
})


renderItems();