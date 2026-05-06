let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${task} 
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;

        list.appendChild(li);
    });
}

function addData() {
    let input = document.getElementById("input");
    let value = input.value.trim();

    if (value === "") return alert("Enter a task");

    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    render();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
}

// Load on start
render();
