function calculateScore() {
    let totalScore = 0;

    // Add up the scores from all questions.
    for (let i = 1; i <= 10; i++) {
        totalScore += parseInt(document.getElementById(`q${i}`).value);
    }

    // Display the total score.
    document.getElementById("score").innerText = totalScore;

    // Give recommendations based on the score.
    let recommendation = "";

    if (totalScore <= 20) {
        recommendation = "Recommendation for lower scores. Try out Cloudinary's basic features!";
    } else if (totalScore <= 40) {
        recommendation = "Recommendation for mid-range scores. Explore advanced features of Cloudinary!";
    } else {
        recommendation = "You're advanced! Dive deeper into Cloudinary's expert tools!";
    }

    document.getElementById("recommendation").innerText = recommendation;
    document.getElementById("results").style.display = "block";
}
