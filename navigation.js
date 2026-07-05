// =====================================================
// ABUFAUZAN TECH Cooperative Management Platform (CMP)
// Navigation Module
// =====================================================

const navButtons = document.querySelectorAll(".nav-btn");

function showPage(pageName) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");
        page.classList.add("hidden");

    });

    const selectedPage =
        document.getElementById(pageName + "Page");

    if (selectedPage) {

        selectedPage.classList.remove("hidden");
        selectedPage.classList.add("active");

    }

    navButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.page === pageName) {

            button.classList.add("active");

        }

    });

}

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        showPage(button.dataset.page);

    });

});

console.log("Navigation Module Loaded");
