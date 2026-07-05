import { observeAuth } from "../firebase/auth.js";
import { getUser } from "./userService.js";

/**
 * Monitor the current user session.
 */
export function monitorSession(onAuthenticated, onUnauthenticated) {

    observeAuth(async (firebaseUser) => {

        if (!firebaseUser) {
            onUnauthenticated();
            return;
        }

        const userDoc = await getUser(firebaseUser.uid);

        if (!userDoc.exists()) {
            onUnauthenticated();
            return;
        }

        const user = userDoc.data();

        if (user.status !== "active") {
            alert("Your account has been disabled.");
            onUnauthenticated();
            return;
        }

        onAuthenticated(user);

    });

}
