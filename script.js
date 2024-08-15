const itemInput = document.getElementById('listInput');
const addItemButton = document.getElementById('addList');
const groceryList = document.getElementById('groceryList');

// function for adding an item
function addToList() {
    const item = itemInput.value.trim()
    const message = document.getElementById('alertMessage')
    if (item) {
        createItem(item);
        itemInput.value = '';
        message.textContent = ''
    } else {
        message.textContent = 'Please enter an item.'
    }
}

addItemButton.addEventListener('click', addToList)

// function for creating an item 
function createItem(item) {
    const newItem = document.createElement('li')
    
    newItem.textContent = item;

    groceryList.appendChild(newItem);
}

const groceryItems = () => {
    
    
    JSON.stringify();

} 
localStorage.setItem('grocery_item', groceryItems);