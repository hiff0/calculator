const math = require('mathjs');

const getInput = () => {
    const input = document.body.querySelector('.calculator_field');
    return input;
}

const plusInputValue = (value) => {
    let input = getInput();
    input.value += value;
}
//добавление события к кнопкам ввода
const addItemEvent = () => {
    const buttonsItem = document.body.querySelectorAll('.item');
    buttonsItem.forEach((button) => {
        button.addEventListener('click', (event) => {
            const textContent = event.target.textContent;
            plusInputValue(textContent);
        });
    })
}
//очистка поля
const cleanButton = () => {
    const cleanbutton = document.body.querySelector('.clean');
    cleanbutton.addEventListener('click', () => {
        const input = getInput();
        input.value = '';
    });
}
//кнопка удаления
const deleteItem = () => {
    const deleteItem = document.body.querySelector('.delete');
    deleteItem.addEventListener('click', () => {
        const input = getInput();
        const inputValue = input.value;
        input.value = inputValue.slice(0, inputValue.length - 1);
    })
}
//событие кнопке =
const counting = () => {
    const equalButton = document.body.querySelector('.equal');
    equalButton.addEventListener('click', () => {
        const input = getInput();
        const inputValue = input.value;
        input.value = math.evaluate(inputValue);
    })
}

export { addItemEvent, cleanButton, deleteItem, counting };