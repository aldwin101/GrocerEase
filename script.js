const itemInput = document.getElementById('listInput');
const addItem = document.getElementById('addList');
const groceryList = document.getElementById('groceryList');

// function for adding an item
function addToList() {
    const item = itemInput.value.trim()

    if (item) {
        createItem(item);
        itemInput.value = '';
    }
}

addItem.addEventListener('click', addToList)

// function for creating an item 
function createItem(item) {
    const newItem = document.createElement('li')
    
    newItem.textContent = item;

    groceryList.appendChild(newItem);
}

