let totalHours = 0;

function addStudy() {
    let subject = document.getElementById("subject").value;
    let hours = parseInt(document.getElementById("hours").value);

    if (!subject || !hours) {
        alert("Please enter subject and hours");
        return;
    }

    totalHours += hours;
    document.getElementById("total").innerText = totalHours;

    let li = document.createElement("li");
    li.innerText = subject + " - " + hours + " hours";
    document.getElementById("list").appendChild(li);

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
}