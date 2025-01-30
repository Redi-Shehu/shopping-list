const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  newItem = itemInput.value;
  //   validate input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }
  //   create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = document.createElement("button");
  button.classList = "remove-item btn-link text-red";

  const xMark = document.createElement("i");
  xMark.classList.add("fa-solid", "fa-xmark");

  button.appendChild(xMark);
  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
}
// Event Listeners
itemForm.addEventListener("submit", addItem);
