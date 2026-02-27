function addSubject() {
    let name = document.getElementById("subjectName").value;
    let diff = document.getElementById("difficulty").value;
    let examDate = document.getElementById("examDate").value;

    if (name === "" || examDate === "") {
        alert("Please fill all fields");
        return;
    }

    // Difficulty → required hours
    let hoursRequired = {
        easy: 5,
        medium: 10,
        hard: 15
    };

    let requiredHours = hoursRequired[diff];

    // Calculate days left
    let today = new Date();
    let exam = new Date(examDate);

    let diffTime = exam.getTime() - today.getTime();
    let daysLeft = Math.ceil(diffTime / (1000 * 3600 * 24));

    if (daysLeft <= 0) {
        alert("Exam date must be in the future");
        return;
    }

    // Hours per day
    let hoursPerDay = (requiredHours / daysLeft).toFixed(2);

    // Add to table
    let table = document.getElementById("timetable");
    let row = table.insertRow(-1);

    row.innerHTML = `
        <td>${name}</td>
        <td>${diff}</td>
        <td>${requiredHours} hrs</td>
        <td>${hoursPerDay} hrs/day</td>
        <td>${daysLeft}</td>
    `;

    // Clear inputs
    document.getElementById("subjectName").value = "";
}