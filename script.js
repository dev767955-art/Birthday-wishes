function showWish() {
    document.getElementById("surprise").innerHTML =
        "🎉✨ Surprise! ✨🎉<br><br>" +
        "May your life always be filled with happiness, success and beautiful memories! 💖🎂";

    // Confetti
    for (let i = 0; i < 40; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";
    confetti.style.fontSize = "25px";
    confetti.style.zIndex = "9999";
    confetti.style.animation = "fall 3s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
