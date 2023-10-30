document.getElementById("quizForm").addEventListener("submit", function(event){
    event.preventDefault();

    let totalScore = 0;
    const formData = new FormData(event.target);

    // Sum up the scores from the form data
    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }

    // Display the result
    document.getElementById("score").textContent = totalScore;
    document.getElementById("result").hidden = false;
});
