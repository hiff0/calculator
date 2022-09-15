import { addItemEvent, cleanButton, deleteItem, counting } from "./dist/module.js";

const calculate = () => {
    addItemEvent();
    cleanButton();
    deleteItem();
    counting();
}

calculate();