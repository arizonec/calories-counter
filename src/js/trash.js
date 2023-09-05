// const updateItemsList = () => {
//     itemsList.innerHTML = '';
//     renderItems(data);
// };

// // Слушаем событие storage
// window.addEventListener('storage', (event) => {
//     if (event.key === 'localStorageKey') {
//         // Обновляем данные и перерисовываем список элементов
//         data = JSON.parse(event.newValue);
//         updateItemsList();
//     }
// });

// // Функция для удаления элемента из localStorage
// const removeItemFromLocalStorage = (id) => {
//     const storedData = JSON.parse(localStorage.getItem('localStorageKey'));
//     const updatedData = storedData.filter(item => item.id !== id);
//     localStorage.setItem('localStorageKey', JSON.stringify(updatedData));
// };

// // В вашей функции renderItems() добавьте следующий код после цикла forEach:
// arr.forEach(item => {
//     itemsList.innerHTML += renderItem(item);
// });

// // В вашей функции renderItem() добавьте следующий код перед возвратом:
// const deleteButton = itemElement.querySelector('.delete-button');
// deleteButton.addEventListener('click', () => {
//     removeItemFromLocalStorage(item.id);
// });