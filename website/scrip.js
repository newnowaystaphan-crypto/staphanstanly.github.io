// Typing Effect
let text = "Welcome to My Website 🚀";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Dark Mode Toggle
function toggleDark() {
    document.body.classList.toggle("dark");
}
