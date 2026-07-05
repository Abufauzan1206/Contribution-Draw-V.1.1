// =====================================================
// ABUFAUZAN TECH Cooperative Management Platform (CMP)
// Splash Screen Module
// =====================================================

const splashScreen = document.getElementById("splashScreen");
const app = document.getElementById("app");

window.addEventListener("load", () => {
    setTimeout(() => {
        splashScreen.style.display = "none";
        app.classList.remove("hidden");
    }, 2000);
});

console.log("Splash Module Loaded");
