// ===============================
// Home Control System
// Test Version
// ===============================

function lightOn() {
    alert("Light ON");
}

function lightOff() {
    alert("Light OFF");
}

function fanOn() {
    alert("Fan ON");
}

function fanOff() {
    alert("Fan OFF");
}

function startVoice() {
    alert("Voice Control will be added in the next step.");
}

// Temporary Connection Status
window.onload = function () {
    document.getElementById("statusText").innerText = "Ready";
    document.querySelector(".status-dot").style.background = "#22c55e";
};