import { getPlatformStatistics } from "../../services/dashboard/platformDashboardService.js";

async function loadDashboard() {

    try {

        const stats = await getPlatformStatistics();

        document.getElementById("organizationCount").textContent =
            stats.organizationCount;

        document.getElementById("licenseCount").textContent =
            stats.licenseCount;

        document.getElementById("subscriptionCount").textContent =
            stats.subscriptionCount;

    } catch (error) {

        console.error(error);

    }

}

function setupNavigation() {

    document.getElementById("btnOrganizations")
        .addEventListener("click", () => {

            window.location.href = "organizations.html";

        });

    document.getElementById("btnLicenses")
        .addEventListener("click", () => {

            window.location.href = "licenses.html";

        });

    document.getElementById("btnSubscriptions")
        .addEventListener("click", () => {

            window.location.href = "subscriptions.html";

        });

    document.getElementById("btnAnnouncements")
        .addEventListener("click", () => {

            window.location.href = "announcements.html";

        });

    document.getElementById("btnSupport")
        .addEventListener("click", () => {

            window.location.href = "support.html";

        });

}

loadDashboard();
setupNavigation();
