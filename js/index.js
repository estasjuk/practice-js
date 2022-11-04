import { getItemTemplate } from "./getItemTemplate.js";
import { items } from "./items.js";

const refs = {
    list: document.querySelector(".list"),
    form: document.querySelector(".form"),
};

const render = () => {
    const lis = items.map(getItemTemplate); //передаємо колл-бек
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML('beforeend', lis.join(""));
};

const addItem = event => {
    event.preventDefault();
    const { value } = event.currentTarget.elements.text;
    const payload = {
        text: value,
        isDone: false,
    };

    event.currentTarget.reset();
    items.push(payload);
    render();
}

render();

refs.form.addEventListener("submit", addItem);



