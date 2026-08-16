function showWish() {
    const surprise = document.getElementById("surprise");

    surprise.innerHTML = `
        <div class="surprise-message">
            🎉 Surprise! 🎉
            <br><br>
            💖 Tumhari zindagi hamesha khushiyon se bhari rahe! 💖
            <br>
            ✨ Keep smiling and keep shining! ✨
            <br><br>
            🎂🎁🥳
        </div>
    `;

    surprise.style.display = "block";
}
