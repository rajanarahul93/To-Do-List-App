const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = ()=>{
    if(inputBox.value === ''){
    alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    // Check if the clicked element is an "li"
    if(e.target.tagName === "LI") {
        // Toggle the "checked" class of the "li" element
        e.target.classList.toggle("checked");
        saveData()
    }
    // Check if the clicked element is a "span"
    else if(e.target.tagName === "SPAN") {
        // Remove the parent element of the clicked "span"
        e.target.parentElement.remove();
        saveData()
    }
},false)

saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem("data")
}
// Show task on page load
window.onload = showTask