function addData() {
    let val = document.getElementById("input").value;
    if(val === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${val} <button onclick="this.parentElement.remove()">Delete</button>`;
    document.getElementById("list").appendChild(li);
}
