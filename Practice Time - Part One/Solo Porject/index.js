let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

function addHome(points) {
    homeScore = homeScore + points;
    homeEl.textContent = homeScore;
}

function addGuest(points) {
    guestScore = guestScore + points;
    guestEl.textContent = guestScore;
}