import { createDocument } from "../firebase/firestore.js";

/**
 * Record an audit log entry.
 */
export async function logAudit({
    organizationId = null,
    userId,
    module,
    action,
    oldValue = null,
    newValue = null
}) {
    return await createDocument("auditLogs", {
        organizationId,
        userId,
        module,
        action,
        oldValue,
        newValue
    });
}
