//Sign In Validation
const loginForm = document.getElementById("sign-in-form");
const loginButton = document.getElementById("signInButton");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "User1" && password === "ILoveElmo!") {
        location = "userDashboard.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})