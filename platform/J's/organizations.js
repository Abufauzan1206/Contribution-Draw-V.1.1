console.log("organizations.js loaded");

const form = document.getElementById("organizationForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    document.getElementById("message").textContent =
        "JavaScript is working.";

});
