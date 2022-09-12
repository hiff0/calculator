//добавление символов к полю калькулятора
const plusInputValue = (value) => {
    const input = document.body.querySelector('.calculator_field');
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
        const input = document.body.querySelector('.calculator_field');
        input.value = '';
    });
}
//кнопка удаления
const deleteItem = () => {
    const deleteItem = document.body.querySelector('.delete');
    deleteItem.addEventListener('click', () => {
        const input = document.body.querySelector('.calculator_field');
        const inputValue = input.value;
        input.value = inputValue.slice(0, inputValue.length - 1);
    })
}
//событие кнопке =
const counting = () => {
    const equalButton = document.body.querySelector('.equal');
    equalButton.addEventListener('click', () => {
        const input = document.body.querySelector('.calculator_field');
        const inputValue = input.value;
        let index = 0;
        const inputValueSplit = inputValue.split('')
            .reduce((acc, item) => {
                if (item.match(/[0-9]/) || item === '.') {
                    if (acc[index] === undefined) {
                        acc.push(item);
                    } else {
                        acc[index] += item;
                    }
                } else if (item.match(/[)]/)) {
                    acc.push(item);
                    index += 1;
                } else {
                    acc.push(item);
                    index += 2;
                }
                return acc;
            }, [])
        console.log(inputValueSplit);
    })
}

addItemEvent();
cleanButton();
deleteItem();
counting();