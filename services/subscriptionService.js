import { createDocument } from "../firebase/firestore.js";

export async function createSubscription(data) {
    return await createDocument("subscriptions", data);
}
