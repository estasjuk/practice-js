const refs = {
    input: document.querySelector("input"),
    button: document.querySelector("button"),
}

refs.input.addEventListener("input", onInput);
refs.button.addEventListener("click", onClick);


function onInput(e) { 
    const { value } = e.target;
    console.log("input", value);
};

function onClick(e) { 
    const { value } = e.target;
    console.log("click", value);
};

refs.input.focus();
refs.button.click();