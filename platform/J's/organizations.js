alert("organizations.js loaded");

const form = document.getElementById("organizationForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Submit button clicked");

    document.getElementById("message").textContent =
        "JavaScript is working.";
});
