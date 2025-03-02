const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (validateLogin(username, password)) {
            window.location.href = "search.html";
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});

function validateLogin(username, password) {
    return users.some(user => user.username === username && user.password === password);
}