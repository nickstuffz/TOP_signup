const form = document.querySelector("form");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

confirm.addEventListener("input", (e) => {
    if (password.value === confirm.value) {
        confirm.setCustomValidity("");
    }
    else {
        confirm.setCustomValidity("Passwords must match.")
    }
});

password.addEventListener("input", (e) => {
    if (password.value === confirm.value) {
        confirm.setCustomValidity("");
    }
    else {
        confirm.setCustomValidity("Passwords must match.")
    }
});
