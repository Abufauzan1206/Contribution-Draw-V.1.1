export function hasPermission(user, permission) {
    return user.permissions?.includes(permission);
}

export function isPlatformOwner(user) {
    return user.role === "platform_owner";
}

export function isOrganizationAdmin(user) {
    return user.role === "organization_admin";
}
