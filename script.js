const button = document.getElementById("add");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
// })
// equivalent to
function insertListElement() {
  ul.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`);
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addAfterClick() {
  if (inputLength() > 0) {
    insertListElement();
  }
}

function addAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    insertListElement();
  }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress);












