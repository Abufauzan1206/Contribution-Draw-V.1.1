import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    runTransaction
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import { db } from "./config.js";

/**
 * Create a document with an auto-generated ID.
 */
export async function createDocument(collectionName, data) {
    return await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
}

/**
 * Create or overwrite a document with a specific ID.
 */
export async function setDocument(collectionName, documentId, data) {
    return await setDoc(doc(db, collectionName, documentId), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
}

/**
 * Retrieve a single document.
 */
export async function getDocument(collectionName, documentId) {
    return await getDoc(doc(db, collectionName, documentId));
}

/**
 * Retrieve all documents in a collection.
 */
export async function getCollection(collectionName) {
    return await getDocs(collection(db, collectionName));
}

/**
 * Update a document.
 */
export async function updateDocument(collectionName, documentId, data) {
    return await updateDoc(doc(db, collectionName, documentId), {
        ...data,
        updatedAt: serverTimestamp()
    });
}

/**
 * Delete a document.
 */
export async function deleteDocument(collectionName, documentId) {
    return await deleteDoc(doc(db, collectionName, documentId));
}

/**
 * Query documents.
 */
export async function queryDocuments(
    collectionName,
    field,
    operator,
    value
) {
    const q = query(
        collection(db, collectionName),
        where(field, operator, value)
    );

    return await getDocs(q);
}

/**
 * Get latest records.
 */
export async function getLatestDocuments(
    collectionName,
    field = "createdAt",
    max = 10
) {
    const q = query(
        collection(db, collectionName),
        orderBy(field, "desc"),
        limit(max)
    );

    return await getDocs(q);
}

// Export Firestore transaction support
export { runTransaction, db };
