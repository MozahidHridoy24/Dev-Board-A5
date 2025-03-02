const completedTask = document.getElementById("completed-task");
let totalTask = parseInt(completedTask.innerText)
const assignedTask = document.getElementById("assigned-task");
let remainingTask = parseInt(assignedTask.innerText);


document.getElementById("discover").
    addEventListener("click", function () {
        window.location.href = "./blog.html"
    })

document.getElementById("color-btn").
    addEventListener("click", function () {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        document.body.style.backgroundColor = randomColor;
    })


const buttons = document.querySelectorAll(".complete-card-button")
for (const button of buttons) {
    button.addEventListener("click", function () {
        alert('Board Updated Successfully');
        totalTask++;
        remainingTask--;

        completedTask.innerText = totalTask;
        assignedTask.innerText = remainingTask;

        const cardTitles = button.parentNode.parentNode.querySelector(".card-title").innerText;
        const time = new Date();
        const timeString = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
        const historyDiv = document.getElementById("history");
        const p = document.createElement("p");
        p.innerText = `You have Complete The Task ${cardTitles} at ${timeString}`;
        p.style.marginBottom = "10px";
        p.style.backgroundColor = "#f3f4f6";
        p.style.padding = "8px";
        p.style.borderRadius = "5px";
        historyDiv.appendChild(p);

        this.disabled = true;
        if (remainingTask <= 0) {
            alert("Congrats!!! You have completed all the current task")
        }
    })
}

const today = new Date();
const formattedDate = today.toDateString();
document.getElementById("todays-date").innerText = formattedDate;

document.getElementById("history-btn").
    addEventListener("click", function () {
        const historyDiv = document.getElementsByTagName("p");
        while (historyDiv.length > 0) {
            historyDiv[0].parentNode.removeChild(historyDiv[0]);
        }
    })
