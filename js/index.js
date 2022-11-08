import { getItemTemplate } from "./getItemTemplate.js";
import { items as importedItems } from "./items.js";

let items = importedItems;

const refs = {
    list: document.querySelector(".list"),
    form: document.querySelector(".form"),
};

const render = () => {
    const lis = items.map(getItemTemplate); //передаємо колл-бек
    
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML('beforeend', lis.join(""));
};

const addItem = (value) => {
    
    const payload = {
        id: uuid.v4(),
        text: value,
        isDone: false,
    };

    items.push(payload);
};

const onSubmit = event => {
    const { value } = event.currentTarget.elements.text;
    
    event.preventDefault();
    addItem(value);
    render();
    refs.form.reset();
};

const toggleItem = (id) => {
    items = items.map(item => item.id === id
        ? {
            ...item,
            isDone: !item.isDone,
        }
        : item
    );
    // console.log("toggle", id);
    // console.table(items);
};

const viewItem = (id) => { 
    console.log("view", id);
}

const removeItem = (id) => { 
    items = items.filter(item => item.id !== id);
    render();
    //console.log("remove", id);
}

const onListClick = event => {
    if (event.target === event.currentTarget)
        return;
    const { action } = event.target.dataset;
    const parent = event.target.closest("li");
    const { id } = parent.dataset;

    switch (action) {
        case "toggle":
            toggleItem(id);
            break;
        
        case "view":
            viewItem(id);
            break;
        
        case "remove":
            removeItem(id);
            break;
        
    }
};

render();

refs.form.addEventListener("submit", onSubmit);
refs.list.addEventListener("click", onListClick);



