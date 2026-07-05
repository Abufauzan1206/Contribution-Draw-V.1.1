/**
 * Notification service (Foundation)
 * Additional providers (Email, SMS, Push) will be added in future sprints.
 */

export function notifySuccess(message) {
    console.log("✅", message);
}

export function notifyError(message) {
    console.error("❌", message);
}

export function notifyInfo(message) {
    console.info("ℹ️", message);
}
