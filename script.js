const button = document.getElementById("add");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
// })
// equivalent to
button.addEventListener("click", function() {
  ul.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`);
  input.value = "";
})



