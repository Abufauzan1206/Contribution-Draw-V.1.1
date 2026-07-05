import { getCollection } from "../firebase/firestore.js";

/**
 * Get platform statistics.
 */
export async function getPlatformStatistics() {

    const organizations = await getCollection("organizations");
    const licenses = await getCollection("licenses");
    const subscriptions = await getCollection("subscriptions");

    return {
        organizationCount: organizations.size,
        licenseCount: licenses.size,
        subscriptionCount: subscriptions.size
    };

      }
