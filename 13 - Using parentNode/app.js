const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItem = document.getElementById('li');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementByTagName('ul')[0];

    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
})


list.addEventListener("click", (event) => {
    const li = event.target;
    const ul = li.parentNode;
    ul.removeChild(li);
});