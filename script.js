const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// To add the task in the input field

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Checkbox working and deleting task

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To save data in the browser only

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// To display data whenever website is opened again

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();