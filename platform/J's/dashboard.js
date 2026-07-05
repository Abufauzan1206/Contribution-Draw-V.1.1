import { getPlatformStatistics } from "../../services/platformDashboardService.js";

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

loadDashboard();
