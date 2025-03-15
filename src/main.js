const addButton = document.getElementById("add-button");
const listDiv = document.getElementById("list")

// const deleteButtons = document.querySelectorAll(".item-delete");

addButton.addEventListener("click", addItem)

function addItem(event) {


  const newToDoItem = document.querySelector("#to-do-item")

  if (!newToDoItem.value) {
    window.alert("Please add a task")
  } else {
    const newListItem = `<li class="list-item">
    <div class="task">${newToDoItem.value}</div>
    <button class="item-delete" onclick="removeItem(event)">
    Delete
    </button>
    <button onclick="markAsComplete(event)">Mark as complete</button>
    </li>`

    listDiv.innerHTML += newListItem;
    newToDoItem.value = ""
  }

}

function removeItem(event) {
  event.target.parentNode.remove()
}

function markAsComplete(event) {
  console.log(event.target.previousElementSibling.previousElementSibling.innerText)
  event.target.previousElementSibling.previousElementSibling.classList.add("completed-task")
}

// TODO "Mark as incomplete functionality"
// TODO Move complete items to bottom of list?
