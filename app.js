const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

const addTask = () => {
    if (inputBox.value.trim() === '') {
        alert("You must write something...");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
};

addBtn.addEventListener("click", addTask);


listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

