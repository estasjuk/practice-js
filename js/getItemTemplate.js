export const getItemTemplate = ({id, text, isDone} ) =>
    `<li class="item" data-id="${id}">
   <div>
    <input data-action="toggle" type="checkbox" ${isDone? 'checked' : ""}>
    <span class="text"> ${text}</span>
   </div>
   <div class="buttons">
     <button data-action="view" class="btn" type="button">view</button>
    <button data-action="remove" class="btn danger" type="button">x</button>
  
    </div>
    </li>`;