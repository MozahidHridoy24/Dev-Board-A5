const completedTask = document.getElementById("completed-task");
let totalTask = parseInt(completedTask.innerText)
const assignedTask = document.getElementById("assigned-task");
let remainingTask = parseInt(assignedTask.innerText);

function changeBgColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("discover").
    addEventListener("click", function () {
        window.location.href = "./blog.html"
    })

document.getElementById("color-btn").
    addEventListener("click", function () {
        changeBgColor();
    })


const buttons = document.querySelectorAll(".complete-card-button")
for (const button of buttons) {
    button.addEventListener("click", function () {
        alert('Board Updated Successfully');
        totalTask++;
        remainingTask--;
        console.log(totalTask, remainingTask)

        completedTask.innerText = totalTask;
        assignedTask.innerText = remainingTask;

        const historyDiv = document.getElementById("history");
        const p = document.createElement("p");
        p.innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
        p.style.marginBottom ="10px" ;
       historyDiv.appendChild(p);

        this.disabled = true;
    })
}

const today = new Date();
const formattedDate = today.toDateString();
document.getElementById("todays-date").innerText =formattedDate;

