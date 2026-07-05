export function goToDashboard(user) {

    switch (user.role) {

        case "platform_owner":
        case "platform_admin":
        case "support_officer":
            window.location.href = "/platform/dashboard.html";
            break;

        case "organization_admin":
        case "finance_officer":
        case "contribution_officer":
        case "loan_officer":
        case "investment_officer":
        case "welfare_officer":
        case "auditor":
            window.location.href = "/organization/dashboard.html";
            break;

        case "member":
            window.location.href = "/member/dashboard.html";
            break;

        default:
            window.location.href = "/login.html";
    }

              }
