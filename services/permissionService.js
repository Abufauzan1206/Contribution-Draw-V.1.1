import { getDocument } from "../firebase/firestore.js";

/**
 * Get a platform role.
 */
export async function getPlatformRole(roleName) {
    return await getDocument("platform/roles", roleName);
}

/**
 * Get an organization role.
 */
export async function getOrganizationRole(organizationId, roleName) {
    return await getDocument(
        `organizations/${organizationId}/roles`,
        roleName
    );
}

/**
 * Check permission.
 */
export async function hasPermission(user, permission) {

    let roleDoc;

    if (user.role === "platform_owner" ||
        user.role === "platform_admin" ||
        user.role === "support_officer") {

        roleDoc = await getPlatformRole(user.role);

    } else {

        roleDoc = await getOrganizationRole(
            user.organizationId,
            user.role
        );

    }

    if (!roleDoc.exists()) {
        return false;
    }

    const permissions = roleDoc.data().permissions || [];

    return permissions.includes(permission);
}
