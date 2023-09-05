import '../index.html';
import '../assets/styles/style.scss';
import dataItems from '../js/itemsData';
import variables from './variables';

let data = [...dataItems]

const { itemsList, addName, removeItem, clearButton, addValue, submitButton } = variables;

const renderItem = ({ id, title, value }) => {
    const html = data.map(item =>
        `
    <div class="item" data-id="${item.id}">
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
                        <div class="item__title">${item.title}</div>
                        <div class="item__calories">${item.value} ккл</div>
                        <div class="item__remove">
                            <button class="remove-item"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
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
    )

    itemsList.insertAdjacentHTML('beforeend', html);
}

const createItem = () => {
    const name = addName.value;
    const value = Number(addValue.value);
    const id = data.length + 1;

    const newItem = {
        id: id,
        title: name,
        value: value,
    }

    data = [...data, newItem];

    itemsList.innerHTML += renderItem(newItem);
}

const deleteItem = ({ target }) => {
    const elem = target;

    if (target.classList.contains('item__remove')) {
        const parent = elem.closest('.item');
        let dataFiltered = data.filter(item => parent.dataset.id !== item.id)

        renderItem(dataFiltered);
    }
}

submitButton.addEventListener('click', createItem);
itemsList.addEventListener('click', deleteItem);


renderItem(data);