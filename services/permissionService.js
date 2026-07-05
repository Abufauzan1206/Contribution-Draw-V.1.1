import { getDocument } from "../firebase/firestore.js";

/**
 * Get a role document.
 */
export async function getRole(roleName) {
    return await getDocument("platform/roles", roleName);
}

/**
 * Check if a role has a permission.
 */
export async function hasPermission(roleName, permission) {
    const roleDoc = await getRole(roleName);

    if (!roleDoc.exists()) {
        return false;
    }

    const permissions = roleDoc.data().permissions || [];

    return permissions.includes(permission);
}

/**
 * Platform Owner check.
 */
export function isPlatformOwner(user) {
    return user.role === "platform_owner";
}

/**
 * Organization Administrator check.
 */
export function isOrganizationAdmin(user) {
    return user.role === "organization_admin";
    }
