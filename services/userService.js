import {
    createDocument,
    getDocument,
    updateDocument
} from "../firebase/firestore.js";

/**
 * Create a user profile.
 */
export async function createUser(userId, data) {
    return await createDocument("users", {
        userId,
        status: "active",
        ...data
    });
}

/**
 * Get a user profile.
 */
export async function getUser(userId) {
    return await getDocument("users", userId);
}

/**
 * Update a user profile.
 */
export async function updateUser(userId, data) {
    return await updateDocument("users", userId, data);
}
