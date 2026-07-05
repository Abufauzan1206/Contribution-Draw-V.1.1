import {
    createDocument,
    getDocument,
    updateDocument
} from "../firebase/firestore.js";

/**
 * Create a new organization
 */
export async function createOrganization(data) {
    return await createDocument("organizations", {
        status: "active",
        ...data
    });
}

/**
 * Get an organization
 */
export async function getOrganization(id) {
    return await getDocument("organizations", id);
}

/**
 * Update organization
 */
export async function updateOrganization(id, data) {
    return await updateDocument("organizations", id, data);
  }
