// =====================================================
// CMP - Organization Management (REAL IMPLEMENTATION)
// =====================================================

import { db, auth } from "./firebase.js";
import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Create Organization
export async function createOrganization(orgName) {

    const user = auth.currentUser;

    if (!user) {
        throw new Error("User not authenticated");
    }

    // Generate Org ID
    const orgId = "ORG_" + Date.now();

    const orgRef = doc(db, "organizations", orgId);

    const orgData = {
        profile: {
            name: orgName,
            createdBy: user.uid,
            createdAt: serverTimestamp(),
            status: "active"
        },

        roles: {
            superAdmin: [user.uid],
            admins: []
        },

        settings: {
            maxQueueGroupSize: 12,
            contributionRules: {
                drawEnabled: true,
                queueEnabled: true
            }
        },

        members: {
            [user.uid]: {
                uid: user.uid,
                email: user.email,
                role: "superAdmin",
                joinedAt: serverTimestamp()
            }
        },

        draw: {},
        queue: {},
        donations: {},
        investment: {
            pool: 0,
            members: {},
            externalInvestors: {}
        },

        loans: {},
        ledger: {},
        payments: {},
        announcements: []
    };

    await setDoc(orgRef, orgData);

    console.log("Organization created:", orgId);

    return orgId;
}

// Get Organization
export async function getOrganization(orgId) {

    const orgRef = doc(db, "organizations", orgId);
    const snap = await getDoc(orgRef);

    if (!snap.exists()) {
        throw new Error("Organization not found");
    }

    return snap.data();
}
