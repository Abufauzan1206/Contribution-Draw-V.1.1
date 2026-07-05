import {
    createDocument,
    queryDocuments
} from "../firebase/firestore.js";

/**
 * Create a license
 */
export async function createLicense(data) {
    return await createDocument("licenses", data);
}

/**
 * Validate license
 */
export async function validateLicense(organizationId) {
    const result = await queryDocuments(
        "licenses",
        "organizationId",
        "==",
        organizationId
    );

    return result;
}
