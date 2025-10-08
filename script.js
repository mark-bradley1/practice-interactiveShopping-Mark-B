// Cache DOM elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("shopping-list");

// Add item to the list
function addItem() {
  const itemText = input.value.trim();
  if (itemText === "") return; // Prevent adding empty items
  // Create list item
  const listItem = document.createElement("li");
  const itemSpan = document.createElement("span");
  itemSpan.textContent = itemText;
  // Create Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editItem(editButton, itemSpan));
  // Create Remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => listItem.remove());
  // Append elements to the list item
  listItem.appendChild(itemSpan);
  listItem.appendChild(editButton);
  listItem.appendChild(removeButton);
  // Add list item to the shopping list
  list.appendChild(listItem);
  // Clear the input field
  input.value = "";
}
// Edit an item
function editItem(button, itemSpan) {
  if (button.textContent === "Edit") {
    const currentText = itemSpan.textContent;
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;
    // Replace span with input
    itemSpan.replaceWith(editInput);
    button.textContent = "Save";
  } else {
    const editInput = button.previousSibling;
    const newText = editInput.value.trim();
    // Create a new span with the updated text
    const updatedSpan = document.createElement("span");
    updatedSpan.textContent = newText || editInput.value;
    // Replace input with updated span
    editInput.replaceWith(updatedSpan);
    button.textContent = "Edit";
  }
}
// Event listener for the Add button
addButton.addEventListener("click", addItem);
// Allow "Enter" key to add items
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItem();
});
