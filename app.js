let inp = document.getElementById("input");
let btn = document.getElementById("button");
let taskList = document.getElementById("taskList");

let tasks = [];

btn.addEventListener("click", () => {
    let userInput = inp.value;
    if (!userInput.trim()) {
        console.log("No tasks to add");
    } else {
        let lists = document.createElement("li");
        lists.innerText = userInput;
        taskList.appendChild(lists);
        inp.value = "";
        tasks.push(userInput);
        let btn2 = document.createElement("button");
        btn2.textContent = "Delete a Task";
        lists.appendChild(btn2);
        btn2.addEventListener("click", () => {
            lists.remove();
        })
        console.log(tasks);
    }
})



