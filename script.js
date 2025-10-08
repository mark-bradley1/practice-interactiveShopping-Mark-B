const addBtn = document.getElementById("addBtn");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

addBtn.addEventListener("click", () => {
  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = itemText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      editBtn.textContent = "Save";
    } else {
      const newText = li.querySelector("input").value.trim();
      span.textContent = newText || "Unnamed Item";

      li.insertBefore(span, li.querySelector("input"));
      li.removeChild(li.querySelector("input"));

      editBtn.textContent = "Edit";
    }
  });

  removeBtn.addEventListener("click", () => {
    shoppingList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);
  shoppingList.appendChild(li);

  itemInput.value = ""; // clear input
});
