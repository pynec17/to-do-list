const addButton = document.getElementById("add-button");
const listDiv = document.getElementById("list")

addButton.addEventListener("click", (event) => {
  console.log(event)

  listDiv.innerHTML += `<div class="list-item">
      <button>Delete</button>
    </div>`
})