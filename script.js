script.js
const joinButton = document.getElementById("join-button");
const joinMessage = document.getElementById("join-message");
joinButton.addEventListener("click", function () {
  joinMessage.textContent =
    "Thanks for your interest! Contact our team to join the club.";
});