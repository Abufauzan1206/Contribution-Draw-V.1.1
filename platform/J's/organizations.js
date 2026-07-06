import {
    createOrganization
} from "../../services/organizationService.js";

const form = document.getElementById("organizationForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const organization = {

        name: document.getElementById("organizationName").value,

        email: document.getElementById("organizationEmail").value,

        phone: document.getElementById("organizationPhone").value

    };

    try {

        await createOrganization(organization);

        document.getElementById("message").textContent =
            "Organization registered successfully.";

        form.reset();

    } catch (error) {

    console.error(error);

    alert(
        "Error: " +
        error.code +
        "\n\n" +
        error.message
    );

    document.getElementById("message").textContent =
        error.message;

}
});
