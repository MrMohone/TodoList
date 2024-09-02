const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("please enter your data");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //add X sign
    // li.appendChild(span);
    li.appendChild(span);
  }
  inputBox.value = "";
  save();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); //through line
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);
function save() {
  localStorage.setItem("data", listContainer.innerHTML);
} //data is item holder

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
