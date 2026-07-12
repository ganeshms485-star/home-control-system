import { database } from "./firebase-config.js";
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Database references
const lightRef = ref(database, "controls/light");
const fanRef = ref(database, "controls/fan");

// DOM Elements
const lightOnBtn = document.getElementById("lightOn");
const lightOffBtn = document.getElementById("lightOff");
const fanOnBtn = document.getElementById("fanOn");
const fanOffBtn = document.getElementById("fanOff");

// Click Events to write to Firebase
lightOnBtn.addEventListener("click", () => set(lightRef, 1));
lightOffBtn.addEventListener("click", () => set(lightRef, 0));

fanOnBtn.addEventListener("click", () => set(fanRef, 1));
fanOffBtn.addEventListener("click", () => set(fanRef, 0));

// Realtime Update UI based on Firebase Data
onValue(lightRef, (snapshot) => {
    const status = snapshot.val();
    if (status === 1) {
        lightOnBtn.style.opacity = "1";
        lightOffBtn.style.opacity = "0.5";
    } else {
        lightOnBtn.style.opacity = "0.5";
        lightOffBtn.style.opacity = "1";
    }
});

onValue(fanRef, (snapshot) => {
    const status = snapshot.val();
    if (status === 1) {
        fanOnBtn.style.opacity = "1";
        fanOffBtn.style.opacity = "0.5";
    } else {
        fanOnBtn.style.opacity = "0.5";
        fanOffBtn.style.opacity = "1";
    }
});