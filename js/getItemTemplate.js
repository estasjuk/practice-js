export const getItemTemplate = ({text, isDone} ) =>
    `<li class="item">
   
    <input type="checkbox" ${isDone? 'checked' : ""}>
    <span class="text"> ${text}</span>
   
    <button type="button">x</button>
</li>`;