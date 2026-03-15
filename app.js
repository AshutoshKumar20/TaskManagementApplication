let inp = document.getElementById("input");
let btn = document.getElementById("button");
let taskList = document.getElementById("taskList");

let tasks = [];

let renderTasks = (userInput) => {
    let lists = document.createElement("li");
    lists.innerText = userInput;
    taskList.appendChild(lists);
    inp.value = "";

    let btn2 = document.createElement("button");
    btn2.textContent = "Delete a Task";
    lists.appendChild(btn2);
    btn2.addEventListener("click", () => {
        let index = tasks.indexOf(userInput);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
        lists.remove();
        console.log(tasks);
    })
    console.log(tasks);
}

btn.addEventListener("click", () => {
    let userInput = inp.value;
    if (!userInput.trim()) {
        console.log("No tasks to add");
    }
    tasks.push(userInput);
    renderTasks(userInput);
});





